// hooks
// react redux
import { useSelector } from "react-redux";

// material ui
import { Box } from "@material-ui/core";

// components
import CardItem from "../CardPokemon";
//--------------------------------------------------------------

//--------------------------------------------------------------
const PokemonFavList = () => {
  const pokemonFavorite = useSelector((state) => state.pokemonFavorite);

  return (
    <Box display="flex" flexWrap="wrap" p={2}>
      {pokemonFavorite.map((element) => (
        <CardItem character={element} favorite />
      ))}
    </Box>
  );
};

export default PokemonFavList;
