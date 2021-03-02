// material ui
import { Box } from "@material-ui/core";

const Home = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        width="100%"
      >
        <Box display={{xs: "block", sm: "flex"}} width={{xs: "100%", sm: "50%"}} border={1}></Box>
        <Box dispaly={{xs: "none", sm: "flex"}} width={{xs: "0", sm: "50%"}}></Box>
      </Box>
      <Box>
        <Box dispaly={{xs: "none", sm: "flex"}} width={{xs: "0", sm: "50%"}}></Box>
        <Box display={{xs: "block", sm: "flex"}} width={{xs: "100%", sm: "50%"}} border={1}></Box>
      </Box>
    </Box>
  );
};

export default Home;
