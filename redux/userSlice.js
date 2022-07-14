import { createSlice } from "@reduxjs/toolkit";

export const authConstants = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
}

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            authenticated: false,
            authenticating: false,
            error: null,
            name: null,
            email: null,
            id: null,
            status: null
        }
    },
    reducers: {
        LOGIN_REQUEST: (state, action) => {
            state.user.authenticating = true;
        },
        LOGIN_SUCCESS: (state, action) => {
            state.user.authenticating = false;
            state.user.authenticated = true;
            // console.log('reducer: ', action)
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
            state.user.id = action.payload.id;
            state.user.status = action.payload.status;
        },
        LOGIN_FAILURE: (state, action) => {
            return {
                ...state,
                user: {
                    ...state.user,
                    error: action.payload
                }
            }
        },

    },
});


export const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } = userSlice.actions;
export default userSlice.reducer;