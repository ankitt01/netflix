import React, { useContext } from 'react'
import { FeatureContext } from '../components/card'

const Item = ({item, category}) => {
    // const [setShowFeature, setItemFeature] = useContext(FeatureContext)

  return (
    <div className='w-full h-full relative item'>
      <img src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} className="cursor-pointer w-full" alt="Movie/Film" />
      <div className=' absolute bottom-4 p-2 opacity-0 xl:hover:opacity-100 select-none desc'>
        <p className=' text-xs md:text-md lg:text-lg text-gray-50 '>{item.title}</p>
        <p className=' md:text-sm text-gray-50'>{item.description}</p>
      </div>
    </div>
  )
}

export default Item