import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js';

import { getAuth } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js';





// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB8Y7OU15I_IyIomfTOEXL0MVsI8Pcbd5g",
    authDomain: "gearup-d7328.firebaseapp.com",
    projectId: "gearup-d7328",
    storageBucket: "gearup-d7328.appspot.com",
    messagingSenderId: "611471043795",
    appId: "1:611471043795:web:2ec91ffaf1f5e0a5983826",
    measurementId: "G-1J9K4ESXHQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

//detect authorization state
// onAuthStateChanged(auth,user => {
//     if (user != null){
//         console.log('logged in');
//     }else{
//         console.log('No user');
//     }
// });

  // const auth = firebase.auth();

  function register(){

    alert('Hello');
    EmailId = document.getElementById('Email').value;
    password = document.getElementById('Password').value;

    if (validate_email(EmailId) == false || validate_password(password) == false ){
        alert('Entered invalid email address or Password');
        return
    }
   
    auth.createUserWithEmailAndPassword(EmailId,password)
    .then(function(){
        var user = auth.currentUser

        alert('User Created');
    })
    .catch(function(error){
        var errorcode=error.code;
        var error_message = error.message;

        alert(error_message)
    });

   

  }

  //validate email

  function validate_email(Email){
      expression = /^[^@]+@\w+(\.\w+)+\w$/
      if (expression.test(Email)== true){
          return true
      }else{
          return false
      }
  }

  function validate_password(Password){
      if(Password < 6){
          return false
      }else{
          return true
      }
  }
