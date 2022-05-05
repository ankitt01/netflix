import { useState, useContext, createContext } from 'react'
import Item from '../../containers/Item';

export const FeatureContext = createContext();
const Card = ({item, children}) => {
    const [showFeature, setShowFeature] = useState(false);
    const [ itemFeature, setItemFeature ] = useState({});
  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature}} >
        {children}
    </FeatureContext.Provider>

  )
}

export default Card;