import React, { memo, useCallback, useEffect, useState } from 'react'
import RoomItem from '@/components/room-item'
import { HomeSectionWrapper } from './style'

import SelectBar from '@/components/select-bar'
import BottomEntire from '@/components/bottom_entire'

const HomeSectionV3 = memo((props) => {

  const { list, title, subtitle, viewWidth, isShow, selectBar, Destlist } = props
  const [name, setname] = useState('')

  useEffect(() => {
    // 设置初始值
    const name = Object.keys(Destlist ?? {})[0]
    if (!name) return
    setname(name)
  }, [Destlist])

  // useCallback当一个函数传给子组件时，可以做到性能优化，防止多次定义
  const tabClickHandle = useCallback(function (name) {
    setname(name)
  }, [Destlist])
  return (
    <HomeSectionWrapper>
      <div className='wrapper'>
        {title && <div className='V3_title'>{title}</div>}
        {subtitle && <div className='V3_subtitle'>{subtitle}</div>}
        {isShow && <SelectBar tabClick={tabClickHandle} selectBar={selectBar} />}

        <div className='V3_listItem'>
          {
            !isShow && list && list.map(item => {
              return <RoomItem listItem={item} key={item.id} viewWidth={viewWidth} />
            })
          }
        </div>
        <div className='V3_listItem'>
          {
            isShow && Destlist && Destlist[name]?.map(item => {
              return <RoomItem listItem={item} key={item.id} viewWidth={viewWidth} />
            })
          }
          <BottomEntire />
        </div>
      </div>
    </HomeSectionWrapper >
  )
})

export default HomeSectionV3