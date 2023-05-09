export const profileTemplate = (userEmail, userGames) => {
    let html = `
      <div class="question-card-open">
        <h2>${userEmail}</h2>
        <table>
          <thead>
            <tr>
              <th>Quiz name:</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
    `;
    if (userGames) {
        console.log(userGames.length)
        for (let id in userGames) {
        html += `
                <tr>
                <td>${userGames[id].game_name}</td>
                <td>${userGames[id].result}</td>
                </tr>
        `;
        }
    }
    html += `
          </tbody>
        </table>
      </div>
    `;
    
    return html;
};