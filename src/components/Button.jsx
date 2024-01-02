import React from 'react'

const Batton = ({textbtn,className}) => {
  return (
    <button className={`py-3 px-7 border text-[24px] font-pop font-semibold shadow-2xl border-btncolors rounded-lg hover hover:bg-btncolors ${className}`}>{textbtn}</button>
  )
}

export default Batton