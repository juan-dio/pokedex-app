import PropTypes from "prop-types";
import Card from "./Card";

export default function CardList({ pokemons }) {
  return (
    <div className="flex flex-wrap justify-center">
      {pokemons.map((pokemon) => (
        <Card key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}

CardList.propTypes = {
  pokemons: PropTypes.array.isRequired,
};
