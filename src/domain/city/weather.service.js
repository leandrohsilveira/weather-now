
const weatherService = {
    fetch: _fetch
}

export default weatherService;

const _fetch = cityRef => {
    return fetch(`/api/weather?q=${cityRef}`)
            .then(response => {
                return response.json()
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