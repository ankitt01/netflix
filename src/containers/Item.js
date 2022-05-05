import React, { useContext } from 'react'
import { FeatureContext } from '../components/card'

const Item = ({item, category}) => {
    // const [setShowFeature, setItemFeature] = useContext(FeatureContext)

  return (
    <div className='w-full h-full relative'>
      <img src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} className="cursor-pointer w-full" alt="Movie/Film" />
      <div className='absolute bottom-0 p-2 opacity-0 hover:opacity-100 select-none'>
        <p className=' text-xs md:text-md lg:text-lg text-gray-50 '>{item.title}</p>
        <p className=' md:text-sm text-gray-50'>{item.description}</p>
      </div>
    </div>
  )
}

export default Item