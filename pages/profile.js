import {initializeApp} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import firebaseConfig from '../api/firebase-config.js';
import {profileTemplate} from "../templates/profileTemplate.js";
import {getUserPlayedGames} from "../Model.js";

// Initialize Firebase

const resultsNode = document.getElementById('main');
const app = initializeApp(firebaseConfig);

export default {
    async render () {
        let current_user = await getUserData();
        let userGames = await getUserPlayedGames(current_user.uid);
        console.log("user_uid", current_user.uid)
        console.log("games", userGames);
        resultsNode.innerHTML = profileTemplate(current_user.email, userGames);
    }
}
async function getUserData() {
    return new Promise((resolve, reject) => {
      const auth = getAuth();
      onAuthStateChanged(auth, user => {
        if (user) {
          resolve(user);
        } else {
          reject(new Error('User is not authenticated'));
        }
      });
    });
}