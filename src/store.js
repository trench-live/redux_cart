import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [
        {id: 1, title: 'Велосипед', count: 5},
        {id: 2, title: 'Самокат', count: 4},
        {id: 3, title: 'Гантели', count: 7},
        {id: 4, title: 'Ракетки', count: 1}
    ],
    reducers: {
        increment: (state, action) => {
            const item = state.find(item => item.id === action.payload);
            if (item && item.count < 25) {
                item.count += 1;
            }
        },
        decrement: (state, action) => {
            const itemIndex = state.findIndex(item => item.id === action.payload);
            if (itemIndex !== -1) {
                state[itemIndex].count -= 1;
                if (state[itemIndex].count < 1) {
                    state.splice(itemIndex, 1);
                }
            }
        },
        addItem: (state) => {
            const title = prompt('Введите название товара:');
            if (title && title.trim()) {
                const newId = state.length > 0 ? Math.max(...state.map(item => item.id)) + 1 : 1;
                state.push({ id: newId, title: title.trim(), count: 1 });
            }
        }
    }
});

export const { increment, decrement, addItem } = cartSlice.actions;

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});