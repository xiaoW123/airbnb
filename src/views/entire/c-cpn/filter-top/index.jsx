import React, { memo, useState } from 'react'

import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data'
import classNames from 'classnames'

const FilterTop = memo(() => {
  const [selectItems, setSelectItems] = useState([])

  const addActive = (item) => {
    // 修改数组对象等数据，须先进行浅拷贝
    const newItem = [...selectItems]
    if (newItem.includes(item)) { // 如果数组里有item，就使用findIndedx把该元素索引返回，并删除它
      const indexItem = newItem.findIndex(name => name === item)
      newItem.splice(indexItem, 1) // 从该索引的位置删除一个元素
    } else {
      newItem.push(item)
    }
    // 最后修改
    setSelectItems(newItem)
  }

  return (
    <FilterWrapper>
      <div className='filter_father'>
        {filterData.map((item, index) => {
          return (
            <div
              onClick={e => addActive(item)}
              className={classNames('filter_item', { active: selectItems.includes(item) })}
              key={item}
            >{item}</div>
          )
        })}
      </div>

    </FilterWrapper>
  )
})

export default FilterTop