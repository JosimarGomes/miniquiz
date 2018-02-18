import { combineReducers } from 'redux';
import { decks, deck } from './deck-reducer';
import { card } from './card-reducer';
import { questions } from './quiz-reducer';
import { xp } from './xp-reducer';
import {user, userphoto} from './user-reducer';

const appReducer = combineReducers({
    decks,
    deck,
    card,
    questions,
    xp,
    user,
    userphoto
});

const rootReducer = (state, action)=>{
    return appReducer(state, action);
}

export default rootReducer;