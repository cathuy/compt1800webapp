
$(document).ready(function res(){
    db.collection("restaurant").doc("01")
        .onSnapshot(function(q){
            //document.getElementById("res1").innerText = q.data().name;
            $("#resName1").append(q.data().name);
            $("#resType1").append(q.data().typeOfCuisine);
            var address = q.data().Address;
            $("#resAdd1").append(address.Streetnumber + " " + address.City);

    })

    db.collection("restaurant").doc("02")
        .onSnapshot(function(q){
            //document.getElementById("res1").innerText = q.data().name;
            $("#resName2").append(q.data().name);
            $("#resType2").append(q.data().typeOfCuisine);
            var address = q.data().Address;
            $("#resAdd2").append(address.streetNumber + " " + address.city);

    })

    db.collection("restaurant").doc("03")
        .onSnapshot(function(q){
            //document.getElementById("res1").innerText = q.data().name;
            $("#resName3").append(q.data().name);
            $("#resType3").append(q.data().typeOfCuisine);
            var address = q.data().Address;
            $("#resAdd3").append(address.streetNumber + " " + address.city);

    })
})