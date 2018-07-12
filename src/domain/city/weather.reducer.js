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
        case ACTION.STORE:
            return { ...state, [payload.city.ref]: { ...state[payload.city.ref], ...payload.city, loading: false }};
        default:
            return state;
    }
}

export default weatherReducer;