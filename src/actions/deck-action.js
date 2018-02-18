import {LOAD_DECK, LOAD_DECK_SUCCESS, ADD_DECK, SELECT_DECK, DELETE_DECK} from './constants';

export const selectdeck = (id)=>{
    return{
        type: SELECT_DECK,
        id
    }
}

export const adddeck = (newdeck)=>{
    return{
        type: ADD_DECK,
        newdeck
    }
} 

export const deletedeck = (id)=>{
    return{
        type: DELETE_DECK,
        id
    }
}