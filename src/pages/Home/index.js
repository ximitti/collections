// material ui
import { Grid, Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// framer motion
import { motion } from "framer-motion";
//----------------------------------------------
const useStyles = makeStyles((theme) => ({
  containerStyles: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      minWidth: 300,
    },
    [theme.breakpoints.up("sm")]: {
      minWidth: 1000,
    },
  },
  cardStyles: {
    width: "100%",
  },
  mediaStyles: {
    height: 0,
    paddingTop: "56.25%",
  },
}));

//----------------------------------------------
const Home = () => {
  const classes = useStyles();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Grid
        className={classes.containerStyles}
        container
        direction="column"
        alignItems="center"
        spacing={2}
      >
        <Grid item container>
          <Grid item xs={12} sm={6}>
            <Card className={classes.cardStyles}>
              <CardMedia
                className={classes.mediaStyles}
                image="/images/rem_w.jpg"
                title="Rick & Morty"
              />
            </Card>
          </Grid>
          <Grid item xs={false} sm={6} />
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={6} />
          <Grid item xs={12} sm={6}>
            <Card className={classes.cardStyles}>
              <CardMedia
                className={classes.mediaStyles}
                image="/images/pokemon_w.jpg"
                title="Pokemon"
              />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Home;
