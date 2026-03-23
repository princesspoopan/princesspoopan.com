import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const Home = lazy(() => import('./pages/Home.react'))
const CV = lazy(() => import('./pages/CV.react'))
const AboutMe = lazy(() => import('./pages/AboutMe.react'))
const WorkExperiences = lazy(() => import('./pages/WorkExperiences.react'))
const Recommendations = lazy(() => import('./pages/Recommendations.react'))

export const AppRouter = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cv' element={<CV />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/workexperiences' element={<WorkExperiences />} />
        <Route path='/recommendations' element={<Recommendations />} />
      </Routes>
    </Suspense>
  </Router>
)
