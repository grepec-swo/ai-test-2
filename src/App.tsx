import PokemonList from './components/PokemonList';
import './App.css';


function App() {
  return (
    <div className="pokedex-root">
      <div className="pokedex-device">
        <div className="App">
          <PokemonList />
        </div>
      </div>
      <div className="pokedex-bg" />
    </div>
  );
}

export default App;
