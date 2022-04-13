import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import Footer from '../components/footer'
import Header from '../components/header'
import * as ROUTES from '../constants/routes'
import { Link } from 'react-router-dom';
import logo from './utilities/logo.svg'

import {FirebaseContext} from '../context/firebase'
const Signup = () => {
  const history = useHistory()
  const {firebase} = useContext(FirebaseContext)
  const inputValues = {firstName: "", email: "", password: ""};
  const [formValues, setFormValues] = useState(inputValues)
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [authError, setAuthError] = useState("")

  function handleSignUp(e) {
    e.preventDefault();

    firebase
    .auth()
    .createUserWithEmailAndPassword(formValues?.email, formValues?.password)
    .then((result) => {
      //push to the browse page
      result.user
      .updateProfile({
        displayName : formValues.firstName,
        photoURL: Math.floor(Math.random()*5) +1,
      }).then(() => {
        history.push(ROUTES.BROWSE)
      })
    }).catch((err) => {
      console.log(err.message)
      setFormValues(inputValues);
    })
  }
  function handleChange(e) {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  }
  return (
    <>
      <Header to={ROUTES.HOME}>
        <div className='flex justify-between py-8 px-20'>
              <Link to={ROUTES.HOME}><img src={logo} alt="logo" className='w-40'/></Link>
          </div>
          <div className='grid place-items-center pb-14'>
            <div className='w-full sm:min-h-[660px] bg-[rgba(0,0,0,.65)] sm:w-[450px]'>

              <form action="POST" className='text-gray-50 flex flex-col px-6 sm:px-16 py-12' onSubmit={(e) => handleSignUp(e)}>
                <h1 className='text-3xl font-bold mb-8'>Sign Up</h1>
                {authError ? <p className='text-yellow-500'>{authError.message}</p> : ""}
                <input onChange={handleChange} type="text" name="firstName" value={formValues.firstName} placeholder='First Name' className='mt-2 font-lg outline-none px-6 py-4 rounded bg-[#333]' />
                {!authError && <p className='text-xs text-red-500'>{error.email}</p>}
                <input onChange={handleChange} type="text" name="email" value={formValues.email} placeholder='Email or phone number' className='mt-2 font-lg outline-none px-6 py-4 rounded bg-[#333]' />
                {!authError && <p className='text-xs text-red-500'>{error.email}</p>}
                <input onChange={handleChange} type="password" name="password" value={formValues.password} placeholder='Password' className='mt-2 outline-none px-6 py-4 rounded bg-[#333]' />
                {!authError && <p className='text-xs text-red-500'>{error.password}</p>}
                <button type='submit' className='bg-[#e50914] text-gray-50 py-4 px-6 rounded font-bold mt-8 mb-2'>Sign Up</button>

                <div className='flex justify-between'>
                  <div className='text-gray-400'>
                    <input type="checkbox" name="remember" id="remember" className='mr-2 p-2' defaultChecked/>
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <p className='text-sm text-gray-400'>Need help?</p>
                </div>
                <div className='my-14 text-gray-400'>
                  <div className='flex mt-2'>
                    <p className='mr-2'>Already a user?</p>
                    <a href={ROUTES.SIGN_IN} className='text-white'>Sign In Now!</a>
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

export default Signup