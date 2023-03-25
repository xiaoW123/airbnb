import React, { memo } from 'react'

import { V4Wrapper } from './style'
import HomeSection from '../home-section'

const HomeSectionV4 = memo((props) => {
  const { goodpriceInfo } = props

  return (
    <V4Wrapper>
      {goodpriceInfo && <HomeSection isShow={false} title={goodpriceInfo.title} list={goodpriceInfo.list} viewWidth='20%' />}
    </V4Wrapper>
  )
})

export default HomeSectionV4