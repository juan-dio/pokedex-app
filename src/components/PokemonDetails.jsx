// import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../api/useFetch";
import pikachu from "../assets/pikachu.gif";
import ditto from "../assets/ditto.gif";

export default function PokemonDetails() {
  const { pokemonId } = useParams();
  const {
    data: pokemon,
    isPending,
    error,
  } = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-center px-20 pt-4 pb-12">
      {error && (
        <div className="text-center">
          <img src={ditto} alt="Ditto" className="w-56" />
          <h3 className="text-2xl font-bold">Error</h3>
        </div>
      )}
      {isPending && (
        <div className="text-center">
          <img src={pikachu} alt="Pikachu" className="w-56" />
          <h3 className="text-2xl font-bold">Loading...</h3>
        </div>
      )}
      {pokemon && (
        <div className="w-full bg-white rounded-xl p-10">
          <button onClick={() => navigate(-1)}>Back</button>
          <h2 className="font-bold capitalize text-center text-3xl mb-6">
            {pokemon.name}
          </h2>
          <div className="flex justify-center">
            <img src={pokemon.sprites.front_default} alt="" className="w-40" />
            <img src={pokemon.sprites.back_default} alt="" className="w-40" />
            <img src={pokemon.sprites.front_shiny} alt="" className="w-40" />
            <img src={pokemon.sprites.back_shiny} alt="" className="w-40" />
          </div>
        </div>
      )}
    </div>
  );
}
