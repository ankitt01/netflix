import React from 'react'

const OptForm = () => {
  return (
    <div className='max-w-[650px] xl:max-w-[800px] text-gray-50 text-center mx-auto px-12 md:px-20'>
        <p className='font-semibold w-4/5 mx-auto text-lg lg:text-xl'>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className='flex flex-col md:flex-row items-center md:items-end'>
            <input type="text" placeholder='Email address' className='px-4 py-2 xl:py-4 w-full mt-6 outline-none text-black' />
            <button className='bg-[#e50914] min-w-[150px] max-w-[200px] px-4 py-2 mt-6 h-[40px] xl:h-[56px] xl:py-4 md:ml-1 text-xl'>Get Started</button>
        </div>
    </div>
  )
}

export default OptForm