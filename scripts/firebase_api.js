//---------------------------------------------------------------------
// Your web app's Firebase configuration;
// Specifies which firebase project your application is connected with.
//---------------------------------------------------------------------

var firebaseConfig = {

    // Your API stuff goes here;  get it from firebase console
    apiKey: "AIzaSyBsPG0zbGY9GGJjOEfytE3mcjHVG9vLJ6k",
    authDomain: "foodlover-1800.firebaseapp.com",
    databaseURL: "https://foodlover-1800.firebaseio.com",
    projectId: "foodlover-1800",
    storageBucket: "foodlover-1800.appspot.com",
    messagingSenderId: "55334463721",
    appId: "1:55334463721:web:cde11d3ab4abcba577e878"
  
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Create the Firestore database object
  // Henceforce, any reference to the database can be made with "db"
  const db = firebase.firestore();