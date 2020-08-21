import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth92859Saga from '../features/EmailAuth92859/redux/sagas';
import CalendarView92857Saga from '../features/CalendarView92857/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth92859Saga,
CalendarView92857Saga,
    
  ]);
}