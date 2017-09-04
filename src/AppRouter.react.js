import { Route, BrowserRouter as Router } from 'react-router-dom'

import AboutMe from './pages/AboutMe.react'
import CV from './pages/CV.react'
import Home from './pages/Home.react'
import React from 'react'
import Recommendations from './pages/Recommendations.react'
import WorkExperiences from './pages/WorkExperiences.react'

export default function AppRouter () {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/cv" component={CV}/>
        <Route path='/aboutme' component={AboutMe}/>
        <Route path='/workexperiences' component={WorkExperiences}/>
        <Route path='/recommendations' component={Recommendations}/>
      </div>
    </Router>
  )
}
