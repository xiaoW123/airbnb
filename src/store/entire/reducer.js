import * as ActionType from './constants'

// 2.创建reducer函数 
const initialState = {
  entireData: {}
} // 初始化数据
function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.ADD_NUMBER:
      return { ...state, entireData: action.res }

    default:
      return state
  }
}

export default reducer