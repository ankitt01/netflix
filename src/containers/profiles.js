import { Link } from 'react-router-dom';
import Header from '../components/header';
import logo from '../pages/utilities/logo.svg'
import * as ROUTES from '../constants/routes'
import Profiles from '../components/profiles';


export default function SelectProfileContainer({user, setProfile}) {
    
    return <>
        <Header bg="">
        <div className='flex justify-between py-8 px-20'>
            <Link to={ROUTES.HOME}><img src={logo} alt="logo" className='w-40'/></Link>
        </div>
        </Header>

        <Profiles>
            <div className='p-4 text-center'>
                <h1 className='text-gray-500 text-2xl xl:text-4xl mb-8 font-semibold' >Who's watching?</h1>
                <div className='flex flex-col justify-center items-center max-w-[80%] mx-auto '> 
                    <img onClick={() => setProfile({displayName: user.displayName, photoURL: user.photoURL})} className="w-40 hover:cursor-pointer" src={`${user.photoURL ? `/images/users/${user.photoURL}.png` : '/images/misc/loading.gif'}`} alt="profile" />
                    <p className='text-gray-500 text-2xl my-4 hover:cursor-pointer hover:text-white'>{user.displayName}</p>
                </div>
            </div>
        </Profiles>
    </>
}