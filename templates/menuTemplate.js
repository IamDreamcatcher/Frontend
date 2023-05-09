export const menuTemplate = (gamesList) => {
  let html = `
    <label class="menu-title">Games:</label>
    <ul>
  `;
  console.log(gamesList);
  for (let id in gamesList) {
    html += `
      <li>
        <a class="main-content__game-link" href="#question/${gamesList[id].game_id}">${gamesList[id].game_name}</a>
      </li>
    `;
  }

  html += `
    </ul>
  `;

  return html;
};