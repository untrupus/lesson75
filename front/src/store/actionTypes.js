import {
    POST_DECODE_MESSAGE,
    POST_ENCODE_MESSAGE
} from "./actions";

import axiosOrder from "../axiosOrder";

const postEncodeMessage = value => {
    return {type: POST_ENCODE_MESSAGE, value};
};

const postDecodeMessage = value => {
    return {type: POST_DECODE_MESSAGE, value};
};

export const encodeMessage = (data) => {
    return async dispatch => {
        const response = await axiosOrder.post("/encode", data);
        dispatch(postEncodeMessage(response.data));
    };
};

export const decodeMessage = (data) => {
    return async dispatch => {
        const response = await axiosOrder.post("/decode", data);
        dispatch(postDecodeMessage(response.data));
    };
};