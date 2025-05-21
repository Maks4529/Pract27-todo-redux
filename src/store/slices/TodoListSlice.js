import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';

const initialState = {
    messages: [{
        message: "QWERTY...",
        isDone: false,
        id: uuidv4(),
    }],
}

const TodoListSlice = createSlice({
    initialState,
    name: "messages",
    reducers: {
        createMessage: (state, {payload}) => {
            state.messages.push({
                ...payload, 
                isDone: false,
                id: uuidv4(),
            });
        },

        deleteMessage: (state, {payload}) => {
            state.messages = state.messages.filter(m => m.id !== payload);
        },

        updateMessage: (state, {payload: {id, data}}) => {
            const updateMessageIndex = state.messages.findIndex(m => m.id === id);
            state.messages[updateMessageIndex] = {
            ...state.messages[updateMessageIndex], ...data,
            };
        },
    },
});

const {reducer, actions} = TodoListSlice;

export const {createMessage, deleteMessage, updateMessage} = actions;

export default reducer; 