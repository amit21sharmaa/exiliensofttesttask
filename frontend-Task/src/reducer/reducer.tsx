import { act } from "react-dom/test-utils";
import { FETCH_DATA_REQUEST } from "../action/action";

interface InitialState{
    status : null | String;
    data: Array<Object>;
}

const initialState: InitialState = {
    status : null,
    data: []
}


export function dataReducer(state = initialState, action:any) {
    switch(action.type) {
        case FETCH_DATA_REQUEST: 
            return {
                ...state,
                data: action.payload,
                status: action.payload.length>0 ? 'success' : 'failed'
            }
        default: 
            return state;
    }
}

export const getData = (state: InitialState) => state.data;