import { createStore } from 'redux';

const initialState = {
    info: [51.505, -0.09],
    data: 'to get innformation',
    country: 'select country'
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_INFO':
            return { ...state, info: action.payload };
        case 'SET_COUNTRY_DATA':
            return { ...state, data: action.payload };
        case 'SET_COUNTRY':
            return { ...state, country: action.payload };
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
