import React from 'react'
import { Hero } from '../components/Hero'
import { JoinUs } from '../components/JoinUs'
import { Organizers } from '../components/Organizers'
import { Speakers } from '../components/Speakers'
import { Upcoming } from '../components/Upcoming'

const Home = () => {
  return (
    <>
      <Hero/>
      <Upcoming/>
      <JoinUs/>
      <Speakers/>
      <Organizers/>
    </>
  )
}

export default Home
