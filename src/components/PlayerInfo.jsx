import { PropTypes } from "prop-types";
import { useAxiosSearchPlayer } from "../hooks/useAxiosSearchPlayer";

export const PlayerInfo = ( { playerTag } ) => {
    const { userData } = useAxiosSearchPlayer( playerTag );
    const {
        tag,
        playerName,
        expLevel,
        trophies,
        highestTrophies,
        soloVictories,
        duoVictories,
        trioVictories
    } = userData;

    return (
    <ul>
        <li>Tag: {tag}</li>
        <li>Usuario: {playerName}</li>
        <li>Nivel: {expLevel}</li>
        <li>Trofeos Actuales: {trophies}</li>
        <li>Trofeos máximos: {highestTrophies}</li>
        <li>Victorias en Solitario: {soloVictories}</li>
        <li>Victorias a Dúo: {duoVictories}</li>
        <li>Victorias 3 contra 3: {trioVictories}</li>
    </ul>
    )
}

PlayerInfo.propTypes = {
    playerTag : PropTypes.string
}