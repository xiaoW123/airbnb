// 使用 @reduxjs/toolkit
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import {
  getGoodpriceData,
  getHomeHighscoreData,
  getHotrecommenddestData,
  getLongforData,
  getHomeDiscountData,
  getPlusData
} from '@/services/modules/home'

// 2.进行网络请求
export const fetchHomeAllDataAction = createAsyncThunk('fetchData', async (paylod, { dispatch }) => {
  // const res = await HYRequest.get({ url: '/home/highscore' })
  // console.log(res);
  // dispatch(changHomeData(res))  // 直接派发
  // return res
  getGoodpriceData().then(res => {
    dispatch(changeGoodpriceDataAction(res))
  })
  getHomeHighscoreData().then(res => {
    dispatch(changeHighscoreInfoAction(res))
  })
  getHotrecommenddestData().then(res => {
    dispatch(changeHotrecommenddestAction(res))
  })
  getLongforData().then(res => {
    dispatch(changeLongforAction(res))
  })
  getHomeDiscountData().then(res => {
    dispatch(changeHomeDiscountAction(res))
  })
  getPlusData().then(res => {
    dispatch(changePlusAction(res))
  })

})


// 1.创建home组件所需数据的片段
const homeSlice = createSlice({
  name: 'home', // 根据name自动生成dispatch所需要的type
  initialState: { // 定义初始值
    goodpriceInfo: {},
    highscoreInfo: {},
    hotrecommenddestInfo: {},
    longforInfo: {},
    discountInfo: {},
    pulsInfo: {}
  },
  reducers: { // 写reducer处理语句
    changeGoodpriceDataAction(state, { payload }) {
      state.goodpriceInfo = payload
    },
    changeHighscoreInfoAction(state, { payload }) {
      state.highscoreInfo = payload
    },
    changeHotrecommenddestAction(state, { payload }) {
      state.hotrecommenddestInfo = payload
    },
    changeLongforAction(state, { payload }) {
      state.longforInfo = payload
    },
    changeHomeDiscountAction(state, { payload }) {
      state.discountInfo = payload
    },
    changePlusAction(state, { payload }) {
      state.pulsInfo = payload
    }
  },
})

export const {
  changeGoodpriceDataAction,
  changeHighscoreInfoAction,
  changeHotrecommenddestAction,
  changeLongforAction,
  changeHomeDiscountAction,
  changePlusAction

} = homeSlice.actions  // 导出action的dispatch派发方法

export default homeSlice.reducer  // 导出home的reducer片段