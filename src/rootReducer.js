import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as app } from './modules/App';

export default combineReducers({
    form: formReducer,
    router: routerReducer,
    app,
});
