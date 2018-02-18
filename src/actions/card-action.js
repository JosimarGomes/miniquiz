import {ADD_CARD, SELECT_CARD} from './constants';

export const addcard = (newcard)=>{
    return{
        type: ADD_CARD,
        newcard
    }
}

export const selectcard = (card)=>{
    console.log('no action', card)
    return{
        type: SELECT_CARD,
        card
    }
}

