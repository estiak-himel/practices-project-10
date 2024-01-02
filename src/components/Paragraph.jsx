import React from 'react'

const Paragraph = ({className,text}) => {
  return (
    <p className={`text-[24px] ${className}`}>{text}</p>
  )
}

export default Paragraph