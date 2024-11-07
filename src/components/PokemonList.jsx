import { useState } from "react";
import useFetch from "../api/useFetch";
import CardList from "./CardList";
import pikachu from "../assets/pikachu.gif";
import ditto from "../assets/ditto.gif";
import leftArrow from "../assets/left-arrow.svg";
import rightArrow from "../assets/right-arrow.svg";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";

export default function PokemonList() {
  const [history, setHistory] = useOutletContext();
  const [url, setUrl] = useState(history.slice(-1));
  const { data, isPending, error } = useFetch(url);

  return (
    <div className="flex flex-wrap justify-center px-4 md:px-20 pt-4 pb-12">
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
      {data && (
        <>
          <CardList pokemons={data.results} />
          <div className="p-4 flex flex-end gap-2">
            {data.previous && (
              <button className="p-2 rounded-md bg-white hover:brightness-90 transition-all">
                <img
                  src={leftArrow}
                  alt="left arrow"
                  onClick={() => {
                    setUrl(data.previous);
                    setHistory([...history, data.previous]);
                  }}
                  className="w-8"
                />
              </button>
            )}
            {data.next && (
              <button className="p-2 rounded-md bg-white hover:brightness-90 transition-all">
                <img
                  src={rightArrow}
                  alt="right arrow"
                  onClick={() => {
                    setUrl(data.next);
                    setHistory([...history, data.next]);
                  }}
                  className="w-8"
                />
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

PokemonList.propTypes = {
  history: PropTypes.array,
  setHistory: PropTypes.func,
};
