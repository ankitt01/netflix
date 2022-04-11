import React, { useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import * as ROUTES from '../constants/routes'
import { Link } from 'react-router-dom';
import logo from './utilities/logo.svg'

const Signin = ({to}) => {
  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  return (
    <>
      <Header to={ROUTES.HOME}>
      <div className='flex justify-between py-8 px-20'>
            <Link to={ROUTES.HOME}><img src={logo} alt="logo" className='w-40'/></Link>
            <Link to={ROUTES.SIGN_IN}><button className='bg-[#e50914] text-gray-50 py-1 px-6 rounded'>Sign In</button></Link>
        </div>
        <div className='grid place-items-center py-20'>
          <div className='min-h-[660px] bg-[rgba(0,0,0,.75)] w-[450px]'>
            <form action="" className='text-gray-50 flex flex-col p-14'>
              <h1 className='text-3xl font-bold mb-8'>Sign In</h1>
              <input type="text" placeholder='Email or phone number' className='mb-4 font-lg outline-none px-6 py-4 rounded bg-[#333]' required/>
              <input type="password" placeholder='Password' className='mb-8 outline-none px-6 py-4 rounded bg-[#333]' required/>
              <button type='submit' className='bg-[#e50914] text-gray-50 py-4 px-6 rounded font-bold mb-2'>Sign In</button>
              <div className='flex justify-between'>
                <div>
                  <input type="checkbox" name="remember" id="remember" className='mr-2 p-2' checked/>
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <p className='text-sm'>Need help?</p>
              </div>

              
            </form>
          </div>
        </div>
      </Header>
      <Footer />
    </>
  )
}

export default Signin