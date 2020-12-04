$(document).ready(function menu() {

    var queryString = decodeURIComponent(window.location.search);
    var queries = queryString.split("?"); //delimiter
    var id = queries[1]; //get what's after '?'
    console.log(id);

    db.collection("dishes").get().then(function (q) {
        q.forEach(function (doc) {

            restaurantID = doc.data().restaurantID.id;
            foodID = doc.data().id;
            console.log(foodID);

            if (restaurantID == id) {
                db.collection("dishes").doc(foodID).onSnapshot(function (q) {
                    ingredients = doc.data().ingredients;
                    image = doc.data().image;
                    name = doc.data().name;
                    price = doc.data().price;
                    $("#menu").append(
                        "<div class='list-group-item flex-column align-items-start'>" +
                        "<div class='d-flex w-100'>" +
                        "<img class='menuImg' src = 'images/" + image + "' alt = 'restaurant picture'/>" +
                        "<div>" +
                        "<h5 class='mb-1'>" + name + "</h5>" +
                        "<p class='mb-1'>" + ingredients + "</p>" +
                        "<h6 class='mb-1'>$" + price + "</h6>" +
                        "</div>" +
                        "<div>" +
                        "<button id='button" + doc.data().id + "' class='mb-1 btn'><i class='fa fa-plus-circle'></i></button>" +
                        "</div>" +
                        "</div>" +
                        "</div>"
                    )
                    console.log(doc.data().id);
                    var button = document.getElementById("button" + doc.data().id);
                    console.log(button);
                    button.onclick = function() {
                        console.log("it works");
                        $("#food").append(
                            "<h5 class='mb-1'>" + doc.data().name + " $" + doc.data().price + "</h5>"
                        )
                    }
                })
            } else {
                console.log("oops! Something is wrong");
            }
        })
    })
    var btnback = "<button type='button' class='btn' onclick='window.location.href= &#39;restaurantPage.html?" + id +"&#39;' value='link'>"
    +"<img src='images/Left_Arrow_-512.png' alt='go back' />"
    +"Back</button>"
    $("#bottomBtn").prepend(btnback);
})

document.getElementById("cart").style.display = "none"
document.getElementById("order").onclick = function () {
    var x = document.getElementById("cart");
    if (x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

document.getElementById("confirm").onclick = function (){
    alert("Your order has been placed");
}