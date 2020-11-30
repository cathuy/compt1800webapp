
function displayPromotion(promotionid){
    db.collection("promotions").doc(promotionid).onSnapshot(function (q) {
        var promotionvalue;
        promotionvalue = q.data().delivery;
        if (promotionvalue != 0) {
            $("#promotions").append("<li>Delivery discount: " + promotionvalue + "%</li>");
        }
        if (q.data().pickup != 0) {
            $("#promotions").append("<li>Pick up discount: " + q.data().pickup + "%</li>");
        }
        if (q.data().reservation != 0) {
            $("#promotions").append("<li>Reservation discount: " + q.data().reservation + "%</li>");
        }
    });
}
function status() {
    var queryString = decodeURIComponent(window.location.search);
    var queries = queryString.split("?");
    var id = queries[1];
    db.collection("status").doc(id).onSnapshot(function (q) {
        
        db.collection("restaurant").doc(id).onSnapshot(function (q) {
            $("#name").append("<h2>"+ q.data().name);
            promotionCode = q.data().promotion.id;
            displayPromotion(promotionCode);
        })
     
        var promotionCode;
        document.getElementById("maxPeople").innerText = q.data().maxCustomer;
        document.getElementById("currentPeople").innerText = q.data().currentCustomer;
        document.getElementById("estimateOrder").innerText = q.data().estimateTime;
        var protocol = q.data().protocol;
        var i;
        for (i = 0; i < protocol.length; i++){
            $("#protocol").append("<li>" + protocol[i] + "</li>");
        }
        document.getElementById("lastUpdate").innerText = Date(q.data().time);
            

    })
    var btnback = "<button type='button' class='btn' onclick='window.location.href= &#39;restaurantPage.html?" + id +"&#39;' value='link'>"
    +"<img src='images/Left_Arrow_-512.png' alt='go back' />"
    +"Back</button>"
    $("#bottomBtn").prepend(btnback);
}



status();