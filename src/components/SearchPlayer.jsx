import { useState } from "react";
import { PropTypes } from "prop-types";

export const SearchPlayer = ({ onNewPlayerSearch }) => {
    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ( {target} ) => {
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <=1 ) return;
        onNewPlayerSearch( inputValue.trim() );
        setInputValue('');
    }
    return (
        <form className="mb-4" onSubmit={ onSubmit }>
            <label className="me-2" htmlFor="buscar-player">
            Escribe el tag del jugador
            <input
                id="buscar-player"
                className = "ms-2 border-solid border-2 border-indigo-300 rounded" 
                type = "text"
                placeholder="#gppjp0p"
                value = { inputValue }
                onChange = { onInputChange }
            />
            </label>
            <button 
            className="px-4 ms-2 border-solid border-2 border-indigo-500 bg-indigo-500 text-white rounded" 
            type="submit" 
            id="btn-buscar-player"
            >Buscar</button>
        </form>
    )
}

SearchPlayer.propTypes = {
    onNewPlayerSearch : PropTypes.func
}