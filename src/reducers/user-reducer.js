import {ADD_NAME_USER, ADD_PHOTO} from '../actions/constants';

export const user = (state={}, action)=>{ 
    switch(action.type){        
        case ADD_NAME_USER:
            return action.payload;
        default : 
            return state;
    }
}

export const userphoto = (state="", action)=>{
    switch(action.type){        
        case ADD_PHOTO:
            return action.payload;
        default : 
            return state;
    }
}