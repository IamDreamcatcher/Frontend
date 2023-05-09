export const question4Template = (question, answers) =>`
<form class="form-box" id="questionT">
    <fieldset class="question-card-open">
        <label>${question}:</label>

        <div class="radio-div">
            <input type="radio" class="custom-radio" name="answer" value="1" id="answer1">
            <input class ="input" disabled value= ${answers[0]}></input>
        </div>
        <div class="radio-div">
            <input type="radio"  class="custom-radio" name="answer" value="2" id="answer2">
            <input class ="input" disabled value= ${answers[1]}></input>
        </div>
        <div class="radio-div">
            <input type="radio" class="custom-radio" name="answer" value="3" id="answer3">
            <input class ="input" disabled value= ${answers[2]}></input>
        </div>
        <div class="radio-div">
            <input type="radio" class="custom-radio" name="answer" value="4" id="answer4">
            <input class ="input" disabled value= ${answers[3]}></input>
        </div>
    </fieldset>

    <button class="button-box" id="buttonNextQuestion" type="submit">Answer</button>
</form>
`;