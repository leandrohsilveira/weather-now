import { createStore, compose } from 'redux';
import appReducer from 'app/app.reducer';
import { install, Cmd, loop } from 'redux-loop';

let store;

export default () => {
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    if (devTools) {
        return createStore(appReducer, compose(install(), devTools));
    } else {
        return createStore(appReducer, install());
    }
};

export function enhancedReducer(reducer, sideEffects) {
    return (state, action) => {
        const newState = reducer(state, action);
        return loop(
            newState,
            sideEffects(newState, action) || Cmd.none
        );
    };
}
