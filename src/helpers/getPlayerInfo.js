import axios from "axios";

export const getPlayerInfo = async ( playerTag ) => {
    const URL = 'http://localhost:3000/player?';
    const response = await axios.get(`${URL}tag=${playerTag}`);
    const { data } = await response;
    const playerInfo = {
        tag : data.tag,
        playerName : data.namePlayer,
        expLevel : data.expLevel,
        trophies : data.trophies,
        highestTrophies : data.highestTrophies,
        soloVictories : data.soloVictories,
        duoVictories : data.duoVictories,
        trioVictories : data.trioVictories
    }
    return playerInfo;
}