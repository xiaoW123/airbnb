import React, { memo } from 'react'
import { HeaderWrapper } from './style.js'

import IconLogo from '@/assets/svg/icon_logo.jsx'
import IconSearchBar from '@/assets/svg/icon-search-bar.jsx'
import IconGlobal from '@/assets/svg/icon-global'
import IconProfileMenu from '@/assets/svg/icon-profile-menu'
import IconProfileAvatar from '@/assets/svg/icon-profile-avatar'


const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <div className='app_header'>
        <div className='app_header_left'>
          <IconLogo />
        </div>
        <div className='app_header_center'>
          <div className='search_bar'>搜索房源和体验</div>
          <div className='search_icon'>
            <IconSearchBar />
          </div>
        </div>
        <div className='app_header_right'>
          <div className='bnts'>
            <span className='bnt'>登录</span>
            <span className='bnt'>注册</span>
            <span className='span_avg'>
              <IconGlobal />
            </span>
          </div>
          <div className='profile'>
            <IconProfileMenu />
            <IconProfileAvatar />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  )
})

export default AppHeader