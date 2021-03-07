//hooks
// react
import { useState } from "react";
// components
import RemFavList from "../../components/RemFavList";
import PokemonFavList from "../../components/PokemonFavList";
//------------------------------------------------

//------------------------------------------------
const Favorites = () => {
  const [isRem, setIsRem] = useState(true);

  const onRem = () => setIsRem(true);
  const onPokemon = () => setIsRem(false);

  return (
    <div>
      <div>
        <button onClick={onRem}>Rick & Morty</button>
        <button onClick={onPokemon}>Pokemon</button>
      </div>
      <div>{isRem ? <RemFavList /> : <PokemonFavList />}</div>
    </div>
  );
};

export default Favorites;
