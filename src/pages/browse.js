import React from 'react'
import { useContent } from "../hooks/"
import selectionFilter from '../utils/selection-filter'
import BrowseContainer from "../containers/BrowseContainer"

const Browse = () => {
  const { series } = useContent('series')
  const { films } = useContent('films')

  const slides = selectionFilter({series, films})
  return (
    <div>
      <BrowseContainer slides={slides} />
    </div>
  )
}

export default Browse