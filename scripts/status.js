
function status() {
    db.collection("status").doc("01").onSnapshot(function (q) {
        
        var restaurantID = q.data().restaurantID.id;
        db.collection("restaurant").doc(restaurantID).onSnapshot(function (q) {
            $("#name").append("<h2>"+ q.data().name);
        })
     
        var promotionCode;
        document.getElementById("maxPeople").innerText = q.data().maxCustomer;
        document.getElementById("currentPeople").innerText = q.data().currentCustomer;
        document.getElementById("estimateOrder").innerText = q.data().estimateTime;
        promotionCode = q.data().promotion.id;
        db.collection("promotions").doc(promotionCode).onSnapshot(function (q) {
            var promotionvalue;
            promotionvalue = q.data().delivery;
            if (promotionvalue != 0) {
                $("#promotions").append("<li>Delivery discount: " + promotionvalue + "</li>");
            }
            if (q.data().pickup != 0) {
                $("#promotions").append("<li>Pick up discount: " + q.data().pickup + "</li>");
            }
            if (promotionvalue != 0) {
                $("#promotions").append("<li>Reservation discount: " + q.data().reservation + "</li>");
            }
        });
        var protocol = q.data().protocol;
        var i;
        for (i = 0; i < protocol.length; i++)
            $("#protocol").append("<li>" + protocol[i] + "</li>");

    })
}



status();