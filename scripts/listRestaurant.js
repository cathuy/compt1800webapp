function displaypromotions(promotionid, restaurantid){
    db.collection("promotions").doc(promotion).onSnapshot(function (q) {
        const delivery = q.data().delivery;
        const pickup = q.data().pickup;
        const reservation = q.data().reservation;
        var small = "<small></small>"
        if (delivery > 0) {
            small= "<small>" + q.data().delivery + "% off for delivery order";
        } else if (pickup != 0) {
            small = "<small>" + q.data().pickup + "% off for pickup order</small>";
        } else if (reservation != 0) {
            small="<small>" + q.data().reservation + "% off for reservation</small>";
        }
        $("#"+restaurantid).append(small);
    });
}
function listRestaurant() {
    db.collection("restaurant").get().then(function(q){
        var id, address, image, name, cuisine, small;
        q.forEach(function(doc){
            id = doc.data().id;
            address =  doc.data().Address;
            name = doc.data().name;
            cuisine = doc.data().typeOfCuisine;
            image = doc.data().image;
            promotion = doc.data().promotion.id;
            if(image==""){
                image = "Restaurant.png";
            }
            $("#list-restaurant").append(
                "<a href = 'restaurantPage.html?" + id + "'class = 'list-group-item list-group-item-action flex-column align-items-start restaurant-profile'>"
                    + "<img src = 'images/" + image + "' alt = 'restaurant picture'/>"    
                    + "<div class = 'd-flex justify-content-between' id = '" + id + "'>"
                    + "<h5 class = 'mb-1:'>" + name + "</h5>"
                    + "</div>"
                    + "<p class='mb-1'>"+ address.streetNumber + " " + address.streetName + ", " + address.city + "</p><p>" + address.state + " " + address.postcode + "</p>"
                    + "<small>" +cuisine+ "</small>"
                + "</a>"    
            )
            displaypromotions(promotion, id);
    
        });
    });
}

// function search(){
//     var info = document.getElementById("searchinfo").value;
//     console.log(info);
//     while ($("#list-restaurant").firstChild) {
//         $("#list-restaurant").removeChild($("#list-restaurant").firstChild);
//     }
//     if(info!=""){
        
//         var id, address, image, name, cuisine, small;
//         db.collection("restaurant").get().then(function(q){
//             q.forEach(function(doc){
//             id = doc.data().id;
//             address =  doc.data().Address;
//             name = doc.data().name;
//             cuisine = doc.data().typeOfCuisine;
//             image = doc.data().image;
//             promotion = doc.data().promotion.id;
//             if(image==""){
//                 image = "Restaurant.png";
//             }
//             if(name.includes(info)||info.includes(name)){
//                 info = name;
//             } else if(cuisine.includes(infor)||infor.includes(cuisine)){
//                 info = name;
//             }
//             {
//                 $("#list-restaurant").append(
//                     "<a href = 'restaurantPage.html?" + id + "'class = 'list-group-item list-group-item-action flex-column align-items-start restaurant-profile'>"
//                         + "<img src = 'images/" + image + "' alt = 'restaurant picture'/>"    
//                         + "<div class = 'd-flex justify-content-between' id = '" + id + "'>"
//                         + "<h5 class = 'mb-1:'>" + name + "</h5>"
//                         + "</div>"
//                         + "<p class='mb-1'>"+ address.streetNumber + " " + address.streetName + ", " + address.city + "</p><p>" + address.state + " " + address.postcode + "</p>"
//                         + "<small>" +cuisine+ "</small>"
//                     + "</a>"    
//                 )
//                 displaypromotions(promotion, id);
//             }
            
//             })
//         })
//     }
// }

listRestaurant();
