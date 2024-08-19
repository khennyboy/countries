import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    inputText: ""
};

const nameSlice = createSlice({
    name: 'changeName',
    initialState, 
    reducers: {
        change: (state, action) => {
            console.log('hello')
            state.inputText = action.payload;
        }
    }
});

export const { change } = nameSlice.actions;
export default nameSlice.reducer;
