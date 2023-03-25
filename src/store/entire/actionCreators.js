import * as ActionType from './constants' // 引入dispatch派发所需要的type常量

import { getEntire } from '@/services/modules/entire'


export const changeHouseListAction = (res) => ({
  type: ActionType.CHANGE_HOUSE_LIST,
  houseList: res
})

export const changeTotalCountAction = (totalCount) => ({
  type: ActionType.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeCurrentPageAction = (currentPage) => ({
  type: ActionType.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeEntireAction = (entireData) => ({
  type: ActionType.CHANGE_ENTIRE,
  entireData
})
// 获取所有数据
export const fetchEntireDataAction = (page = 0) => {
  return (dispatch, getState) => {
    const offset = page * 20
    getEntire(offset).then(res => {
      // 把数据通过dispatch派发给reducer，保存到store
      dispatch(changeEntireAction(res))
      dispatch(changeHouseListAction(res.list))
      dispatch(changeTotalCountAction(res.totalCount))
      dispatch(changeCurrentPageAction(page))
    })

  }
}