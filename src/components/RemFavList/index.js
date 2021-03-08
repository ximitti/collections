// hooks
// react redux
import { useSelector } from "react-redux";

// material ui
import { Box } from "@material-ui/core";

// components
import CardItem from "../CardRem";
//--------------------------------------------------------------

//--------------------------------------------------------------
const RemFavList = () => {
  const remFavorite = useSelector((state) => state.remFavorite);

  return (
    <Box display="flex" flexWrap="wrap" p={2}>
      {remFavorite.map((element) => (
        <CardItem character={element} favorite />
      ))}
    </Box>
  );
};

export default RemFavList;
