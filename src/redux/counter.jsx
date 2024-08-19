import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    status: "", 
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload; 
        },
    },
    // Define extra reducers for async actions
    extraReducers: (condition) => {
        condition
            .addCase(incrementAsync.pending, (state) => {
                state.status = "loading"; 
                console.log(state.status)
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = "done";
                console.log(state.status)
                state.value += action.payload; 
            });
    },
});

// Define async action
export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async () => {
        const amount = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(10); 
            }, 1000);
        });
        console.log(amount)
        return amount;
    }
);


export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

