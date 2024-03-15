import { createStore} from "redux";
import { dataReducer } from "../reducer/reducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const Reducers = combineReducers({
  dataState: dataReducer
});

// const store = createStore(
//     Reducers
// );

// export default store;

export const store = configureStore({
    reducer: {
        dataState: dataReducer

    }
  })