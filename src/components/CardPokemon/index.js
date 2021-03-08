// material ui
import {
  Card,
  CardMedia,
  Button,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import StarsIcon from "@material-ui/icons/Stars";
import { makeStyles } from "@material-ui/styles";

// react redux
import { useDispatch } from "react-redux";

// thunks
import {
  pokemonAddFavThunk,
  pokemonRemoveFavThunk,
} from "../../store/modules/pokemonFavorite/thunks";
//------------------------------------------
const useStyles = makeStyles({
  cardStyles: {
    maxWidth: 200,
    maxHeight: 300,
    minWidth: 200,
    minHeight: 300,
    width: "100%",
    height: "100%",
    border: "1px solid black",
    margin: 5,
  },
  mediaStyles: {
    height: 190,
  },
  contentStyles: {
    height: 35,
    alignItems: "center",
  },
  actionStyles: {
    justifyContent: "center",
  },
});
//------------------------------------------
const CardItem = ({ character, favorite = false, isFavorite = false }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onAdd = () => {
    dispatch(pokemonAddFavThunk(character));
  };

  const onRemove = () => {
    dispatch(pokemonRemoveFavThunk(character.id));
  };

  return (
    <Card className={classes.cardStyles}>
      <CardMedia
        className={classes.mediaStyles}
        image={character.image}
        title={character.name}
      />
      <CardContent className={classes.contentStyles}>
        <Typography gutterBottom variant="subtitle1" component="h3">
          {character.name}
        </Typography>
      </CardContent>
      <CardActions className={classes.actionStyles}>
        {favorite ? (
          <Button onClick={onRemove} size="small" color="primary">
            Remover
          </Button>
        ) : (
          <>
            {isFavorite ? (
              <StarsIcon />
            ) : (
              <Button onClick={onAdd} size="small" color="primary">
                Adicionar
              </Button>
            )}
          </>
        )}
      </CardActions>
    </Card>
  );
};

export default CardItem;
