import React from 'react'

const Jumbotron = ({children, direction}) => {
  return (
    <div className={`flex flex-col lg:flex-row lg:${direction} items-center justify-between max-w-[1100px] m-auto w-full bg-black py-12 border-y-4 border-[#222]`}>
        {children}
    </div>
  )
}

export default Jumbotron