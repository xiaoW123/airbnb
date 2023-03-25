import React, { memo } from 'react'
import { V3Wrapper } from './style'
import HomeSection from '../home-section'
const HomeSectionV3 = memo((props) => {
  const { highscoreInfo } = props
  return (
    <V3Wrapper>
      {highscoreInfo && < HomeSection isShow={false} title={highscoreInfo.title} subtitle={highscoreInfo.subtitle} list={highscoreInfo.list} viewWidth='20%' />}
    </V3Wrapper>
  )
})

export default HomeSectionV3