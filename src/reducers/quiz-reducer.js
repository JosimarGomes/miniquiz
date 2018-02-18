import {INICIAR_QUIZ_SUCCESS} from '../actions/constants';

export const questions = (state=[], action)=>{ 
    switch(action.type){        
        case INICIAR_QUIZ_SUCCESS:
            return action.payload;
        default : 
            return state;
    }
}