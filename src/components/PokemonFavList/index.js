// hooks
// react redux
import { useSelector, useDispatch } from "react-redux";

// material ui
import { Box, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// components
import CardItem from "../CardPokemon";
//--------------------------------------------------------------

//--------------------------------------------------------------
const PokemonFavList = () => {
  const dispatch = useDispatch();
  const pokemonFavorite = useSelector((state) => state.pokemonFavorite);
  return (
    <Box>
      {pokemonFavorite.map((element) => (
        <CardItem character={element} favorite />
      ))}
    </Box>
  );
};

export default PokemonFavList;
