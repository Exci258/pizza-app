import { configureStore } from '@reduxjs/toolkit';
import { mainPageReducer } from 'pages/MainPage/model/slice/mainPageSlice';

export function createReduxStore() {
    const rootReducers = {
        mainPage: mainPageReducer,
    };

    return configureStore({
        reducer: rootReducers,
        devTools: true,
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
