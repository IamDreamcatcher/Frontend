import {getQuestions, putQuestions} from "../Model.js";
import {addQuestionTemplate} from "../templates/addQuestionTemplate.js"
import {addQuestion1Template} from "../templates/addQuestion1Template.js"
import {addQuestion4Template} from "../templates/addQuestion4Template.js"
const resultsNode = document.getElementById('main');
let questionBox;
let currentQuestions;
let currentQuestion;
let game_id;
let items = [];


export default {
    setData(newItems){
        items = newItems;
    },
    async render(gameId){
        currentQuestions = await getQuestions(gameId);
        game_id = gameId;
        if (localStorage.currentQuestion && localStorage.gameId == gameId){
            currentQuestion = JSON.parse(localStorage.currentQuestion);
        }
        else{
            currentQuestion =
                {
                    type : localStorage.type,
                    questionId: currentQuestions.length,
                };
            currentQuestions.push(currentQuestion);
            localStorage.setItem("currentQuestion", JSON.stringify(currentQuestion));
            localStorage.setItem("gameId", gameId);
        }

        localStorage.setItem("currentQuestions", JSON.stringify(currentQuestions));

        resultsNode.innerHTML = addQuestionTemplate;
        questionBox = document.getElementById("CardBox");
        renderQuestion();
        document.getElementById('buttonOpenCreate2').addEventListener('click', function(){
            addQuestion(1);
        });
        document.getElementById('buttonOptionCreate2').addEventListener('click', function(){
            addQuestion(4);
        });
        document.getElementById('buttonFinish2').onclick = publishGame;

    }
}

async function getData(){
    if (currentQuestion.type == 4){
        const form = document.getElementById("createQuestion");
        console.log(form.elements.answer1.value)
        currentQuestion = {
            question: form.elements.question.value,
            answers: [
                form.elements.answer1.value,
                form.elements.answer2.value,
                form.elements.answer3.value,
                form.elements.answer4.value
            ],
            correctAnswer: document.querySelector('input[name="answer"]:checked').value,
            type: 4,
            questionId: currentQuestion.questionId
        };
    }
    else{
        const form = document.getElementById("createQuestion");
        currentQuestion = {
            question: form.elements.question.value,
            correctAnswer: form.elements.answer.value,
            type: 1,
            questionId: currentQuestion.questionId
        };
    }
    return currentQuestion;
}

async function renderQuestion(){
    if (currentQuestion.type == 1) {
        questionBox.innerHTML = addQuestion1Template;
    } 
    else {
        questionBox.innerHTML = addQuestion4Template;
    }
}

async function addQuestion(type){
    currentQuestions[currentQuestion.questionId] = await getData();
    currentQuestion =
        {
            type : type,
            questionId: currentQuestions.length,
        };
    currentQuestions.push(currentQuestion);
    await putQuestions(localStorage.gameId, currentQuestions);
    localStorage.setItem("currentQuestions", JSON.stringify(currentQuestions));
    localStorage.setItem("currentQuestion", JSON.stringify(currentQuestion));
    renderQuestion();
}


async function publishGame(){
    currentQuestion = await getData()
    currentQuestions[currentQuestion.questionId] = currentQuestion;
    localStorage.removeItem("currentQuestion");
    localStorage.removeItem("currentQuestions");
    await putQuestions(game_id, currentQuestions);
    window.location.href = window.location.href.split('/').slice(0, -1).join('/')
        + '/#menu';
}
