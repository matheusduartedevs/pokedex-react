import React from 'react'

const Home = () => {
  return (
    <div>
        <div className="search">
            <input type="text" placeholder='Digite o nome do seu Pokemon!' />
        </div>
        <div className="main-content">
            <div className="pokemon-card">
                <img src="/" alt="Pokemon" />
                <h3>Pokemon Nome</h3>
            </div>
        </div>
    </div>
  )
}

export default Home