import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import  userReducer  from '../features/User/userSlice'; 
import loginReducer from '../features/User/loginSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    login: loginReducer,
    
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
