import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { DetailWrapper } from './style'
import DetailImg from './c-cpns/detail-img'
import AppHeader from '@/components/app-header'

const Detail = memo(() => {
  const { detailInfos } = useSelector((state) => {
    return {
      detailInfos: state.detail.detailInfos
    }
  })
  const { picture_urls } = detailInfos

  return (
    <DetailWrapper>
      <AppHeader />
      <div className='detail'>
        {detailInfos && <DetailImg imgItem={picture_urls} />}
      </div>

    </DetailWrapper>
  )
})

export default Detail