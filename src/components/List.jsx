import React from 'react'

const List = ({href,className,menuName}) => {
  return (
    <li>
        <a href={href} className={`text-[24px] font-pop font-semibold ${className}`}>{menuName}</a>
    </li>
  )
}

export default List