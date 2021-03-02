// Switch e Route
import { Switch, Route } from "react-router-dom";

// pages
import Home from "../pages/Home";
import Rem from "../pages/Rem";
import Pokemon from "../pages/Pokemon";

const Routes = () => (
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
    <Route path="/favoritos"></Route>
  </Switch>
);

export default Routes;
