import * as ActionType from './constants'

// 2.创建reducer函数 
const initialState = {} // 初始化数据
function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.ADD_NUMBER:
      return {}

    default:
      return state
  }
}

export default reducer