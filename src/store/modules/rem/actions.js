// action types
import {REM_START, REM_NEXT, REM_PREVIOUS} from "./actionsType"

// ----------------------------------------------------------
export const remStart = (api) => ( {type: REM_START, api} )
export const remNext = (nextPage) => ( {type: REM_NEXT, nextPage} )
export const remPrevious = (previousPage) => ( {type: REM_PREVIOUS, previousPage} )
