import { takeLatest, put} from 'redux-saga/effects';
import {INICIAR_QUIZ, INICIAR_QUIZ_SUCCESS} from '../../actions/constants';


function* iniciarquiz({questions}){
    // validações antes de inicar o quiz
    yield put({type: INICIAR_QUIZ_SUCCESS, payload: questions})
}

export function* quizWorkers(){
    yield takeLatest(INICIAR_QUIZ, iniciarquiz);
}