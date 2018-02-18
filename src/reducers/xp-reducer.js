import {UPDATE_XP} from '../actions/constants';

export const xp = (state=0, action)=>{ 
    switch(action.type){        
        case UPDATE_XP:
        console.log(action.payload)
            return (state + action.payload);
        default : 
            return state;
    }
}