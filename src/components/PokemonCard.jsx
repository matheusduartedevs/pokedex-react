import React, { useEffect, useState } from 'react'

const PokemonCard = () => {
    const [pokemonData, setPokemonData] = useState([])

    const fetchPokemonData = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
            const data = await response.json()
            setPokemonData(data.results)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPokemonData()
    }, [])

    console.log(pokemonData)

    return (
        <div>
            {pokemonData.map((pokemon) => (
                <div key={pokemon.name}>
                    <h2>{pokemon.name}</h2>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}`} />
                </div>
            ))}
        </div>
    )
}

export default PokemonCard