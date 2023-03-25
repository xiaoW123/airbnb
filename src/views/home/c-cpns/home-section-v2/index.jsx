import React, { memo } from 'react'

import HomeSection from '../home-section'
import { V2Warpper } from './style'



const HomeSectionV2 = memo((props) => {
  const { infoData } = props
  const { dest_list, title, subtitle, dest_address } = infoData

  return (
    <V2Warpper>
      {infoData && dest_address && <HomeSection
        viewWidth="33.33%"
        title={title}
        subtitle={subtitle}
        Destlist={dest_list}
        selectBar={dest_address}
        isShow={true}
      />}
    </V2Warpper>
  )
})

export default HomeSectionV2