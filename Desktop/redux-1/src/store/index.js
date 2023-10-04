import { combineReducers, configureStore } from '@reduxjs/toolkit'
//import counterSlice from './counter/counterSlice'
import userSlice from './user/userSlice'
import cartSlice from './cart/cartSlice'
import productSlice from "./product/productSlice";

import { persistStore, persistReducer } from 'reduxjs-toolkit-persist'
 //persistReducer 리듀서가 실행될때 persist 를 같이 사용하게 묶어서 사용
import storage from 'reduxjs-toolkit-persist/lib/storage' 
//import storageSession from 'reduxjs-toolkit-persist/lib/storage/session' //세션스토리지

const persistConfig = {
  key: 'root', //  localStorage에 저장될 때의 key값.
  storage,
}

const rootReducer = combineReducers({
  cart:cartSlice,
  user:userSlice,
  product:productSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
//rootReducer 와 persist 를 묶어서 사용 
//redux-persist를 사용해서 로컬스토리지에 state 값을 저장하고 페이지가 새로고침이 되면 
//initialState  값이 로컬스토리에 저장된 state 값으로 대체되기 때문에 초기화 되지 않는다. 

const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
    serializableCheck: false,
  })
})

const persistor =  persistStore(store);

export {store , persistor};
