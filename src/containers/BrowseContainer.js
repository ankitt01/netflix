import React, { useContext, useEffect, useState } from 'react'
import SelectProfileContainer from './profiles'
import { FirebaseContext } from '../context/firebase'
import Header from '../components/header';


const BrowseContainer = ({slides}) => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const {firebase} = useContext(FirebaseContext)
  const user = firebase.auth().currentUser || {};
  console.log(profile)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },3000)
  },[profile.displayName])
  return profile.displayName ? 
  <>
    <Header bg="true">
      <p>Hello</p>
    </Header>
  </>
  : <SelectProfileContainer user={user} setProfile = {setProfile} />
}

export default BrowseContainer