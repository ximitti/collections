// hooks
// react redux
import { useSelector, useDispatch } from "react-redux";

// material ui
import { Box, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// components
import CardItem from "../CardRem";
//--------------------------------------------------------------

//--------------------------------------------------------------
const RemFavList = () => {
  const dispatch = useDispatch();
  const remFavorite = useSelector((state) => state.remFavorite);
  return (
    <Box display="flex" flexWrap="wrap">
      {remFavorite.map((element) => (
        <CardItem character={element} favorite />
      ))}
    </Box>
  );
};

export default RemFavList;
