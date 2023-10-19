import axios from 'axios';

import { ALL_USER_FAIL, ALL_USER_REQUEST, ALL_USER_SUCCESS, CLEAR_ERRORS, SAVE_USER_FAIL, SAVE_USER_REQUEST, SAVE_USER_SUCCESS } from '../constants/userConstant';


// Register User
export const saveUser = (userData) => async (dispatch) => {
    try {
        dispatch({ type: SAVE_USER_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post(`/api/v1/saveUser`, userData, config);
        dispatch({ type: SAVE_USER_SUCCESS, payload: data.user })
    }
    catch (error) {
        dispatch({ type: SAVE_USER_FAIL, payload: error });
    }
}

// all user
export const allUser = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_USER_REQUEST });

        const { data } = await axios.get(`/api/v1/alluser`,)
        dispatch({ type: ALL_USER_SUCCESS, payload: data.users });
    }
    catch (error) {
        dispatch({ type: ALL_USER_FAIL, payload: error.response.message });
    }
}

// Clear errors
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}