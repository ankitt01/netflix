import React from 'react'

const Jumbotron = ({item}) => {
  return (
    <div className='border-y-4 border-[#222]'>
      <div className={`flex flex-col lg:flex-row ${item.direction} items-center justify-between max-w-[1100px] m-auto w-full bg-black py-12 lg:py-20 `}>
          <div className='text-gray-50 text-center lg:text-left px-4 lg:p-8 max-w-[600px] m-auto'>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold '>{item.title}</h1>
              <p className=' md:text-lg lg:text-xl my-4'>{item.subTitle}</p>
            </div>
            <div className='relative overflow-hidden'>
              <div className='relative'>
                <img className='w-full' src={item.image} alt={item.alt} />
                {item.animation && (
                  <div className='absolute left-[19%] md:left-[13%] lg:md-[12%] h-[70px] lg:h-[100px] top-[67%] text-white flex gap-2 w-3/5 md:w-[68%] lg:w-3/4 items-center justify-center bg-black border-2 border-gray-700 rounded-3xl px-4 py-2'>
                    <img className='h-full' src={item['animation-image']} alt="animation" />  
                    <div className="flex-1 ml-2">
                      <h1 className="text-sm lg:text-xl font-bold flex-1">Stranger Things</h1>
                      <p className='text-sm text-blue-500'>Downloading...</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                )}
              </div>
              <video className={`absolute ${item.position} z-99`} src={item.video} autoPlay muted loop/>
            </div>
      </div>
    </div>
  )
}

export default Jumbotron