import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./home"
import entireReducer from "./entire"

// 1.创建store，使用configureStore
const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
  }
})

export default store