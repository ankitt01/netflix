import React from 'react'
import { useContent } from "../hooks/"

const Browse = () => {
  const { series } = useContent('series')
  const { films } = useContent('films')
  console.log(series);
  console.log(films);
  return (
    <div>browse</div>
  )
}

export default Browse