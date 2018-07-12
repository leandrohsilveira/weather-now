import ACTION, { storeCityWeather, fetchCityWeather, fetchCityFailed } from './weather.actions';
import { Cmd } from 'redux-loop';
import moment from 'moment';
import weatherService from './weather.service';

const weatherEffects = (state, action) => {
    const payload = action.payload;

    switch(action.type) {
        case ACTION.RESTORE:
            return restoreEffect(state);
        case ACTION.FETCH:
            return fetchEffect(payload.cityRef);
        case ACTION.FETCH_FAILED:
            return fetchFailedEffect(payload);
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
            const city = JSON.parse(local);
            if(moment(city.date).add(10, 'minutes').isAfter()) {
                return Cmd.action(storeCityWeather(cityRef, city, false));
            }
        }
        return Cmd.action(fetchCityWeather(cityRef));
    }));
};

const fetchEffect = (cityRef) => {
    return Cmd.run(
        weatherService.fetch,
        {
            args: [cityRef],
            successActionCreator: (city) => storeCityWeather(cityRef, city, true),
            failActionCreator: (error) => fetchCityFailed(cityRef, error)
        }
    );
};

const fetchFailedEffect = ({cityRef, error}) => {
    console.warn('Unable to fetch weather of city', cityRef, error);
    return null;
}

const storeEffect = ({cityRef, city, persist}) => {
    if(persist && city && cityRef) {
        window.localStorage.setItem(`app.store.weather.${cityRef}`, JSON.stringify(city));
    }
    return null;
};