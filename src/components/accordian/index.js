import React, {useState} from 'react'
import faqData from '../../fixtures/faqs.json'


const Accordian = () => {

    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if(selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }
  return (
    <div className='text-gray-50 pb-20'>
        <h1 className='text-2xl sm:text-4xl lg:text-5xl font-bold text-center my-6 lg:my-12'>Frequently Asked Questions</h1>
        {faqData.map((item,i) => {
            
            return (
                <div key={item.id} className="sm:px-20 mb-2 mx-auto max-w-[1000px] ">
                    <div className='flex justify-between items-center py-2 px-8  bg-[#303030] cursor-pointer text-lg md:text-xl lg:text-2xl xl:text-3xl' onClick={() => toggle(i)}>
                        {item.header}
                        <span className='text-3xl'> {(selected === i) ? '-' : '+' } </span>
                    </div>
                    <div className={`mt-1 md:text-lg lg:text-xl bg-[#303030] xl:text-2xl content ${(selected === i) ? 'show' : '' }`}>
                        {item.body}
                    </div>
                </div>
            )
        })}
        <div className=' max-w-[800px] text-center mx-auto px-12 md:px-20 mt-12'>
            <p className='font-bold text-lg lg:text-xl'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='flex flex-col md:flex-row items-center md:items-end'>
                <input type="text" placeholder='Email address' className='px-4 py-2 xl:py-4 w-full mt-6' />
                <button className='bg-[#e50914] min-w-[150px] max-w-[200px] px-4 py-2 mt-4 xl:py-4 md:ml-1'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Accordian