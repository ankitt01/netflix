import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'
import Feature from '../feature';
import OptForm from '../opt-form'



const Header = ({to}) => {
  return (
    <div className="header">  
        <div className='flex justify-between py-8 px-20'>
             <Link to={to}><img src="/images/misc/logo.PNG" alt="logo" className='w-40'/></Link>
             <Link to={ROUTES.SIGN_IN}><button className='bg-[#e50914] text-gray-50 py-1 px-6 rounded'>Sign In</button></Link>
        </div>
        <Feature />
    </div>
  )
}

export default Header