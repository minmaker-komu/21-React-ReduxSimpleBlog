import _ from 'lodash';
import {FETCH_POSTS} from '../actions';

// receives the previous state. default our state to be an object
export default function (state = {}, action){  
    switch(action.type){
    case FETCH_POSTS:
        return _.mapKeys(action.payload.data, 'id');
    default:
        return state;
    }
}
