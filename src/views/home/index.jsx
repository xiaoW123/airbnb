import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeAllDataAction } from "@/store/home"
import HomeBanner from './home-banner'
import HomeSectionV from './c-cpns/home-section-v'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'




const Home = memo((props) => {
  // 从redux中获取数据
  // 返回一个对象，为一个整体所以需要（）
  const {
    goodpriceInfo,
    highscoreInfo,
    discountInfo,
    hotrecommenddestInfo,
    longforInfo,
    pulsInfo
  } = useSelector((state) => ({
    goodpriceInfo: state.home.goodpriceInfo,
    highscoreInfo: state.home.highscoreInfo,
    hotrecommenddestInfo: state.home.hotrecommenddestInfo,
    longforInfo: state.home.longforInfo,
    discountInfo: state.home.discountInfo,
    pulsInfo: state.home.pulsInfo
  }), shallowEqual)
  // 派发请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeAllDataAction())
  }, [dispatch])
  // console.log(discountInfo);
  return (
    <div>
      {/* 首页图片 */}
      <HomeBanner />
      {/* 热门目的地 */}
      {discountInfo && <HomeSectionV2 infoData={discountInfo} />}
      {/* 探索佛山的精彩之地 */}
      {hotrecommenddestInfo && <HomeSectionV2 infoData={hotrecommenddestInfo} />}
      {/* 你可能想去 */}
      {longforInfo && <HomeSectionV1 title={longforInfo.title} subtitle={longforInfo.subtitle} list={longforInfo.list} />}
      {/* 佛山高分好评房源 */}
      {highscoreInfo && <HomeSectionV3 isShow={false} title={highscoreInfo.title} subtitle={highscoreInfo.subtitle} list={highscoreInfo.list} viewWidth='20%' />}
      {/* 佛山高性价比房源 */}
      {goodpriceInfo && <HomeSectionV3 isShow={false} title={goodpriceInfo.title} list={goodpriceInfo.list} viewWidth='20%' />}
      {/* 佛山的爱彼迎Plus房源 */}
      {pulsInfo && <HomeSectionV title={pulsInfo.title} subtitle={pulsInfo.subtitle} list={pulsInfo.list} />}

    </div>
  )
})

export default Home