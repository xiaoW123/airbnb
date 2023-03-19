import React, { memo } from 'react'

import { Vwrapper } from './style'
import RoomItem from '@/components/room-item'
import ScrollView from '@/base-ui/scroll-view'


const HomeSectionV = memo((props) => {
  const { title, subtitle, list } = props

  return (
    <Vwrapper>
      {title && <div className='V3_title'>{title}</div>}
      {subtitle && <div className='V3_subtitle'>{subtitle}</div>}
      <ScrollView>
        <div className='item_box1'>
          <div className='item_box2'>
            {list && list.map(item => {
              return (
                <div className='box_item' key={item.id}>
                  {list && <RoomItem listItem={item} />}
                </div>
              )
            })}
          </div>
        </div>
      </ScrollView>

    </Vwrapper>
  )
})

export default HomeSectionV