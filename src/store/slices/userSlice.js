import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: {},
    isFetching: false,
    error: null,
}

const axiosInstance = axios.create({
    baseURL: 'https://randomuser.me/api/',
});

export const getUserThunk = createAsyncThunk(
    "user/getUser", 
    async (payload, thunkAPI) => {
        try {
            const {data} = await axiosInstance.get('?results=1');
            return data; // fulfilled -> action.payload   
        } catch (error) {
            return thunkAPI.rejectWithValue({message: error.message}); // rejected -> action.payload
        }
    }
);

const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getUserThunk.pending, (state, action) => {
            state.isFetching = true;
            state.error = null;
        });
        builder.addCase(getUserThunk.fulfilled, (state, {payload}) => {
            state.user = payload.results;
            state.isFetching = false;
        });
        builder.addCase(getUserThunk.rejected, (state, {payload}) => {
            state.isFetching = false;
            state.error = payload;
        });
    }
});

export const {reducer, actions} = userSlice;

export default reducer;