
$(document).ready(function res1(){
    db.collection("restaurant").doc("01")
        .onSnapshot(function(q){
            //document.getElementById("res1").innerText = q.data().name;
            $("#resName1").append(q.data().name);
            $("#resType1").append(q.data().typeOfCuisine);

            var address = q.data().Address;
            $("#resAdd1").append(address.Streetnumber + " " + address.City);
        
    })
})