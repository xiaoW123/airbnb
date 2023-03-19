
import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import { EntireWrapper } from './style'
import { fetchEntireDataAction } from '@/store/entire/actionCreators'
import { useNavigate } from 'react-router-dom'

const BottomEntire = memo((props) => {
  const navigate = useNavigate()
  useEffect(() => {
    props.getEntireData()
    console.log(props);
  })
  function clickNavigate() {
    navigate('/entire')
  }
  return (
    <EntireWrapper>
      <div onClick={clickNavigate} className='navigatetoEntire'>查看全部</div>
    </EntireWrapper >
  )
})

// 使用老方法获取映射redux数据
function mapStateToProps(state) {
  return {
    entireData: state.entire.entireData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getEntireData() {
      dispatch(fetchEntireDataAction())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BottomEntire)