'use client'  
import FadeInWrapper from './components/FadeInWrapper'
import Slider from './components/Slider'
import AboutUs from './components/AboutUs'
import PlansUs from './components/PlansUs'
import ServicesUs from './components/ServicesUs'
import MobileApps from './components/MobileApps'
import TaxiMap from './components/TaxiMap'
import Contacts from './components/Contacts'
import TopFooter from './components/TopFooter'

export default function Home() {
  return (
    <>
      <FadeInWrapper><Slider /></FadeInWrapper>
      <FadeInWrapper><AboutUs /></FadeInWrapper>
      <FadeInWrapper><PlansUs /></FadeInWrapper>
      <FadeInWrapper><ServicesUs /></FadeInWrapper>
      <FadeInWrapper><MobileApps /></FadeInWrapper>
      <FadeInWrapper><TaxiMap /></FadeInWrapper>
      <FadeInWrapper><Contacts /></FadeInWrapper>
      <TopFooter />
    </>
  )
}

