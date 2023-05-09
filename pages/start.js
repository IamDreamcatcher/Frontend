import { getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import firebaseConfig from '../api/firebase-config.js';
import {mainTemplate} from '../templates/mainTemplate.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const resultsNode = document.getElementById('main');
let items = [];

export default {
    setData(newItems) {
        items = newItems;
    },
    render() {
        resultsNode.innerHTML = mainTemplate;
        onAuthStateChanged(auth, (user) => {
            if (!user) {//add link for help
                const newGameLink = document.getElementById("new-game-link");
                const playGameLink = document.getElementById("menu-game-link");
                newGameLink.addEventListener("click", function(event) {
                    event.preventDefault();
                    alert("YOU SHOULD SIGN IN!");
                });
                playGameLink.addEventListener("click", function(event) {
                    event.preventDefault();
                    alert("YOU SHOULD SIGN IN!");
                });
                console.log('User is not logged in');
            }
        });
    }
}