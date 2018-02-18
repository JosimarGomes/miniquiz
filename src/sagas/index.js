import { takeLatest,fork, all } from 'redux-saga/effects';
import * as deck  from './workers/deck-worker';
import * as card from './workers/card-worker';
import * as quiz from './workers/quiz-worker';

export default function* rootSaga(){
     yield all([
         ...Object.values(deck).map(fork),
         ...Object.values(card).map(fork),
         ...Object.values(quiz).map(fork)
    ])
}