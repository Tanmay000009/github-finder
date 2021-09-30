import { act } from 'react-dom/test-utils';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USERS,
    GET_REPOS
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
            case SEARCH_USERS:
                return {
                    ...state,
                    users: action.payload,
                    loading: false 
                }
        default:
            return state;
    }
}
export default exportFun;