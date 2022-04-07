import React from 'react'

const Footer = () => {
  return (
      <div className='border-t-4 border-[#222] py-20'>
        <div className='text-gray-500 text-sm p-14 md:mx-auto xl:w-4/5 2xl:w-3/5 ' >
            <p className='mb-4'>Questions? Call 000-800-040-1843</p>
            <div className='grid grid-cols-2 justify-around sm:grid-cols-4 gap-4'>
                <div>   
                    <p>FAQ</p>
                    <p>Investor Relations</p>
                    <p>Privacy</p>
                    <p>Speed Test</p>
                </div>
                <div>   
                    <p>Help Center</p>
                    <p>Jobs</p>
                    <p>Cookie Preference</p>
                    <p>Legal Notice</p>
                </div>
                <div className=''>   
                    <p>Account</p>
                    <p>Way to Watch</p>
                    <p>Corporate Information</p>
                    <p>Only on Netflix</p>
                </div>
                <div className=''>   
                    <p>Media Center</p>
                    <p>Terms of Use</p>
                    <p>Contact Us</p>
                    
                </div>
            </div>
            <p>Netflix India</p>
        </div>
      </div>
  )
}

export default Footer