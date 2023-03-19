// import { ProxyType } from 'immer/dist/internal'
import React, { memo } from 'react'
import { Rate } from 'antd';

import { RoomItemWrapper } from './style'

const RoomItem = memo((props) => {
  const { listItem, viewWidth } = props
  return (
    <RoomItemWrapper viewWidth={viewWidth}>
      <div className='room_item'>
        <div className='room_item_img'>
          <img src={listItem.picture_url} alt="" />
        </div>
        <div className='verify_info'>
          {listItem.verify_info.messages?.join('·')}
        </div>
        <div className='listItem_name'>
          {listItem.name}
        </div>
        <div className='price_format'>
          ¥{listItem.price}/每晚
        </div>
        <div className='pinf_father'>
          <span className='pingf'>
            <Rate defaultValue='5' />
          </span>
          <span className='pinf_size'>
            {listItem.bottom_info?.font_size}·{listItem.bottom_info?.content || "无"}
          </span>
        </div>
      </div>

    </RoomItemWrapper>
  )
})


export default RoomItem