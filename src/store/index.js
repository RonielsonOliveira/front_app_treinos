import { persistStore } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import persistedReducers from './modules/reduxPersist.js'
import rootReducer from './modules/rootReducer.js'
import rootSaga from './modules/rootSaga.js'
const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: persistedReducers(rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store)
export default store
