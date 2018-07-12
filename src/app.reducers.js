
import { combineReducers } from 'redux-loop';
import { enhancedReducer } from './config/redux.config';
import weatherReducer from './domain/city/weather.reducer';
import weatherEffects from './domain/city/weather.effects';

const appReducers = () => {
    return combineReducers({
        weather: enhancedReducer(weatherReducer, weatherEffects)
    });
};

export default appReducers;