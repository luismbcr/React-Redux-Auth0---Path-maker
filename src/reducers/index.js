import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import menu from './menu';
import paths from './path';


export default (history) => combineReducers({
    router: connectRouter(history),
    menu,
    paths
})