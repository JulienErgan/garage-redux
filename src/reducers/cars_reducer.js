// import cars from '../cars';

import { SET_CARS } from '../actions';

export default function(state = [], action) {
    switch(action.type) {
        case SET_CARS:
            return action.payload;
        default:
            return state
    }
}