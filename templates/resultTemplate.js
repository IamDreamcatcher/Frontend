export const resultTemplate = (result, record) => `
<div class="question-card-open">
    <h2>Leaderboard<br></h2>
    <div class="answers result">
        <h3>            
            <span class="label">Your score:</span>
            <span class="value">${result}</span>
        </h3>
        <h3>
            <span class="label">Record:</span>
            <span class="value">${record}</span>
        </h3>
    </div>
</div>
`;