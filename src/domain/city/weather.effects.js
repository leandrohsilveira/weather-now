import ACTION, { storeCityWeather, fetchCityWeather } from './weather.actions';
import { Cmd } from 'redux-loop';
import weatherService from './weather.service';

const weatherEffects = (state, action) => {
    const payload = action.payload;

    switch(action.type) {
        case ACTION.RESTORE:
            return restoreEffect(state);
        case ACTION.FETCH:
            return fetchEffect(payload.cityRef);
        case ACTION.STORE:
            return storeEffect(payload);
        default:
            return null;
    }
};

export default weatherEffects;

const restoreEffect = (state) => {
    return Cmd.list(Object.keys(state).map(cityRef => {
        const local = window.localStorage.getItem(`app.store.weather.${cityRef}`);
        if(local) {
            return Cmd.action(storeCityWeather(cityRef, JSON.parse(local), false));
        } else {
            return Cmd.action(fetchCityWeather(cityRef));
        }
    }));
};

const fetchEffect = (cityRef) => {
    return Cmd.run(
        weatherService.fetch,
        {
            args: [cityRef],
            successActionCreator: (city) => storeCityWeather(cityRef, city, true)
        }
    );
};

const storeEffect = ({cityRef, city, persist}) => {
    if(persist && city && cityRef) {
        window.localStorage.setItem(`app.store.weather.${cityRef}`, JSON.stringify(city));
    }
    return null;
};