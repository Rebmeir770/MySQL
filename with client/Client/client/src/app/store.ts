import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import  userReducer  from '../features/User/userSlice'; 
import loginReducer from '../features/User/loginSlice';
import logoutReducer from '../features/User/logoutSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    login: loginReducer,
    logout: logoutReducer,
    
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
