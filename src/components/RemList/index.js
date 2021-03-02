// hooks
// react redux
import { useSelector, useDispatch } from "react-redux";

// react router dom
import { Redirect } from "react-router-dom";

// thunks 
import {remPreviousThunk, remNextThunk} from "../../store/modules/rem/thunks"

// -------------------------------------
const RemList = () => {
  const dispatch = useDispatch();
  const remAPI = useSelector((state) => state.remAPI);

  const previousPage = () => {
    dispatch(remPreviousThunk())
  }

  const nextPage = () => {
    dispatch(remNextThunk())
  }

  return (
    <div>
      <div>
        <button onClick={previousPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
      {remAPI["data"] ? (
        remAPI.data.results.map((char) => <div>{char.name}</div>)
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default RemList;
