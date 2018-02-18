import { SELECT_CARD_SUCCESS } from '../actions/constants';

export const card = (state={}, action)=>{ 
    switch(action.type){
        case SELECT_CARD_SUCCESS:
            return action.payload;
        default : 
            return state;
    }
}