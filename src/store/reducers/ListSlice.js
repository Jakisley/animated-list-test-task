import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    bloks: [],
    animateLastItem: false,
};
let counter = 0;

const getRandomRGB = () => {
    const getRandomNumber = () => {
        return Math.floor(Math.random() * 255);
    };
    return `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
};

export const ListSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addBlock(state) {
            state.bloks.unshift({
                id: counter++,
                backgroundColor: getRandomRGB(),
                animation: 'add',
            });
        },

        animateLastItem(state) {
            const lastEl = state.bloks[state.bloks.length - 1];
            if (lastEl) {
                lastEl.animation = 'delete';
            }
        },

        deleteBlock(state) {
            state.bloks.pop();
        },
    },
});

export default ListSlice.reducer;
