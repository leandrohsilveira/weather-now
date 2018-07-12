
const ACTION = {
    RESTORE: 'app.weather.restoreWeather',
    RESTORE_CITY: 'app.weather.restoreCityWeather',
    FETCH: 'app.weather.fetchCityWeather',
    FETCH_FAILED: 'app.weather.fetchCityWeatherFailed',
    STORE: 'app.weather.storeCityWeather'
};

export default ACTION;

export const restoreWeather = () => ({
    type: ACTION.RESTORE
});

export const restoreCityWeather = (cityRef) => ({
    type: ACTION.RESTORE_CITY,
    payload: {
        cityRef
    }
});

export const fetchCityWeather = (cityRef) => ({
    type: ACTION.FETCH,
    payload: {
        cityRef
    }
});

export const fetchCityFailed = (cityRef, error) => ({
    type: ACTION.FETCH_FAILED,
    payload: {
        cityRef,
        error
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
