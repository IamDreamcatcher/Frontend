import {
    getDatabase,
    ref,
    get,
    set,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js"

export async function addPlayedGame(userUID, gameId, result){
    let playedGames = await getFirebasePlayedGames();
    if (!playedGames) {
        playedGames = {};
    }
    let games = await getFirebaseGames();
    const playedGame = {
        user_UID: userUID,
        game_id: gameId,
        game_name: games[gameId].game_name,
        result: result
    }
    const id = generateID();
    playedGames[id] = playedGame;
    sendFirebasePlayedGames(playedGames);
}

export async function getUserPlayedGames(userUID){
    let playedGames = await getFirebasePlayedGames();
    let filteredGames = {};
    for (let id in playedGames) {
        if (playedGames[id].user_UID == userUID) {
            filteredGames[id] = playedGames[id];
        }
    }
    return filteredGames;
}

export async function setGameRecord(gameId, record){
    let games = await getFirebaseGames();
    games[gameId].record = record;
    sendFirebaseGames(games);
}
export async function getGameRecord(gameId){
    let games = await getFirebaseGames();
    return games[gameId].record;
}
export async function putQuestions(gameId, questions){
    let games = await getFirebaseGames();
    games[gameId].questions = questions;
    sendFirebaseGames(games);
    return games[gameId].questions.length;
}
export async function getQuestions(gameId){
    let games = await getFirebaseGames();
    return games[gameId].questions;
}

export async function putNewGame(data){
    let games = await getFirebaseGames();
    console.log("dadawwdqwD", games);
    const id = generateID();
    const game = {
        game_name: data.game_name,
        game_id: id,
        questions: [0],
        record: 0
    }
    console.log("game id: ", id, game);
    if (games) {
        games[id] = game;
    } else {
        games = {id: game};
    }
    sendFirebaseGames(games);
    return id;
}

export async function getFirebaseGames() {
    const db = getDatabase();
    const Ref = ref(db, 'games');
  
    try {
      const snapshot = await get(Ref);
      const data = snapshot.val();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  

export async function sendFirebaseGames(games) {
    const db = getDatabase();
    const invitesRef = ref(db, 'games');
    set(invitesRef, games);
}
export async function getFirebasePlayedGames() {
    const db = getDatabase();
    const Ref = ref(db, 'played');
    try {
        const snapshot = await get(Ref);
        const data = snapshot.val();
        console.log(data);
        return data;
      } catch (error) {
        console.error(error);
    }
}

export async function sendFirebasePlayedGames(games) {
    const db = getDatabase();
    const invitesRef = ref(db, 'played');
    set(invitesRef, games);
}

const generateID = () => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < 7; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}