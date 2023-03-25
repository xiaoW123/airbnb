import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { EntireWrapper } from './style'
import { fetchEntireDataAction } from '@/store/entire/actionCreators'
import EntireMain from './c-cpn/entire-main'
import FilterTop from './c-cpn/filter-top'
import AppHeader from '@/components/app-header'

const Entire = memo(() => {
  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(fetchEntireDataAction())
  })

  return (
    <EntireWrapper>
      <AppHeader />
      <FilterTop />
      {/* <SlideShow /> */}
      <EntireMain />

      <ul>
        <li>q2</li>
        <li>q2</li>
        <li>q2</li>
        <li>q2</li>
        <li>q2</li>
        <li>q2</li>
        <li>q2</li>
        <li>q2</li>
      </ul>
    </EntireWrapper>
  )
})

export default Entire