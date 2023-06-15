import { useState } from 'react';
import { SearchPlayer, PlayerInfo } from './components';

export const BraulioEstrellasApp = () => {
    const [ player, setPlayer ] = useState('');

    const onSearchPlayer = ( newPlayerSearch ) => {
        if(player === newPlayerSearch) return;
        console.log(newPlayerSearch);
        setPlayer( newPlayerSearch );
    }
    return (
        <section className="p-4">
            <h1>Braulio Estrellas</h1>
            <SearchPlayer 
                onNewPlayerSearch = { onSearchPlayer }
            />
            <PlayerInfo 
                playerTag = { player }
            />
            
        </section>
    )
}


