import '/src/styles/App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='container'>
      <Navbar />
      <div className="pokedex">
        <Home />
      </div>

    </div>
  )
}

export default App
