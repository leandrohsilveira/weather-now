import ACTION from "./weather.actions";

const STATE = {
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
};

const weatherReducer = (state = STATE, action) => {
    const payload = action.payload;
    switch (action.type) {
        case ACTION.FETCH:
            return { ...state, [payload.cityRef]: { ...state[payload.cityRef], loading: true } };
        case ACTION.FETCH_FAILED:
            return { ...state, [payload.cityRef]: { ...state[payload.cityRef], error: payload.error, loading: false } };
        case ACTION.STORE:
            return { ...state, [payload.cityRef]: { ...state[payload.cityRef], ...payload.city, loading: false }};
        default:
            return state;
    }
}

export default weatherReducer;