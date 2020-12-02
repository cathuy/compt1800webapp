//---------------------------------------------------------------
// This function will check if the user is signed in.
// If yes, then 
//     1) the "login" text will change to "Logout"
//     2) and, the href will go to "index.html" where any logged in 
//        users will be logged out.
//----------------------------------------------------------------
function disableLoginLink(){
    firebase.auth().onAuthStateChanged(function(user){
        var login = document.getElementById("login");
        if(user){
            console.log("change it to logout");
            
            login.href="index.html";
            login.innerHTML="Logout";
            console.log(window.location.href.includes("index.html"))
            if(window.location.href.includes("index.html")){
                logout();
            }
        } else{
            login.href="login.html";
            login.innerHTML = "log in/ sign up";
        }
    })
}
//disableLoginLink();

//------------------------------------------------
// Call this function at the begining of index.html
// to logout any users before you do anything else
//-------------------------------------------------
function logout(){
    console.log("logging out user");
    firebase.auth().signOut();
    var login = document.getElementById("login");
    login.href="login.html";
    log.innerHTML = "log in/ sign up";
}

