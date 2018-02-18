import { takeLatest, call, put, select } from 'redux-saga/effects';
import { ADD_CARD, SELECT_DECK_SUCCESS, SELECT_CARD, SELECT_CARD_SUCCESS, LOAD_DECK_SUCCESS } from '../../actions/constants';

function* addcard({newcard}){
    const _deck = yield select(({deck}) => deck);
    _deck[0].questions.push(newcard);
    
    yield put({type: SELECT_DECK_SUCCESS, payload:_deck});
    yield put({ type: LOAD_DECK_SUCCESS, payload: [] });
}

function* selectcard({card}){
    yield put({type: SELECT_CARD_SUCCESS, payload: card})
}

export function* cardWorkers(){
    yield takeLatest(ADD_CARD, addcard);
    yield takeLatest(SELECT_CARD, selectcard)
}