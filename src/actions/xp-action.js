import {UPDATE_XP} from './constants';

export const updateXp = (result)=>{
console.log('no action', result)
    const _result = result == 'correct' ? 50 : -25;

    return{
        type: UPDATE_XP,
        payload:_result
    }
}