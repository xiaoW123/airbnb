import React, { memo } from 'react'

import Pagination from '@mui/material/Pagination';
import { PageWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchEntireDataAction } from '@/store/entire/actionCreators';


const PaginAtion = memo(() => {
  const dispatch = useDispatch()
  const { totalCount, currentPage } = useSelector((state) => {
    return {
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage
    }
  }, shallowEqual)

  const count = Math.floor(totalCount / 20) // 先上取整，获取要分多少页
  const start = currentPage * 20 + 1
  const end = (currentPage + 1) * 20

  const handlePageChange = (event, newPage) => {
    dispatch(fetchEntireDataAction(newPage))
  }
  return (
    <PageWrapper>
      <Pagination count={count} onChange={handlePageChange} />
      <div className='info'>
        第 {start} – {end} 个房源，共超过 {totalCount} 个
      </div>
    </PageWrapper>
  )
})

export default PaginAtion