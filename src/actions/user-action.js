import {ADD_NAME_USER, ADD_PHOTO} from './constants';

export const addname = (name)=>{
    return{
        type: ADD_NAME_USER,
        payload: {name}
    }
}

export const addphotouser = (photo)=>{
    return{
        type: ADD_PHOTO,
        payload: photo
    }
}