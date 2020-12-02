$(document).ready(function menu() {

    var queryString = decodeURIComponent(window.location.search);
    var queries = queryString.split("?"); //delimiter
    var id = queries[1]; //get what's after '?'
    console.log(id);
    var restaurantID, foodID, ingredients, image, name, price;
    db.collection("dishes").get().then(function (q) {
        q.forEach(function (doc) {

            restaurantID = doc.data().restaurantID.id;
            foodID = doc.data().id;
            console.log(restaurantID)
            //console.log(foodID);

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
                        "<p>" + ingredients + "</p>" +
                        "<h6 class='mb-1'>$" + price + "</h6>" +
                        "</div>" +
                        "<div>" +
                        "<button id='button" + doc.data().id + "' class='mb-1 btn'><i class='fa fa-plus-circle'></i></button>" +
                        "</div>" +
                        "</div>" +
                        "</div>"
                    )
                    document.getElementById("button" + doc.data().id).onclick = function () {
                        console.log("it works");
                        $("#food").append(
                            "<h5 class='mb-1'>" + doc.data().name + " $" + doc.data().price + "</h5>"
                        )
                    }
                })
            } else {
                console.log("this dish is not belong to this restaurant");
            }
        })
    })
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