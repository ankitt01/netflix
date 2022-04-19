import { useState, useContext, createContext } from 'react'
import Item from '../../containers/Item';

export const FeatureContext = createContext();
const Card = ({children}) => {
    const [showFeature, setShowFeature] = useState(false);
    const [ itemFeature, setItemFeature ] = useState({});
  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature}} >
        <div className='container'>
          <div className="group">
            <h1 className='Title'>heding</h1>
            <p className='subTitle'>subheading</p>
            <p className='metaData'>meta data</p>
          </div>
        </div>
    </FeatureContext.Provider>

  )
}

export default Card;