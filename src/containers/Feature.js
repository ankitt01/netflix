import React, { useContext } from 'react'
import { FeatureContext } from '../components/card'

const Feature = ({children, category}) => {
    const [showFeature, setShowFeature, itemFeature] = useContext(FeatureContext)  
    
    return showFeature ?  (
    <div>
        <div>
            <img src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`} alt="" />
            <p>{itemFeature.title}</p>
            <button onClick={() => setShowFeature(false)}>X</button>
            {children}
        </div>
        <div>
            <p>Maturity Rating : {itemFeature.maturity}</p>
        </div>
    </div>
  ) : <></>
}

export default Feature