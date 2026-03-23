import './WorkExperiences.styl'

import { AppLayout } from '../components/AppLayout.react'
import { Button } from '../components/Button.react'
import { Carousel } from '../components/Carousel.react'
import { JobPeroid } from '../components/JobPeriod.react'
import { Menu } from '../components/Menu.react'
import { Navigator } from '../components/Navigator.react'
import { SlideShow } from '../components/SlideShow.react'
import React from 'react'
import twProjectKanban from '../slide-images/tw-project-kanban.png'
import twChatPage from '../slide-images/tw-chat-page.png'
import twPeoplePage from '../slide-images/tw-people-page.png'
import twAnalyticCharts from '../slide-images/tw-analytic-charts.png'
import treWhatsNew from '../slide-images/tre-whats-new.png'
import treWhatsNewAdmin from '../slide-images/tre-whats-new-admin.png'
import treHomepage from '../slide-images/tre-homepage.png'
import treCountries from '../slide-images/tre-countries.png'

export const WorkExperiences = () => {
  function renderCourosel (item: string, index: number) {
    return (
      <img
        key={`item-${index}`}
        className='work-experiences__screenshot'
        src={item}
      />
    )
  }
  const twCourosel = [
    twProjectKanban,
    twChatPage,
    twPeoplePage,
    twAnalyticCharts
  ].map(renderCourosel)

  const trCourosel = [
    treWhatsNew,
    treWhatsNewAdmin,
    treHomepage,
    treCountries
  ].map(renderCourosel)

  const twSlide = (
    <div className='work-experiences__slide'>
      <div className='work-experiences__images-wrapper'>
        <Carousel key='twCourosel' items={twCourosel} />
      </div>
      <div className='work-experiences__jobs'>
        <JobPeroid
          company='Taskworld'
          period='10/2016 - Present'
          title='web engineer team lead'
          detail={
            'Managed Frontend development teams, ' +
            'maintained and improved significant user facing features in Taskworld ' +
            'for both web & mobile applications. '
          }
        />
        <JobPeroid
          company='Taskworld'
          period='11/2015 - 09/2016'
          title='web engineer'
          detail={
            'As a Full stack developer implemented and improved significant features, viz. ' +
            'Chat, Kanban board, Projects view to build Taskworld using ' +
            'ReactJS, Redux, NodeJS and MongoDB.'
          }
        />
      </div>
    </div>
  )

  const trSlide = (
    <div className='work-experiences__slide'>
      <div className='work-experiences__images-wrapper'>
        <Carousel key='trCourosel' items={trCourosel} />
      </div>
      <div className='work-experiences__jobs'>
        <JobPeroid
          company='Thomson Reuters Software Thailand'
          period='03/2013 - 10/2015'
          title='senior software engineer'
          detail={
            'Full stack developer, implemented web application called What\'s New, ' +
            'to distribute news, articles and feature releases ' +
            'using NodeJS, WCF, C#.NET, AngularJS'
          }
        />
        <JobPeroid
          company='Thomson Reuters Software Thailand'
          period='05/2011 - 02/2013'
          title='software engineer'
          detail={
            'Developed the SPA application for realtime Bonds data ' +
            'using JavaScript, AngularJS, Backbone.js, PHP, Java, NodeJS'
          }
        />
        <JobPeroid
          company='Thomson Reuters Software Thailand'
          period='05/2009 - 04/2011'
          title='associate software engineer'
          detail={
            'Implemented web homepages and guides to make the first launch of Thomson Reuters Eikon'
          }
        />
      </div>
    </div>
  )

  return (
    <AppLayout>
      <div className='work-experiences'>
        <div className='work-experiences__center'>
          <div className='work-experiences__header'>
            Work Experiences
          </div>
          <div className='work-experiences__slide-show'>
            <SlideShow
              backward
              slides={[trSlide, twSlide]}
              renderButtons={(children: React.ReactElement[]) => (
                <div className='work-experiences__slide-show-buttons'>
                  { children }
                </div>
              )}
            />
          </div>
          <div className='work-experiences__cv-button'>
            <Button
              href='https://www.dropbox.com/s/ld1ynbnqm24uy4q/JITSIL%20Krongkarn%20CV%202019.pdf?dl=0'
            >
              view full cv as pdf
            </Button>
          </div>
        </div>
        <div className='work-experiences__next-navigator'>
          <Navigator to='/recommendations'>Recommendations</Navigator>
        </div>
        <div className='work-experiences__paper-border' />
        <div className='work-experiences__menu'>
          <Menu />
        </div>
      </div>
    </AppLayout>
  )
}

export default WorkExperiences
