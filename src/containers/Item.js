import React, { useContext } from 'react'
import { FeatureContext } from '../components/card'

const Item = ({item, children}) => {
    const [setShowFeature, setItemFeature] = useContext(FeatureContext)

  return (
    <div onClick={() =>{
      setItemFeature(item);
      setShowFeature(true);
    }}>{children}</div>
  )
}

export default Item