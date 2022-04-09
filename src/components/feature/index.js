import React from 'react'
import OptForm from '../opt-form'

const Feature = () => {
  return (
    <div className='text-gray-50 max-w-[800px] text-center mx-auto py-12 xl:py-20 2xl:py-40 px-2'>
            <h1 className='text-3xl md:text-5xl font-bold max-w-[500px] mx-auto mb-2 md:mb-8'>Unlimited movies, TV shows and more.</h1>
            <h3 className='text-lg md:text-2xl mb-2'>Watch anywhere Cancel anytime.</h3>
            <OptForm />
        </div>
  )
}

export default Feature