//hooks
// react
import { useState } from "react";

// material ui
import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// components
import RemFavList from "../../components/RemFavList";
import PokemonFavList from "../../components/PokemonFavList";
//------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      minWidth: 300,
    },
    [theme.breakpoints.up("sm")]: {
      minWidth: 800,
      maxWidth: 1000,
    },
    width: "100%",
    backgroundColor: "lightgrey",
    borderRadius: 10,
    border: "2px solid black",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    padding: 5,
  },
}));
//------------------------------------------------
const Favorites = () => {
  const [isRem, setIsRem] = useState(true);
  const classes = useStyles();

  const onRem = () => setIsRem(true);
  const onPokemon = () => setIsRem(false);

  return (
    <Box className={classes.root}>
      <Box display="flex" justifyContent="space-around">
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={onRem}
        >
          Rick & Morty
        </Button>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={onPokemon}
        >
          Pokemon
        </Button>
      </Box>
      <div>{isRem ? <RemFavList /> : <PokemonFavList />}</div>
    </Box>
  );
};

export default Favorites;
