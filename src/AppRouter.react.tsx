import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import * as React from 'react'
import { Suspense, lazy } from 'react'

const Home = lazy(() => import('./pages/Home.react'))
const CV = lazy(() => import('./pages/CV.react'))
const AboutMe = lazy(() => import('./pages/AboutMe.react'))
const WorkExperiences = lazy(() => import('./pages/WorkExperiences.react'))
const Recommendations = lazy(() => import('./pages/Recommendations.react'))

export const AppRouter = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/cv' component={CV}/>
        <Route path='/aboutme' component={AboutMe}/>
        <Route path='/workexperiences' component={WorkExperiences}/>
        <Route path='/recommendations' component={Recommendations}/>
      </Switch>
    </Suspense>
  </Router>
)

// <Route exact path='/' component={Hello}/>

// import { Route, BrowserRouter as Router } from 'react-router-dom'

// import AboutMe from './pages/AboutMe.react'
// import CV from './pages/CV.react'
// import Home from './pages/Home.react'
// import React from 'react'
// import Recommendations from './pages/Recommendations.react'
// import WorkExperiences from './pages/WorkExperiences.react'

// export default function AppRouter () {
//   return (
//     <Router>
//       <div>
//         <Route exact path='/' component={Home}/>
//         <Route path='/cv' component={CV}/>
//         <Route path='/aboutme' component={AboutMe}/>
//         <Route path='/workexperiences' component={WorkExperiences}/>
//         <Route path='/recommendations' component={Recommendations}/>
//       </div>
//     </Router>
//   )
// }
