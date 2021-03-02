// hooks
// react redux
import { useSelector, useDispatch } from "react-redux";

// react router dom
import { Redirect } from "react-router-dom";

// thunks 
import {pokemonNextThunk, pokemonPreviousThunk} from "../../store/modules/pokemon/thunks"

// -------------------------------------
const RemList = () => {
  const dispatch = useDispatch();
  const pokemonAPI = useSelector((state) => state.pokemonAPI);

  const previousPage = () => {
    dispatch(pokemonPreviousThunk())
  }

  const nextPage = () => {
    dispatch(pokemonNextThunk())
  }

  return (
    <div>
      <div>
        <button onClick={previousPage}>Preview</button>
        <button onClick={nextPage}>Next</button>
      </div>
      {pokemonAPI["data"] ? (
        pokemonAPI.data.results.map((char) => <div>{char.name}</div>)
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default RemList;
