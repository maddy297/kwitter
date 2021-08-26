
const firebaseConfig = {
    apiKey: "AIzaSyDnRNlSLs-R9ONwLKIYqxfYI-oUpcDJeVs",
    authDomain: "kwitter-app-61e52.firebaseapp.com",
    databaseURL: "https://kwitter-app-61e52-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-61e52",
    storageBucket: "kwitter-app-61e52.appspot.com",
    messagingSenderId: "252252245221",
    appId: "1:252252245221:web:cabd1771a6ab73e78b580c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    })
}