import { compose } from 'redux';
import composer from 'redux-loop-composer';
import domainModule from './domain/domainModule';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const app = composer.app('weather-now');

app.addModule(domainModule);

export const store = app.compose((reduxLoop) => compose(reduxLoop, devTools));