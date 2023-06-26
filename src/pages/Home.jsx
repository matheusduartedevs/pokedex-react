import React from 'react'
import '/src/styles/Home.css'
import Navbar from '../components/Navbar'
import PokemonCard from '../components/PokemonCard'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="search">
        <input type="text" placeholder='Digite o nome do seu Pokemon!' className='search-btn' />
      </div>
      <div className='pokemon'>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </div>
    </div>
  )
}

export default Home