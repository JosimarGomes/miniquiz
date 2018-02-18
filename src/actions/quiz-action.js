import {INICIAR_QUIZ} from './constants';

export const iniciarquiz = (questions)=>{
    return{
        type: INICIAR_QUIZ,
        questions
    }
}