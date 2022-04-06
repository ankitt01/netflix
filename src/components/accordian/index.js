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
    <div className='text-gray-50 pb-12'>
        <h1 className='text-3xl lg:text-5xl font-bold text-center my-6 lg:my-12'>Frequently Asked Questions</h1>
        {faqData.map((item,i) => {
            
            return (
                <div key={item.id} className=" px-12 md:px-20 mb-2 mx-auto max-w-[1000px]">
                    <div className='flex justify-between p-4 bg-[#303030] cursor-pointer md:text-xl lg:text-2xl xl:text-3xl' onClick={() => toggle(i)}>
                        {item.header}
                        <span> {(selected === i) ? '-' : '+' } </span>
                    </div>
                    <div className={`mt-1 md:text-lg lg:text-xl bg-[#303030] xl:text-2xl content ${(selected === i) ? 'show' : '' }`}>
                        {item.body}
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Accordian