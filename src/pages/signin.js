import React, { useEffect, useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import * as ROUTES from '../constants/routes'
import { Link } from 'react-router-dom';
import logo from './utilities/logo.svg'

const Signin = () => {
  const inputValues = {email: "", password: ""};
  const [formValues, setFormValues] = useState(inputValues)
  const [error, setError] = useState({email:"", password: ""});

  function validate(values) {
    const errors = {email: "Email required", password: "Password required"};
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!values.email){
      setError({email: "Email Required"})
      console.log(error.email)
    }
    if(!values.password){
      setError({password: "Password Required"})
      console.log(error.password)
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    validate(formValues);
  }

  function handleChange(e) {
    const {key,val} = e.target;
    setFormValues({...formValues, [key]: val});
  }

  return (
    <>
      <Header to={ROUTES.HOME}>
      <div className='flex justify-between py-8 px-20'>
            <Link to={ROUTES.HOME}><img src={logo} alt="logo" className='w-40'/></Link>
        </div>
        <div className='grid place-items-center pb-14'>
          <div className='w-full sm:min-h-[660px] bg-[rgba(0,0,0,.65)] sm:w-[450px]'>

            <form action="" className='text-gray-50 flex flex-col px-6 sm:px-16 py-12' onSubmit={(e) => handleSubmit(e)}>
              <h1 className='text-3xl font-bold mb-8'>Sign In</h1>
              <input onChange={handleChange} type="text" placeholder='Email or phone number' className='mb-4 font-lg outline-none px-6 py-4 rounded bg-[#333]' />
              {error.email && <p>{error.email}</p>}
              <input onChange={handleChange} type="password" placeholder='Password' className='mb-8 outline-none px-6 py-4 rounded bg-[#333]' />
              {error.password && <p>{error.password}</p>}
              <button type='submit' className='bg-[#e50914] text-gray-50 py-4 px-6 rounded font-bold mb-2'>Sign In</button>
              <div className='flex justify-between'>
                <div className='text-gray-400'>
                  <input type="checkbox" name="remember" id="remember" className='mr-2 p-2' checked/>
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <p className='text-sm text-gray-400'>Need help?</p>
              </div>
              <div className='my-14 text-gray-400'>
                <div className='flex items-center '>
                  <img src="https://img.icons8.com/color/30/000000/facebook.png" className='mr-2'/>
                  <a href="">Login with Facebook</a>
                </div>
                <div className='flex mt-2'>
                  <p className='mr-2'>New to Netflix?</p>
                  <a href={ROUTES.HOME} className='text-white'>Sign Up Now!</a>
                </div>
                <p className='text-xs'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
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