import { takeLatest, call, put, select } from 'redux-saga/effects';
import { ADD_DECK, LOAD_DECK_SUCCESS, LOAD_DECK, SELECT_DECK, SELECT_DECK_SUCCESS, DELETE_DECK, DELETE_DECK_SUCCESS } from '../../actions/constants';
import uuidv1 from 'uuid/v1';
import { deletedeck } from '../../actions/deck-action';

function* adddecks({newdeck}){
    newdeck['questions'] = [];
    newdeck['id'] = uuidv1();
    
    yield put({ type: SELECT_DECK_SUCCESS, payload:[newdeck] });
    yield put({ type: LOAD_DECK_SUCCESS, payload: [newdeck] });
}

function* selectdeck({id}){
    const deck = yield select(({decks}) => decks.filter(deck=>deck.id == id));
    yield put({type: SELECT_DECK_SUCCESS, payload:deck})
}

function* deletedecks({id}){
    const decks = yield select(({decks}) => decks.filter(deck=>deck.id != id));
    yield put({type: DELETE_DECK_SUCCESS, payload:decks})
}

export function* deckWorkers(){
    yield takeLatest(ADD_DECK, adddecks);
    yield takeLatest(SELECT_DECK, selectdeck);
    yield takeLatest(DELETE_DECK, deletedecks);
}
