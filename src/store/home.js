// 使用 @reduxjs/toolkit
import { createSlice } from "@reduxjs/toolkit"

// 1.创建home组件所需数据的片段
const homeSlice = createSlice({
  name: 'home', // 根据name自动生成dispatch所需要的type
  initialState: { // 定义初始值

  },
  reducers: { // 写reducer处理语句

  }
})
// export const { xxx,xxx} = homeSlice.actions  // 导出action的dispatch派发方法
export default homeSlice.reducer  // 导出home的reducer片段