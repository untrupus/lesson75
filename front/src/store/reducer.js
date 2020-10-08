import {
    POST_DECODE_MESSAGE,
    POST_ENCODE_MESSAGE
} from "./actions";

const initialState = {
    encode: {encoded: ''},
    decode: {decoded: ''}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_ENCODE_MESSAGE:
            return {...state, encode: action.value};
        case POST_DECODE_MESSAGE:
            return {...state, decode: action.value};
        default:
            return state;
    }
};

export default reducer;