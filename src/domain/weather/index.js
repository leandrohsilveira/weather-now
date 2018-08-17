import { Domain } from 'redux-loop-composer';
import weatherService from './weatherService';

const INITIAL_STATE = {
    "Nuuk,gl": {
        title: 'Nuuk, GL',
        loading: false
    },
    "Urubici,br": {
        type: 'main',
        title: 'Urubici, BR',
        loading: false
    },
    "Nairobi,ke": {
        title: 'Nairobi, KE',
        loading: false
    },
}

const weatherDomain = new Domain('weather');

const reducer = weatherDomain.reducer(INITIAL_STATE);
const sideEffects = weatherDomain.sideEffects();
const action = weatherDomain.action;

// restoreWeather
export const restoreWeather = () => action('restoreWeather').noPayload();
sideEffects
    .when('restoreWeather')
    .cmd((cmd, payload, state) => {
        return cmd.list(Object.keys(state).map(cityRef => (
            cmd.action(restoreCityWeather(cityRef))
        )));
    })
    .end();

// restoreCityWeather
export const restoreCityWeather = (cityRef) => action('restoreCityWeather').payload({ cityRef });
sideEffects
    .when('restoreCityWeather')
    .run(weatherService.restoreCache)
    .args(({ cityRef }) => [cityRef])
    .then(({ cityRef, city }) => storeCityWeather(cityRef, city, false))
    .catch(({ cityRef }) => fetchCityWeather(cityRef))
    .end();

// fetchCityWeather
export const fetchCityWeather = (cityRef) => action('fetchCityWeather').payload({ cityRef });
reducer
    .when('fetchCityWeather')
    .evolve(({ cityRef }, state) => ({ [cityRef]: { ...state[cityRef], loading: true } }))
    .end();

sideEffects
    .when('fetchCityWeather')
    .cmd((cmd, { cityRef }) => cmd.run(
        weatherService.fetch,
        {
            args: [cityRef],
            successActionCreator: (city) => storeCityWeather(cityRef, city, true),
            failActionCreator: (error) => fetchCityFailed(cityRef, error)
        }
    ))
    .end();

// fetchCityFailed
export const fetchCityFailed = (cityRef, error) => action('fetchCityFailed').payload({ cityRef, error });
reducer
    .when('fetchCityFailed')
    .evolve(({ cityRef, error }, state) => ({ [cityRef]: { ...state[cityRef], loading: false, error } }))
    .end();

// storeCityWeather
export const storeCityWeather = (cityRef, city, persist) => action('storeCityWeather').payload({ cityRef, city, persist });
reducer
    .when('storeCityWeather')
    .evolve(({ cityRef, city }, state) => ({ [cityRef]: { ...state[cityRef], ...city, loading: false } }))
    .end();

sideEffects
    .when('storeCityWeather')
    .run(weatherService.storeCache)
    .args(({ cityRef, city, persist }) => [cityRef, city, persist])
    .end();

export const getWeatherState = state => weatherDomain.fromStore(state).getState();

export default weatherDomain;