import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/CartSlice';
const store = configureStore({
    reducer: {
        cart: cartReducer, // Sepetimiz için oluşturacağımız reducer
        // Diğer reducer'ları buraya ekleyebilirsiniz
    },
});
export default store;