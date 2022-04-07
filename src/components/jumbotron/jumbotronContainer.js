import React from 'react'
import jumboData from "../../fixtures/jumbo.json"
import Jumbotron from './index'

const jumbotronContainer = () => {
  return (
    <div className='bg-black'>
      {jumboData.map(item => (
        <Jumbotron item={item} key={item.id} />
      ))}
    </div>
  )
}

export default jumbotronContainer