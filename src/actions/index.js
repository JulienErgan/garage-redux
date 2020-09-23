// TODO: add and export your own actions
import cars from '../cars';

export const SET_CARS = 'SET_CARS';

export function setCars() {
    // TODO: Api call! For now, simulate a DB
    return {
        type: 'SET_CARS', 
        payload: cars
    } 
}