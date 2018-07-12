// FIXME: clients shouldn't hold API keys
const appId = '81405f5beb0aa337cf812451d71e811f';

const _fetch = cityRef => {
    return fetch(`/api/weather?q=${cityRef}&APPID=${appId}&units=metric`)
            .then(response => {
                if(response.status >= 400) {
                    const error = { statusText: response.statusText };
                    throw error;
                }
                return response.json();
            })
            .then(({main}) => {
                return {
                    date: new Date(),
                    value: main.temp,
                    humidity: main.humidity,
                    pressure: main.pressure
                };
            });
}

const weatherService = {
    fetch: _fetch
}

export default weatherService;
