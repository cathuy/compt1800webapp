function res1(){
    db.collection("restaurant").doc("01").onSnapshot(function(q){
        document.getElementById("res1").innerText = q.data().name;
    })
}

res1()