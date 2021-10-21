const firebaseConfig = {
    apiKey: "AIzaSyB8Y7OU15I_IyIomfTOEXL0MVsI8Pcbd5g",
    authDomain: "gearup-d7328.firebaseapp.com",
    projectId: "gearup-d7328",
    storageBucket: "gearup-d7328.appspot.com",
    messagingSenderId: "611471043795",
    appId: "1:611471043795:web:e6df90d2e826fa7a983826",
    measurementId: "G-EL8DJYYRTE"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

// variable to access collection data
var db = firestore.collection("faculty_info");

let submitButton = document.getElementById('btn_submit');

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    let name = document.getElementById('Name').value;
    let userId = document.getElementById('User_ID').value;
    let phoneNo = document.getElementById('Ph_number').value;
    let email = document.getElementById('Email').value;

    // save data to firestore
    db.doc().set({
        F_ID : userId,
        F_Name : name,
        F_PhoneNo : phoneNo,
        F_Email : email
    }).then( () => {
        console.log("Data saved");
    } ).catch((error) => {
        console.log(error)
    })
})