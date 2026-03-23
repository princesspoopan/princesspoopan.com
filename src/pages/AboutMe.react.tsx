import './AboutMe.styl'

import { AppLayout } from '../components/AppLayout.react'
import { Introduction } from '../components/Introduction.react'
import { Menu } from '../components/Menu.react'
import { Navigator} from '../components/Navigator.react'

export const AboutMe = () => {
  return (
    <AppLayout>
      <div className='about-me'>
        <div className='about-me__poopan'>
          Poopan
        </div>
        <div className='about-me__center'>
          <div className='about-me__header'>
            About Me
          </div>
          <div className='about-me__detail'>
             I am Krongkran Jitsil, a Full stack Software Engineer based in Lyon.
             You can call me Poopan. I fall in love with solving problems, developing the software,
              everything around it.
            <br/>
            <br/>
             When not working or fuzzing around with code, I enjoy time in the garden with my cats and having a relaxing day with podcast and Netflix.
          </div>
          <div className='about-me__next-navigator'>
            <Navigator to='/workexperiences' white >Work experiences</Navigator>
          </div>
        </div>
        <div className='about-me__menu'>
          <Menu white />
        </div>
        <div className='about-me__introduction'>
          <Introduction white />
        </div>
      </div>
    </AppLayout>
  )
}

export default AboutMe
