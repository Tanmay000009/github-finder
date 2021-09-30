import { act } from 'react-dom/test-utils';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USERS,
    GET_REPOS,
    GET_USER
} from '../types';

const exportFun = (state,action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                // ... will copy whatever is in the state, and send it.
                // we cannot directly send state
                ...state,
                loading: true,
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false 
            }
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false,
            }
        default:
            return state;
    }
}
export default exportFun;