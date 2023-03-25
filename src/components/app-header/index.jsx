import React, { memo, useState } from 'react'
import { HeaderWrapper, SearchWrapper } from './style.js'

import IconLogo from '@/assets/svg/icon_logo.jsx'
import IconSearchBar from '@/assets/svg/icon-search-bar.jsx'
import IconGlobal from '@/assets/svg/icon-global'
import IconProfileMenu from '@/assets/svg/icon-profile-menu'
import IconProfileAvatar from '@/assets/svg/icon-profile-avatar'
import searchTabsData from '@/assets/data/search_titles'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'

const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(false)
  const [tabsIndex, steTabsIndex] = useState(0)
  function tabsClick(index) {
    steTabsIndex(index)
  }
  function istrue() {
    setIsSearch(true)
  }
  return (
    <HeaderWrapper>
      <div className='app_header'>
        <div className='app_header_left'>
          <IconLogo />
        </div>
        <div>
          {/* search */}
          {!isSearch &&
            <div className='app_header_center'>
              <div className='search_bar' onClick={e => istrue()}>搜索房源和体验</div>
              <div className='search_icon'>
                <IconSearchBar />
              </div>
            </div>
          }
          <SearchWrapper >
            <CSSTransition
              in={isSearch}
              timeout={250}
              classNames='detail'
              unmountOnExit={true}
            >
              <div className='seach_title'>
                {
                  searchTabsData.map((item, index) => {
                    return (
                      <div className={classNames({ border_bottom: tabsIndex === index })} key={index} onClick={e => tabsClick(index)}>{item.title}</div>
                    )
                  })
                }
              </div>
            </CSSTransition>
          </SearchWrapper>

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
      {/* tabsItem */}
      <SearchWrapper isSearch={isSearch}>
        <CSSTransition
          in={isSearch}
          timeout={250}
          classNames="detail"
          unmountOnExit={true}
        // classNames="search_info"
        >
          <div className='box_info'>
            <div className='search_info'>
              {
                searchTabsData[tabsIndex].searchInfos.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className='title'>{item.title}</div>
                      <div className='desc'>{item.desc}</div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </CSSTransition>

      </SearchWrapper>
    </HeaderWrapper>
  )
})

export default AppHeader