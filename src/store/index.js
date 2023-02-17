import { configureStore, createSlice } from "@reduxjs/toolkit";

const countersSlice = createSlice({
    name: 'counter',
    initialState:{ counters: 0 },
    reducers:{
        increment(state,action){
            state.counters ++;
        },
        decrement(state,action){
            state.counters--;
        },
        addBy(state,action){
            state.counters+=action.payload;
        },
    }
})

export const action = countersSlice.actions;

const store = configureStore({
    reducer: countersSlice.reducer,
})

export default store;