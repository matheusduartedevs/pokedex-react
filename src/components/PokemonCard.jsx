import React, { useEffect, useState } from 'react'
import '/src/styles/PokemonCard.css'

const PokemonCard = () => {
    const [pokemonCard, setPokemonCard] = useState([])

    const searchPokemon = () => {
        try {
            fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    setPokemonCard(data)
                })
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        searchPokemon()
    }, [])

                return (
                <div>
                    <div className="card-container">
                        <div className="pokemon-card">
                            {
                                
                            }
                            <img src={data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']} alt="Pokemon" />
                            <h3>{data.name}</h3>
                        </div>
                    </div>
                </div>
            )
}

export default PokemonCard