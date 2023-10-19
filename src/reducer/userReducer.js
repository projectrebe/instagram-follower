import { createReducer } from "@reduxjs/toolkit";

const inititalUserState = {
    user: {}
}
export const userReducer = createReducer(inititalUserState, {
    SAVE_USER_REQUEST: (state, action) => {
        return {
            loading: true,
        };
    },
    SAVE_USER_SUCCESS: (state, action) => {
        return {
            ...state,
            loading: false,
            user: action.payload,
        }
    },
    SAVE_USER_FAIL: (state, action) => {
        return {
            ...state,
            loading: false,
            user: null,
            error: action.payload,
        }
    },

    ALL_USER_REQUEST: (state, action) => {
        return {
            loading: true,
        };
    },
    ALL_USER_SUCCESS: (state, action) => {
        return {
            ...state,
            loading: false,
            users: action.payload,
        }
    },
    ALL_USER_FAIL: (state, action) => {
        return {
            ...state,
            loading: false,
            user: null,
            error: action.payload,
        }
    },


    CLEAR_ERRORS: (state, action) => {
        return {
            ...state,
            error: null,
        }
    },
});
