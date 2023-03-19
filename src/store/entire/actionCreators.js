import * as ActionType from './constants' // 引入dispatch派发所需要的type常量

import { getEntire } from '@/services/modules/entire'
// import { display } from '@mui/system'
// 获取所有数据
export const fetchEntireDataAction = () => {
  return (dispatch, getState) => {
    getEntire().then(res => {
      dispatch({ type: ActionType.ADD_NUMBER, res })
    })
  }
}