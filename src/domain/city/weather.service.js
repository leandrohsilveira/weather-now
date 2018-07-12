const _fetch = cityRef => {
    return fetch(`/api/weather?q=${cityRef}`)
            .then(response => {
                if(response.status >= 400) {
                    const error = { message: response.statusText };
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
