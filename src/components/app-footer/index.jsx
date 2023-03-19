import React, { memo } from 'react'
import footerData from '@/assets/data/footer.json'
import { AppFooterWrapper } from './style'

const AppFooter = memo(() => {
  return (
    <AppFooterWrapper>
      <div className='app_footer wrapper'>
        {
          footerData.map(item => {
            return (
              <div className='footer_item' key={item.name}>
                <div className='footer_item_name'>{item.name}</div>
                <div>
                  {item.list.map(itemList => {
                    return <div className='footer_item_list' key={itemList}>{itemList}</div>
                  })}
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='statement'>© 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301</div>
    </AppFooterWrapper>
  )
})

export default AppFooter