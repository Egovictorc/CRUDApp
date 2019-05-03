
import { ADD_ARTICLE } from '../constants/action-types';


const initialState = {
    articles: []
}

function rootReducer(state = initialState, action) {
    // switch(action.type) {
    //     case "ADD_ARTICLE":
    //     state.articles.push(action.payload);
    //     default:
    //     return state;
    // }
    if(action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        })
        }
    return state;
    
}

export default rootReducer;