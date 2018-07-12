
const ACTION = {
    RESTORE: 'app.weather.restore',
    FETCH: 'app.weather.fetch',
    STORE: 'app.weather.store'
};

export default ACTION;

export const restoreWeather = () => ({
    type: ACTION.RESTORE
});

export const fetchCityWeather = (cityRef) => ({
    type: ACTION.FETCH,
    payload: {
        cityRef
    }
});

export const storeCityWeather = (cityRef, city, persist) => ({
    type: ACTION.STORE,
    payload: {
        cityRef,
        city,
        persist
    }
});