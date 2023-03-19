
import classNames from 'classnames'
import React, { memo, useState } from 'react'

import { BarWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'

const SelectBar = memo((props) => {
  const { selectBar, tabClick } = props
  const [indexCurrent, setIndexCurrent] = useState(0)
  function itemClickHandle(index, name) {
    setIndexCurrent(index, name)
    tabClick(name)
  }

  return (
    <BarWrapper>
      <ScrollView>
        <div className='selectbar-father'>
          <div className='selectBar'>
            {selectBar && selectBar.map((item, index) => {
              return (
                <div
                  key={item.name}
                  className={classNames({ active: indexCurrent === index })}
                  onClick={e => itemClickHandle(index, item.name)}
                >{item.name}</div>
              )
            })}
          </div>
        </div>
      </ScrollView>
    </BarWrapper>
  )
})

export default SelectBar