import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './../redux/counter';
import nameReducer from './../redux/counter2';

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        changeName: nameReducer
    }
});

