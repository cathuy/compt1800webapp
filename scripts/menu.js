$(document).ready(function menu() {

    /*var queryString = decodeURIComponent(window.location.search);
    var queries = queryString.split("?");   //delimiter
    var id = queries[1];                 //get what's after '?'
    console.log(id); */

    //fid = q.data().restaurantID.id;

    // db.collection("dishes").get().then(function(q){

    //     q.forEach(function(doc){
    //         restaurantID = doc.data().restaurant.id;
    //         console.log(restaurantID);
    //     })
        

    // })

    db.collection("dishes").get().then(function (q) {
        var availability ;
        q.forEach(function(doc) {

            var availability = doc.data().available;
            var ingredients = doc.data().ingredients;
            var image = doc.data().image;
            var name = doc.data().name;
            var price = doc.data().price;
            var id = doc.data().restaurantID;
            //console.log(doc.data().restaurantID);

            $("#menu").append(
                "<div class='list-group-item flex-column align-items-start'>"
                + "<div class='d-flex w-100'>"
                    + "<img src = 'images/" + image + "' alt = 'restaurant picture'/>" 
                    + "<div>"
                        + "<h5 class='mb-1'>" + name + "</h5>"
                        + "<p class='mb-1'>" + ingredients + "</p>"
                        + "<h6 class='mb-1'>$" + price + "</h6>"
                    + "</div>"
                    + "<div>"
                        + "<button class='mb-1 btn'><i class='fa fa-plus-circle'></i></button>"
                    + "</div>"
                + "</div>"
                + "</div>"
            )

        })


    })
})