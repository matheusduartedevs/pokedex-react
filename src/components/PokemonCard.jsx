import React from 'react'
import '/src/styles/PokemonCard.css'

const PokemonCard = () => {
    return (
        <div>
            <div className="card-container">
                <div className="pokemon-card">
                    <img src="/" alt="Pokemon" />
                    <h3>Pokemon Nome</h3>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard