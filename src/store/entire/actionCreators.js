import * as ActionType from './constants' // 引入dispatch派发所需要的type常量

export const addNumberAction = function (num) {
  return { type: ActionType.ADD_NUMBER, num }
}