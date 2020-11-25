function displayRestaurant(){
    var queryString = decodeURIComponent(window.location.search);
    var queries = queryString.split("?");   //delimiter
    var id = queries[1];                 //get what's after '?'
    console.log(id);
    db.collection("restaurant").doc(id).onSnapshot(function(q){
        $("#name").append("<h2>"+ q.data().name);
    })
    var btnStatus = "<a class='btn btn-primary btn-lg' href='checkstatus.html?"+id+"'>Check status</a>";
    var btnMenu = "<a class='btn btn-primary btn-lg' href='menu1.html?"+id+"'>Menu</a>";
    var btnOrder ="<a class='btn btn-primary btn-lg ' href='menu1.html?"+id+"'>Order take out</a>";
    var btnReservation = "<a class= 'btn btn-primary btn-lg' href='reservation.html?" + id +"' >Make Reservation</a>";
    var btnReview = "<a class= 'btn btn-primary btn-lg' href='review.html?" + id +"'>Review</a>";
    $("#btnRestaurant").append(btnStatus);
    $("#btnRestaurant").append(btnMenu);
    $("#btnRestaurant").append(btnOrder);
    $("#btnRestaurant").append(btnReservation);
    $("#btnRestaurant").append(btnReview);
    
}
displayRestaurant();

        
        
        
        