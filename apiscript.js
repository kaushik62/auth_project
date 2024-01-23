import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA_q2uvFfJtYtn-CFmS3YMeI_X_U0byz6I",
  authDomain: "project-auth-e65a5.firebaseapp.com",
  databaseURL: "https://project-auth-e65a5-default-rtdb.firebaseio.com",
  projectId: "project-auth-e65a5",
  storageBucket: "project-auth-e65a5.appspot.com",
  messagingSenderId: "738281884617",
  appId: "1:738281884617:web:911b9437a2314ca1db3618",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();


// login with email
let login_btn = document.getElementById("login");
let logged_successfully = document.getElementById("logged_successfully");
let incorrect_user = document.getElementById("incorrect_user");

login_btn.addEventListener("click", function () {
  let email_1 = document.getElementById("email_1").value;
  let password_1 = document.getElementById("password_1").value;

  signInWithEmailAndPassword(auth, email_1, password_1)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      logged_successfully.style.display = "block";
      document.getElementById("sign_in_btn").style.display = "none";
      document.getElementById("sign_out_btn").style.display = "block";
      document.getElementById("sign_up_btn").style.display = "none";
      document.querySelector(".popup_signin").style.display = "none";
      popup_signin.style.display = "none";

      setTimeout(() => {
        window.location.href = "index.html";
      }, 300000);
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      incorrect_user.style.display = "block";
    });

  setTimeout(() => {
    logged_successfully.style.display = "none";
    incorrect_user.style.display = "none";
  }, 4000);
});

//  login with Google
let google_signup = document.querySelector("#google_signup");
google_signup.addEventListener("click", function () {
  signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    const token = credential.accessToken;
    console.log(user);

    setTimeout(() => {
      window.location.href = "index.html";
    }, 300000);

    document.getElementById("sign_in_btn").style.display = "none";
    document.getElementById("sign_out_btn").style.display = "block";
    document.getElementById("sign_up_btn").style.display = "none";
    document.querySelector(".popup_signin").style.display = "none";
    popup_signin.style.display = "none";
  });
});

// login with google
let google_signup_2 = document.querySelector(".google_signup_2");
google_signup_2.addEventListener("click", function () {
  signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    const token = credential.accessToken;
    console.log(user);

    setTimeout(() => {
      window.location.href = "index.html";
    }, 300000);

    document.getElementById("sign_in_btn").style.display = "none";
    document.getElementById("sign_out_btn").style.display = "block";
    document.getElementById("sign_up_btn").style.display = "none";
    document.querySelector(".popup_signin").style.display = "none";
    popup_signin.style.display = "none";
  });
});

//  signout

let sign_out = document.getElementById("sign_out_btn");
let sign_in_btn = document.getElementById("sign_in_btn");

sign_out.addEventListener("click", function () {
  signOut(auth)
    .then(() => {
      alert("Signout successfully !");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 5);
      document.getElementById("sign_out_btn").style.display = "none";

      document.getElementById("sign_in_btn").style.display = "block";
      document.querySelector(".popup_signin").style.display = "block";
    })
    .catch((error) => {
      console.log("An error happened");
    });
});
