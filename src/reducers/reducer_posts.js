import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type) {
        case DELETE_POST:
            return _.omit(state, action.payload); // look at the state object, if the state object has a key of the post id just drop it omit it from the object and just return a new object that does not contain that deleted id

        case FETCH_POST:
            /* const post = action.payload.data;
            const newState = { ...state,  };
            newState[post.id] = post;
            return newState; */
            return { ...state, [action.payload.data.id]: action.payload.data }; // this is same to the above 4 lines

        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}