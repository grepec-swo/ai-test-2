import React, { useState, useEffect } from 'react';
import type { Pokemon, PokemonListItem } from '../types/pokemon';
import { fetchPokemonList, fetchPokemon } from '../services/api';
import PokemonCard from './PokemonCard';
import PokemonDetails from './PokemonDetails';

const PokemonList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        const listResponse = await fetchPokemonList();
        const pokemonPromises = listResponse.results.map(async (item: PokemonListItem) => {
          const id = parseInt(item.url.split('/').slice(-2, -1)[0]);
          return await fetchPokemon(id);
        });
        const pokemon = await Promise.all(pokemonPromises);
        setPokemonList(pokemon);
      } catch (error) {
        console.error('Error loading Pokemon:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPokemon();
  }, []);

  const filteredPokemon = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePokemonClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleCloseDetails = () => {
    setSelectedPokemon(null);
  };

  if (loading) {
    return <div className="loading">Loading Pokemon...</div>;
  }

  return (
    <div className="pokemon-list">
      <h1>Pokedex</h1>
      <input
        type="text"
        placeholder="Search Pokemon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="pokemon-grid">
        {filteredPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onClick={handlePokemonClick}
          />
        ))}
      </div>
      <PokemonDetails pokemon={selectedPokemon} onClose={handleCloseDetails} />
    </div>
  );
};

export default PokemonList;