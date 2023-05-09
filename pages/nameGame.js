import {putNewGame} from "../Model.js";
import {nameGameTemplate} from "../templates/nameGameTemplate.js";

const resultsNode = document.getElementById('main');
let items = [];

export default {
    setData(newItems) {
        items = newItems;
    },
    render() {
        resultsNode.innerHTML = nameGameTemplate;
        document.getElementById('buttonOpenCreate').onclick = buttonOpenCreate;
        document.getElementById('buttonOptionCreate').onclick = buttonOptionCreate;
    }
}
async function buttonOpenCreate(){
    const form = document.getElementById("createGame");
    let data = {game_name: form.elements.game_name.value };
    const id = await putNewGame(data);
    localStorage.setItem("type", '1');
    window.location.href = '/#addQuestion/' + id;
}
async function buttonOptionCreate(){
    const form = document.getElementById("createGame");
    let data = {game_name: form.elements.game_name.value };
    const id = await putNewGame(data);
    localStorage.setItem("type", '4');
    window.location.href = '/#addQuestion/' + id;
}