// components
import PokemonList from "../../components/PokemonList";

// framer motion
import { motion } from "framer-motion";

//-----------------------------------------------------
const Pokemon = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <PokemonList />
  </motion.div>
);
export default Pokemon;
