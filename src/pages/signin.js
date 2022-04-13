import React, { useEffect, useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import * as ROUTES from '../constants/routes'
import { Link } from 'react-router-dom';
import logo from './utilities/logo.svg'

const Signin = () => {
  const inputValues = {email: "", password: ""};
  const [formValues, setFormValues] = useState(inputValues)
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function validate(values) {
    const errors = {}
    const regex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i

    if(!values.email) {
      errors.email = "Please enter a valid email address or phone number.";
    }
    if(!values.password || values.password.length < 4) {
      errors.password = "Your password must contain between 4 and 60 characters.";
    }
    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(validate(formValues));
    setIsSubmit(true);
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  }

  useEffect(() => {
    console.log(error)
    if(Object.keys(error).length === 0 && isSubmit) {
      console.log(formValues)
    }

  },[error])

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
              <input onChange={handleChange} type="text" name="email" value={formValues.email} placeholder='Email or phone number' className=' font-lg outline-none px-6 py-4 rounded bg-[#333]' />
              {error.email && <p className='text-xs text-red-500'>{error.email}</p>}
              <input onChange={handleChange} type="password" name="password" value={formValues.password} placeholder='Password' className='mt-4 outline-none px-6 py-4 rounded bg-[#333]' />
              {error.password && <p className='text-xs text-red-500'>{error.password}</p>}
              <button type='submit' className='bg-[#e50914] text-gray-50 py-4 px-6 rounded font-bold mt-8 mb-2'>Sign In</button>

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