// hooks
// react redux
import { useSelector, useDispatch } from "react-redux";

// react router dom
import { Redirect } from "react-router-dom";

// thunks
import {
  pokemonNextThunk,
  pokemonPreviousThunk,
} from "../../store/modules/pokemon/thunks";

// material ui
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

// components
import CardItem from "../CardPokemon";
//--------------------------------------
const useStyles = makeStyles(() => ({
  containerStyles: {
    maxWidth: 1000,
    width: "100%",
    backgroundColor: "lightgrey",
    borderRadius: 10,
    border: "2px solid black",
    margin: "0 auto",
  },
  buttonStyles: {
    width: 100,
    height: 30,
  },
  buttonContainerStyles: {
    maxWidth: 1000,
    width: "100%",
    margin: "0 auto",
  },
  itemStyles: {
    display: "flex",
    justifyContent: "center",
  },
}));
// -------------------------------------
const RemList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pokemonAPI = useSelector((state) => state.pokemonAPI);

  const previousPage = () => {
    dispatch(pokemonPreviousThunk());
  };

  const nextPage = () => {
    dispatch(pokemonNextThunk());
  };

  return (
    <Grid container spacing={4} direction="column" alignContent="center">
      <Grid className={classes.buttonContainerStyles} item container xs={12}>
        <Grid item xs={6}>
          <Button
            disabled={!pokemonAPI.previous}
            className={classes.buttonStyles}
            variant="contained"
            color="primary"
            onClick={previousPage}
          >
            Previous
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            disabled={!pokemonAPI.next}
            className={classes.buttonStyles}
            variant="contained"
            color="primary"
            onClick={nextPage}
          >
            Next
          </Button>
        </Grid>
      </Grid>
      <Grid className={classes.containerStyles} item container spacing={2}>
        {pokemonAPI["results"] ? (
          pokemonAPI.results.map((char, index) => (
            <Grid
              key={index}
              className={classes.itemStyles}
              item
              xs={12}
              sm={3}
            >
              <CardItem character={char} />
            </Grid>
          ))
        ) : (
          <Redirect to="/" />
        )}
      </Grid>
    </Grid>
  );
};

export default RemList;
