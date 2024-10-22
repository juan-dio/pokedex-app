import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useFetch from "../api/useFetch";
import loading from "../assets/loading.gif";
import ditto from "../assets/ditto.gif";

export default function Card({ pokemon }) {
  const { data, isPending, error } = useFetch(pokemon.url);
  return (
    <div className="w-56 p-2">
      <Link
        to={data && `/pokemons/${data.id}`}
        className="block w-full p-2 rounded-lg bg-white"
      >
        {error && <img src={ditto} alt="Ditto" className="mx-auto h-40" />}
        {isPending && (
          <img src={loading} alt="loading" className="mx-auto h-40" />
        )}
        {data && (
          <img
            src={data.sprites.front_default}
            alt=""
            className="mx-auto w-40 h-40"
          />
        )}
        <h2 className="text-center capitalize">
          {pokemon.name.replace("-", " ")}
        </h2>
      </Link>
    </div>
  );
}

Card.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
