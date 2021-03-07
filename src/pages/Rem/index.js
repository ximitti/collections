// components
import RemList from "../../components/RemList";

// framer motion
import { motion } from "framer-motion";

// ------------------------------------------
const Rem = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <RemList />
  </motion.div>
);

export default Rem;
