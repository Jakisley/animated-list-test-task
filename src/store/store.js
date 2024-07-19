import { configureStore } from '@reduxjs/toolkit';
import listReduser from './reducers/ListSlice';

export const store = configureStore({
    reducer: listReduser,
});
