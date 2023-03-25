import React, { memo, useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { MainWrapper } from './style'
import RoomItem from '@/components/room-item'
import PaginAtion from '@/components/pagin-ation'
import { useNavigate } from 'react-router-dom'

const EntireMain = memo((props) => {
  const navigate = useNavigate()
  // 获取数据
  const { houseList } = useSelector((state) => {
    return {
      houseList: state.entire.houseList,
    }
  }, shallowEqual)


  return (
    <MainWrapper>
      <div className='main_box'>
        {
          houseList.map(item => {
            return (
              <RoomItem listItem={item} key={item.id} viewWidth="20%" isDetail={true} />
            )
          })
        }
      </div>
      <div>
        {/* 分页 */}
        <PaginAtion />
      </div>
    </MainWrapper>
  )
})

export default EntireMain