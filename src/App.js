import "./App.css";
// hooks
// react
import { useEffect } from "react";

// react redux
import { useDispatch } from "react-redux";

// components
import MenuBar from "./components/Menu";

// Switch e Route
import Routes from "./routes";

// thunks
import { remStartThunk } from "./store/modules/rem/thunks";
import { pokemonStartThunk } from "./store/modules/pokemon/thunks";

//--------------------------------------------
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(remStartThunk());
    dispatch(pokemonStartThunk());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <MenuBar />
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
}

export default App;
