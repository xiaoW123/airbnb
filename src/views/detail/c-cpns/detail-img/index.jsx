import React, { memo } from 'react'

import { ImgWrapper } from './style'

const DetailImg = memo((props) => {
  const { imgItem } = props
  const imgArray = imgItem?.slice(0, 5)
  console.log(imgArray);
  return (
    <ImgWrapper>
      <div className='box_main'>
        <div className='box_a'>
          <img src={imgArray?.[0]} alt="" />
        </div>
        <div className='box_b'>
          <div className='box_1'>
            <img src={imgArray?.[1]} alt="" />
          </div>
          <div className='box_2'>
            <img src={imgArray?.[2]} alt="" />
          </div>
          <div className='box_3'>
            <img src={imgArray?.[3]} alt="" />
          </div>
          <div className='box_4'>
            <img src={imgArray?.[4]} alt="" />
          </div>
        </div>
      </div>
    </ImgWrapper>
  )
})

export default DetailImg