import React from 'react'
import Application from '../../components/Application/Application'
import Banner from '../../components/Banner/Banner'
import MovieDetails from '../../components/MovieDetails/MovieDetails'
import Showtime from '../../components/Showtime/Showtime'
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton'

function HomePage() {
  return (
    <div>
      <Banner />

      <MovieDetails />

      <Showtime />

      <Application />

      <BackToTopButton />
    </div>
  )
}

export default HomePage