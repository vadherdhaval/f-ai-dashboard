import {configureStore} from "@reduxjs/toolkit";
import themeReducer from "../Slices/Theme";
import dashboardReducer from "../Slices/dashboard";
import userReducer from "../Slices/userDetails";

const store = configureStore({
    reducer: {
        THEME: themeReducer,
        USER: userReducer,
        DASHBOARD: dashboardReducer
    }
});
export default store;