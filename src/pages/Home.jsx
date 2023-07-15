import React from 'react'
import '/src/styles/Home.css'
import PokemonCard from '../components/PokemonCard'

const Home = () => {
  return (
    <div className='home'>
      <div className="search">
        <input type="text" placeholder='Digite o nome do seu Pokemon!' className='search-btn' />
      </div>
      <div className='pokemon'>
        <PokemonCard />
      </div>
    </div>
  )
}

export default Home