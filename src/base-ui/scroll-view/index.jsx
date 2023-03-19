import React, { memo, useEffect, useRef, useState, useCallback } from 'react'

import { ScrollWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {

  const [itemIndex, setItemIndex] = useState(0)
  const [leftBtn, setleftBtn] = useState(false)
  const [rightBtn, setrightBtn] = useState(true)
  const scrollView = useRef()
  // let domNode = scrollView.current.children[0].children[0]

  useEffect(() => {

  }, [props.children])

  const btnClickRight = useCallback(() => {
    const index = itemIndex + 1
    const domNode = scrollView.current.children[0].children[0]
    const scrollLeft = domNode.children[index].offsetLeft

    // 以下用来判断左右按钮的显示与隐藏
    const scrollLeftSy = domNode.clientWidth - scrollLeft
    const fatherBox = scrollView.current.children[0].clientWidth
    console.log(scrollLeftSy);
    console.log(fatherBox);
    if (fatherBox > scrollLeftSy) {
      setleftBtn(true)
      setrightBtn(false)
    }

    // 点击按钮设置偏移
    domNode.style.transform = `translate(-${scrollLeft}px)` // 设置偏移量

    setItemIndex(index)
  }, [itemIndex])

  const btnClickLeft = useCallback(() => {
    const index = itemIndex - 1
    const domNode = scrollView.current.children[0].children[0]
    const scrollLeft = domNode.children[index].offsetLeft
    // 设置左右按钮的显示与隐藏
    if (index === 0) {
      setleftBtn(false)
      setrightBtn(true)
    }


    domNode.style.transform = `translate(-${scrollLeft}px)` // 设置偏移量
    setItemIndex(index)
  }, [itemIndex])

  return (
    <ScrollWrapper>
      <div>
        <div>
          {leftBtn && <button className='control left' onClick={btnClickLeft}><IconArrowLeft /></button>}
          {rightBtn && <button className='control right' onClick={btnClickRight}><IconArrowRight /></button>}
        </div>
        <div ref={scrollView}>
          {props.children}
        </div>
      </div>

    </ScrollWrapper>
  )
})

export default ScrollView