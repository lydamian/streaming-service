import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'features/auth/authSlice';
import applicantsReducer from '../features/applicants/applicantsSlice';
import alertsReducer from '../features/alerts/alertsSlice';

const store = configureStore({
  reducer: {
    applicants: applicantsReducer,
    auth: authReducer,
    alerts: alertsReducer,
  },
});

export default store;
