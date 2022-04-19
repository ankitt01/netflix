import React, { useContext, useEffect, useState } from 'react'
import SelectProfileContainer from './profiles'
import { FirebaseContext } from '../context/firebase'
import BrowseHeader from './BrowseHeader';
import * as ROUTES from '../constants/routes'
import { Link } from 'react-router-dom';
import logo from '../pages/utilities/logo.svg'
import Header from '../components/header';
import HeaderSearch from './HeaderSearch';
import Card from '../components/card';


const BrowseContainer = ({slides}) => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const [slideRows, setSlideRows] = useState([])
  const [category, setCategory] = useState('series')

  const {firebase} = useContext(FirebaseContext)
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },3000)
  },[profile.displayName])

  useEffect(() => {
    setSlideRows(slides[category])
    console.log(category)
  },[slides, category])

  return profile.displayName ? 
  <>
    <Header>
      <div className='flex justify-start items-center py-8 px-8 sm:hidden'>
        <Link to={ROUTES.HOME}><img src={logo} alt="logo" className='w-14 sm:w-20 mr-4'/></Link>
        <div className='text-white grow flex justify-between items-center'>
          <div className='flex gap-4'>
            <p onClick={() => setCategory('series')} className={category === 'series' ? 'font-bold cursor-pointer' : ' cursor-pointer'}>Series</p>
            <p onClick={() => setCategory('films')} className={category === 'films' ? 'font-bold cursor-pointer ' : ' cursor-pointer'}>Films</p>
          </div>
          <div className='flex gap-2 items-center'>
            <img src={`/images/users/${user.photoURL}.png`} alt="user" className='w-6 sm:w-10 cursor-pointer' />
            <p className='hidden sm:block'>{user.displayName}</p>
            <p className='cursor-pointer' onClick={() => {firebase.auth().signOut()}}>Sign Out</p>
          </div>
        </div>
      </div>
    </Header>
    <BrowseHeader bg="true">
    <Header>
      <div className='sm:flex justify-start items-center py-8 px-12 xl:px-20 hidden sm:block'>
        <Link to={ROUTES.HOME}><img src={logo} alt="logo" className='w-20 mr-6'/></Link>
        <div className='text-white grow flex justify-between items-center'>
          <div className='flex gap-4'>
          <p onClick={() => setCategory('series')} className={category === 'series' ? 'font-bold cursor-pointer' : ' cursor-pointer'}>Series</p>
            <p onClick={() => setCategory('films')} className={category === 'films' ? 'font-bold cursor-pointer' : ' cursor-pointer'}>Films</p>
          </div>
          <div className='flex gap-4 items-center'>
            <HeaderSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <img src={`/images/users/${user.photoURL}.png`} alt="user" className='w-10 cursor-pointer' />
            <p className='hidden sm:block'>{user.displayName}</p>
            <p className='cursor-pointer' onClick={() => {firebase.auth().signOut()}}>Sign Out</p>
          </div>
        </div>
      </div>
    </Header>
      <div className='text-white px-8 xl:px-20 pt-12 lg:pt-20 xl:pt-30 pb-40 xl:pb-60 flex flex-col justify-center '>
        <h1 className='text-2xl lg:text-4xl mb-4 font-bold'>Watch Joker Now</h1>
        <p className='text-gray-300 text-xs md:text-sm lg:text-lg w-1/2 xl:w-1/3'>Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him.</p>
        <button className='bg-white text-black font-bold max-w-[150px] rounded px-4 py-2 mt-8'>Play Now</button>
      </div>
    </BrowseHeader>
    <Card>
      
    </Card>
  </>
  : <SelectProfileContainer user={user} setProfile = {setProfile} />
}

export default BrowseContainer