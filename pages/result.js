import {resultTemplate} from "../templates/resultTemplate.js"

const resultsNode = document.getElementById('main');
let items = [];

export default {
    setData(newItems) {
        items = newItems;
    },
    render() {
        resultsNode.innerHTML = resultTemplate;
    }
}