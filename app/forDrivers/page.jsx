'use client'

import FadeInWrapper from '../components/FadeInWrapper'
import AboutDrivers from '../components/AboutDrivers'
import CardDrivers from '../components/CardDrivers'
import WhyUs from '../components/WhyUs'
import Apply from '../components/Apply'
import PlansUs from '../components/PlansUs'
import MobileApps from '../components/MobileApps'
import Question from '../components/Question'

export default function ForDriversPage() {
  return (
    <div>
      <FadeInWrapper>
        <AboutDrivers />
      </FadeInWrapper>
      <FadeInWrapper>
        <CardDrivers />
      </FadeInWrapper>
      <FadeInWrapper>
        <WhyUs />
      </FadeInWrapper>
      <FadeInWrapper>
        <Apply />
      </FadeInWrapper>
      <FadeInWrapper>
        <PlansUs />
      </FadeInWrapper>
      <FadeInWrapper>
        <MobileApps />
      </FadeInWrapper>
      <FadeInWrapper>
        <Question />
      </FadeInWrapper>
    </div>
  )
}
