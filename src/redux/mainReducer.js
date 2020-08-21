import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth92859Reducer from '../features/EmailAuth92859/redux/reducers';
import CalendarView92857Reducer from '../features/CalendarView92857/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth92859: EmailAuth92859Reducer,
CalendarView92857: CalendarView92857Reducer,

});