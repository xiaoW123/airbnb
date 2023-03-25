
import React, { memo, useRef, useState } from "react";

import { ShowWrapper } from "./style";

const SlideShow = memo((props) => {
  const boxRef = useRef()
  const [index, setIndex] = useState(0)

  function leftClick() {
    let newIndex = index - 1
    if (newIndex < 0) {
      newIndex = 0
    }
    const itemDiv = boxRef.current.children[0]
    const boxClientWidth = boxRef.current.clientWidth
    const itemClientWidth = boxRef.current.children[0].children[newIndex].clientWidth
    const itemOffsetLeft = boxRef.current.children[0].children[newIndex].offsetLeft

    // 获取中间位置需要的left卷去的px
    let offset = itemClientWidth * 0.5 + itemOffsetLeft - boxClientWidth * 0.5

    if (offset < 0) offset = 0
    itemDiv.style = `transform:translate(${-offset}px)`
    setIndex(newIndex)
  }

  function rightClick() {
    let newIndex = index + 1
    if (newIndex > 6) {
      newIndex = 6
    }
    const itemDiv = boxRef.current.children[0]
    const boxClientWidth = boxRef.current.clientWidth
    const itemClientWidth = boxRef.current.children[0].children[newIndex].clientWidth
    const itemOffsetLeft = boxRef.current.children[0].children[newIndex].offsetLeft


    // 获取中间位置需要的left卷去的px
    let offset = itemClientWidth * 0.5 + itemOffsetLeft - boxClientWidth * 0.5
    let totalDistance = itemDiv.scrollWidth - boxClientWidth
    if (offset > totalDistance) offset = totalDistance
    itemDiv.style = `transform:translate(${-offset}px)`

    setIndex(newIndex)
  }

  return (
    <ShowWrapper>
      <div className="box_silde">
        <div className="box_b">
          <div onClick={leftClick}>左</div>
          <div onClick={rightClick}>右</div>
        </div>
        <div className="box" ref={boxRef}>
          <div className="box_a" >
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
          </div>
        </div>

      </div>
    </ShowWrapper>
  )
})

export default SlideShow