import {getQuestions, getGameRecord, setGameRecord, addPlayedGame} from "../Model.js";
import {question1Template} from "../templates/question1Template.js"
import {question4Template} from "../templates/question4Template.js"
import {resultTemplate} from "../templates/resultTemplate.js"
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import firebaseConfig from '../api/firebase-config.js';

const resultsNode = document.getElementById('main');
const app = initializeApp(firebaseConfig);
const auth = getAuth();
let playQuestions;
let answers = [];
let record = 0;
let game_id = 0;

export default {
    async render(gameId){
        console.log(gameId);
        playQuestions = await getQuestions(gameId);
        game_id = gameId;
        answers = [];
        record = await getGameRecord(gameId);
        await playGame(1);
    }
}

async function playGame(i){
    let questions = playQuestions;
    
    if (i == questions.length){
        const result = getResults();
        if (result > record) {
            record = result;
            setGameRecord(game_id, result);
        }
        let current_user =  await getUserData();
        console.log(current_user.uid, game_id, result);
        await addPlayedGame(current_user.uid, game_id, result);
        resultsNode.innerHTML = resultTemplate(result, record);
    }
    else{
        if (questions[i].type == 1) {
            resultsNode.innerHTML = question1Template(questions[i].question);
        } 
        else {
            resultsNode.innerHTML = question4Template(questions[i].question, questions[i].answers);
        }
        console.log(i);
        
        let form = document.getElementById('questionT');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
        
            answers.push(form.elements.answer.value);    
            playGame(i + 1);
        });
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

function getResults(){
    let result = 0;
    for (let i = 1; i < playQuestions.length; i++){
        if (answers[i - 1] == playQuestions[i].correctAnswer){
            result += 1;
        }
    }
    return result;
}