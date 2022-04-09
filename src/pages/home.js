import React from 'react'
import JumbotronContainer from '../components/jumbotron/jumbotronContainer'
import Accordian from '../components/accordian'
import Footer from '../components/footer'
import Header from '../components/header'
import * as ROUTES from '../constants/routes'

const home = () => {
  return (
    <>
      <Header to={ROUTES.HOME} />
      <JumbotronContainer />
      <Accordian />
      <Footer /> 
    </>
  )
}

export default home