import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import firebaseConfig from '../api/firebase-config.js';
import {signinTemplate} from "../templates/signinTemplate.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const resultsNode = document.getElementById('main');

export default {
    render () {
        resultsNode.innerHTML = signinTemplate;
        const signInForm = document.getElementById("authorization-form");
        signInForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = signInForm['name'].value;
            const password = signInForm['password'].value;
            console.log(email, password);
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    console.log('User is logged in');
                    window.location.href = window.location.href = window.location.href.split('/').slice(0, -1).join('/') + "/#start";
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        });
    }
}