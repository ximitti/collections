// Switch e Route
import { Switch, Route } from "react-router-dom";

// framer motion
import { AnimatePresence } from "framer-motion";

// pages
import Home from "../pages/Home";
import Rem from "../pages/Rem";
import Pokemon from "../pages/Pokemon";
import Favorites from "../pages/Favorites";

const Routes = () => (
  <AnimatePresence exitBeforeEnter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/rem">
        <Rem />
      </Route>
      <Route path="/pokemon">
        <Pokemon />
      </Route>
      <Route path="/favorites">
        <Favorites />
      </Route>
    </Switch>
  </AnimatePresence>
);

export default Routes;
