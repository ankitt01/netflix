import React from 'react'

const OptForm = () => {
  return (
    <div className='max-w-[650px] xl:max-w-[850px] text-gray-50 text-center mx-auto px-4 sm:px-12 md:px-20'>
        <p className='font-semibold xl:w-full mx-auto text-md lg:text-lg'>Ready to watch? Enter your email to create or restart your membership.</p>
        <form className='flex flex-col md:flex-row items-center md:items-end'>
            <input type="text" placeholder='Email address' className='px-4 py-2 xl:py-4 w-full mt-4 outline-none text-black' required/>
            <button type="submit" className='bg-[#e50914] min-w-[150px] max-w-[200px] px-4 mt-4 h-[40px] xl:h-[56px] xl:py-4 md:ml-1 text-xl'>Get Started</button>
        </form>
    </div>
  )
}

export default OptForm