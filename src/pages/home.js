import React from 'react'
import JumbotronContainer from '../components/jumbotron/jumbotronContainer'
import Accordian from '../components/accordian'
import Footer from '../components/footer'
import Header from '../components/header'
import * as ROUTES from '../constants/routes'
import { Link } from 'react-router-dom';
import Feature from '../components/feature';
import logo from './utilities/logo.svg'

const home = ({to}) => {
  return (
    <>
      <Header bg="true" to={ROUTES.HOME}>
        <div className='flex justify-between py-8 px-6'>
            <Link to={to}><img src={logo} alt="logo" className='w-40'/></Link>
            <Link to={ROUTES.SIGN_IN}><button className='bg-[#e50914] text-gray-50 py-1 px-6 rounded'>Sign In</button></Link>
        </div>
        <Feature />
      </Header>
      <JumbotronContainer />
      <Accordian />
      <Footer /> 
    </>
  )
}

export default home