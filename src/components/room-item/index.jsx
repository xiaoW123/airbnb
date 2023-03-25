// import { ProxyType } from 'immer/dist/internal'
import React, { memo } from 'react'
import { Rate } from 'antd';

import { RoomItemWrapper } from './style'
import { useNavigate } from 'react-router-dom';
import { changeDetailInfosAction } from '@/store/detail'
import { useDispatch } from 'react-redux';

const RoomItem = memo((props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { listItem, viewWidth, isDetail = false } = props
  function itemClick() {
    if (isDetail) {
      navigate('/detail')
      dispatch(changeDetailInfosAction(listItem))
    }
  }


  return (
    <RoomItemWrapper viewWidth={viewWidth} onClick={itemClick}>
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