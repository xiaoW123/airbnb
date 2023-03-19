import React, { memo, useEffect } from 'react'

import { V1Wrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'

const HomeSectionV1 = memo((props) => {
  const { title, subtitle, list } = props

  return (
    <V1Wrapper>

      <div>
        {title && <div className='V3_title'>{title}</div>}
        {subtitle && <div className='V3_subtitle'>{subtitle}</div>}
      </div>
      <ScrollView>
        <div className='item_box'>
          <div className='item_father'>
            {
              list && list.map((item) => {
                return (
                  <div key={item.city} className='item_son'>
                    <div className='item_img'>
                      <img src={item.picture_url} />
                    </div>
                    <div className='titel_price'>
                      <div>{item.city}</div>
                      <div>均价&nbsp;{item.price}</div>
                    </div>
                    <div className='bgc'></div>
                  </div>
                )
              })
            }
          </div>
        </div>

      </ScrollView>

    </V1Wrapper>
  )
})

export default HomeSectionV1