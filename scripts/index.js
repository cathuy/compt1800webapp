function searchForm(){
    var address = document.getElementById("address").value;
    console.log(address);
    var findForm = document.getElementById("findForm");
    findForm.action = "listRestaurant.html?" + address;
    console.log(findForm.action);
    localStorage.setItem("searchInfo", address);
}