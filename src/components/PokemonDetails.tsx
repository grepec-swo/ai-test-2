import React from 'react';
import type { Pokemon } from '../types/pokemon';

interface PokemonDetailsProps {
  pokemon: Pokemon | null;
  onClose: () => void;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon, onClose }) => {
  if (!pokemon) return null;

  return (
    <div className="pokemon-details-overlay" onClick={onClose}>
      <div className="pokemon-details" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <div className="details">
          <p><strong>Height:</strong> {pokemon.height / 10} m</p>
          <p><strong>Weight:</strong> {pokemon.weight / 10} kg</p>
          <div className="types">
            <strong>Types:</strong>
            {pokemon.types.map((type, index) => (
              <span key={index} className={`type ${type.type.name}`}>
                {type.type.name}
              </span>
            ))}
          </div>
          <div className="stats">
            <strong>Stats:</strong>
            <ul>
              {pokemon.stats.map((stat, index) => (
                <li key={index}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;