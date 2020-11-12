/* eslint-disable import/no-anonymous-default-export */
import initialState from "./state";
import actions from "./action";

export default (state = initialState, action) => {
    const { type, value } = action;
    switch (type) {
        case actions.SET_LANGUAGE: {
            return { ...state, lang: value };
        }

        case actions.SET_LOADING: {
            return { ...state, loading: value };
        }

        default:
            return state;
    }
};
