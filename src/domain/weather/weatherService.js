import moment from 'moment';

// FIXME: clients shouldn't hold API keys
const appId = '81405f5beb0aa337cf812451d71e811f';

const _fetch = cityRef => {
    return fetch(`/api/weather?q=${cityRef}&APPID=${appId}&units=metric`)
        .then(response => {
            if (response.status >= 400) {
                const error = { statusText: response.statusText };
                throw error;
            }
            return response.json();
        })
        .then(({ main }) => {
            return {
                date: new Date(),
                value: main.temp,
                humidity: main.humidity,
                pressure: main.pressure
            };
        });
}

const restoreCache = cityRef => new Promise((resolve, reject) => {
    const value = window.localStorage.getItem(`app.store.weather.${cityRef}`);
    if (value) {
        const city = JSON.parse(value);
        if (moment(city.date).add(10, 'minutes').isAfter()) {
            resolve({
                cityRef,
                city
            });
        }
    }
    return reject({ cityRef });
});

const storeCache = (cityRef, city, persist) => new Promise((resolve, reject) => {
    if(persist) {
        const value = JSON.stringify(city);
        window.localStorage.setItem(`app.store.weather.${cityRef}`, value);
        resolve({cityRef, city, value});
    } else {
        reject({cityRef, city});
    }
});

const weatherService = {
    fetch: _fetch,
    restoreCache,
    storeCache
}

export default weatherService;
