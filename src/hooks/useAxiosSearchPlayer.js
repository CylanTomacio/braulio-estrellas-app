import { useState, useEffect } from 'react';
import { getPlayerInfo } from '../helpers/getPlayerInfo';

export const useAxiosSearchPlayer = ( player ) => {
    const [userData, setUserData] = useState({});

    useEffect( () => {
        const getPlayerData = async () => {
            if(player !== '') {
                const playerData = await getPlayerInfo(player);
                setUserData( playerData );
            }
        }
        getPlayerData();
    }, [player]);

    return {
        userData
    }
}
