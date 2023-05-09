export const question1Template = (question) => `
<form class="form-box" id="questionT" >
<div class="question-card-open">
    <label for="answer">${question}:</label>
    <input class="input" id="answer" name="answer">

    <button id="buttonNextQuestion" type="submit">Answer</button>
    </div>
</form>
`;