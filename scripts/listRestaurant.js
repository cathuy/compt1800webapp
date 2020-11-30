function displaypromotions(promotionid, restaurantid) {
    db.collection("promotions").doc(promotion).onSnapshot(function (q) {
        const delivery = q.data().delivery;
        const pickup = q.data().pickup;
        const reservation = q.data().reservation;
        var small = "<small></small>"
        if (delivery > 0) {
            small = "<small>" + q.data().delivery + "% off for delivery order";
        } else if (pickup != 0) {
            small = "<small>" + q.data().pickup + "% off for pickup order</small>";
        } else if (reservation != 0) {
            small = "<small>" + q.data().reservation + "% off for reservation</small>";
        }
        $("#" + restaurantid).append(small);
    });
}
function listRestaurant() {
    var searchString = localStorage.getItem("searchInfo");
    var info = String(searchString);
    console.log(info);
    var restaurantRef = db.collection("restaurant");
    
    restaurantRef.get().then(function (q) {
        var id, address, image, name, cuisine, small;
        q.forEach(function (doc) {

            id = doc.data().id;
            address = doc.data().Address;
            console.log(address.city)
            name = doc.data().name;
            cuisine = doc.data().typeOfCuisine;
            image = doc.data().image;
            promotion = doc.data().promotion.id;


            if (image == "") {
                image = "Restaurant.png";
            }
            console.log(address.city.toLowerCase()==info.toLowerCase() || name.toLowerCase().includes(info.toLowerCase()) || cuisine.toLowerCase().includes(info.toLowerCase()));
            if (address.city.toLowerCase()==info.toLowerCase() || name.toLowerCase().includes(info.toLowerCase()) || cuisine.toLowerCase().includes(info.toLowerCase())) {
                console.log(id);
                $("#list-restaurant").append(
                    "<a href = 'restaurantPage.html?" + id + "'class = 'list-group-item list-group-item-action flex-column align-items-start restaurant-profile'>"
                    + "<img src = 'images/" + image + "' alt = 'restaurant picture'/>"
                    + "<div class = 'd-flex justify-content-between' id = '" + id + "'>"
                    + "<h5 class = 'mb-1:'>" + name + "</h5>"
                    + "</div>"
                    + "<p class='mb-1'>" + address.streetNumber + " " + address.streetName + ", " + address.city + "</p><p>" + address.state + " " + address.postcode + "</p>"
                    + "<small>" + cuisine + "</small>"
                    + "</a>"
                )
                displaypromotions(promotion, id);
            }
        });
    });
}

function search() {
    var info = document.getElementById("searchinfo").value;
    console.log(info);
    if (info != "") {
        var searchForm = document.getElementById("searchform");
        searchForm.action = "listRestaurant.html?" + info;
        console.log(searchForm.action);
        localStorage.setItem("searchInfo", info);
    } 
}

listRestaurant();
