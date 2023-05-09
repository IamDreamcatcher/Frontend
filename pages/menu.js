import {menuTemplate} from '../templates/menuTemplate.js';
import {getFirebaseGames} from '../Model.js';

const resultsNode = document.getElementById('main');

export default {
    async render() {
        let games = await getFirebaseGames();
        console.log(games);
        resultsNode.innerHTML = menuTemplate(games);
    }
}