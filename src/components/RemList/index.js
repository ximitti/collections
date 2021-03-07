// hooks
// react redux
import { useSelector, useDispatch } from "react-redux";

// react router dom
import { Redirect } from "react-router-dom";

// thunks
import { remPreviousThunk, remNextThunk } from "../../store/modules/rem/thunks";

// material ui
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// components
import CardItem from "../CardRem";
//--------------------------------------
const useStyles = makeStyles((theme) => ({
  containerStyles: {
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
const RemList = ({ favorite = false }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const remAPI = useSelector((state) => state.remAPI);
  const remFavorite = useSelector((state) => state.remFavorite);

  const previousPage = () => {
    dispatch(remPreviousThunk());
  };

  const nextPage = () => {
    dispatch(remNextThunk());
  };

  return (
    <Grid container spacing={4} direction="column">
      {!favorite && (
        <Grid className={classes.buttonContainerStyles} item container xs={12}>
          <Grid item xs={6}>
            <Button
              disabled={!remAPI.info?.prev}
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
              disabled={!remAPI.info?.next}
              className={classes.buttonStyles}
              variant="contained"
              color="primary"
              onClick={nextPage}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      )}
      {!favorite ? (
        <Grid className={classes.containerStyles} item container spacing={2}>
          {remAPI["results"] ? (
            remAPI.results.map((char, index) => (
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
      ) : (
        <Grid className={classes.containerStyles} item container spacing={2}>
          {remFavorite.length ? (
            remFavorite.map((char, index) => (
              <Grid
                key={index}
                className={classes.itemStyles}
                item
                xs={12}
                sm={3}
              >
                <CardItem character={char} favorite />
              </Grid>
            ))
          ) : (
            <Redirect to="/" />
          )}
        </Grid>
      )}
    </Grid>
  );
};

export default RemList;
