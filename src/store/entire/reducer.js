import * as ActionType from './constants'

// 2.创建reducer函数 
const initialState = {
  entireData: {},
  houseList: [],
  totalCount: 0,
  currentPage: 0
} // 初始化数据
function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.CHANGE_ENTIRE:
      return { ...state, entireData: action.entireData }
    case ActionType.CHANGE_HOUSE_LIST:
      return { ...state, houseList: action.houseList }
    case ActionType.CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount }
    default:
      return state
  }
}

export default reducer