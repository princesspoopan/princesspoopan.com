import './CV.styl'

import BoxContainer from '../components/BoxContainer.react'
import DetailList from '../components/DetailList.react'
import PeriodList from '../components/PeriodList.react'
import React from 'react'

export default function CV () {
  return (
    <div className='cv'>
      <div className='cv__about-me'>
        <BoxContainer height='100%'>
          <div className='cv__about-me-bg'>
            <img className='cv__image' src={require('./poopan.png')} />
            <div className='cv__header' >
              Miss Krongkarn Jitsil
            </div>
            <DetailList
              items={[
                {
                  icon: 'user',
                  children: 'You can call me Poopan. I am full stack Web Engineer currently based in Bangkok. ' +
                    'I like to resolve challenging problems, ' +
                    'developing rich web experiences & web applications'
                },
                {
                  icon: 'phone',
                  children: '(+66) 99-829-5495'
                },
                {
                  icon: 'envelope',
                  children: 'krongkarn.jitsil@gmail.com'
                },
                {
                  icon: 'graduation-cap',
                  children: <PeriodList
                    items={[
                      {
                        key: 'university',
                        header: 'Bachelor degree of Computer Sciences',
                        subHeader: 'Kasetsart University (MAY 2005 - APR 2009)',
                        text: 'Part of web researcher team in Senior years and ' +
                        'received the scholarship award by represented ' +
                        'the navigation guide system ' +
                        'for Thailand National Museum'
                      },
                      {
                        key: 'school',
                        header: 'Math & Sciences Major',
                        subHeader: 'Satriwithaya School (APR 1999 - MAR 2005)'
                      }
                    ]}
                  />
                }
              ]}
            />
          </div>
        </BoxContainer>
      </div>
      <div className='cv__main'>
        <BoxContainer>
          <div className='cv__work-experiences'>
            <DetailList
              items={[
                {
                  icon: 'briefcase',
                  children: (
                    <div className='cv__work-experiences-text'>
                      <div className='cv__work-experiences-header'>
                        Work Experience
                      </div>
                      <PeriodList
                        items={[
                          {
                            key: 'team-lead-at-taskworld',
                            header: 'Web Engineer Team Lead @ Taskworld co., ltd',
                            subHeader: 'Nov 2016 — Present',
                            text: 'Manage Frontend development team, to maintenance ' +
                            'and improve significant features in Taskworld in both web base ' +
                            'and mobile application. Also do code review, pair programming and ' +
                            'help new team members to get onboard'
                          },
                          {
                            key: 'web-engineer-at-taskworld',
                            header: 'Web Engineer',
                            subHeader: 'Nov 2015 — Oct 2016',
                            text: 'Full stack developer, implement and improve significant features, ' +
                            'such as Chat, Kanban board, Project Page to build and release ' +
                            'the real-time project management application called Taskworld using ' +
                            'ReactJS, Redux, NodeJS and MongoDB'
                          },
                          {
                            key: 'sr-software-engineer-at-tr',
                            header: 'Senior Software Engineer',
                            subHeader: 'Mar 2013 — Oct 2015',
                            text: 'Full stack developer, to build web application called What\'s' +
                            'New to distribute news, articles and feature' +
                            'releases using NodeJS, WCF, AngularJS'
                          },
                          {
                            key: 'software-engineer-at-tr',
                            header: 'Software Engineer',
                            subHeader: 'May 2011 — Feb 2013',
                            text: (
                              <div>
                                <div>&#9675; Build CMS for manage web pages in the main application of Thomson Reuters Eikon</div>
                                <div>&#9675; Implement and maintenance realtime data in Thomson Reuters Eikon Assets using JavaScript</div>
                                <div>&#9675; Maintenance main home pages in Thomson Reuters Eikon</div>
                              </div>
                            )
                          },
                          {
                            key: 'associate-software-engineer-at-tr',
                            header: 'Associate Software Engineer',
                            subHeader: 'May 2009 — Apr 2011',
                            text: 'View development, to build web pages and be ' +
                            'the part of launching the first version of ' +
                            'Thomson Reuters Eikon'
                          }
                        ]}
                      />
                    </div>
                  )
                }
              ]}
            />
          </div>
        </BoxContainer>
        <div className='cv__main-block-spacing'></div>
        <BoxContainer>
          <div className='cv__skills'>
            <DetailList
              items={[
                {
                  icon: 'code',
                  children: (
                    <div className='cv__skills-text'>
                      <div className='cv__skills-header'>
                        Professional Skills
                      </div>
                      <div className='cv__skill-list'>
                        <PeriodList
                          items={[
                            {
                              key: 'programming-language-library',
                              header: 'Programming languages/Library',
                              text: (
                                <div className='cv__skill-items'>
                                  HTML / CSS / JavaScript / ReactJS / Redux / AngularJS
                                  / NodeJS / Express / Karma / Enzyme / Jest / Selenium
                                </div>
                              )
                            },
                            {
                              key: 'git-repository',
                              header: 'GIT Repository',
                              text: (
                                <div className='cv__skill-items'>
                                  GitHub / GitLab
                                </div>
                              )
                            },
                            {
                              key: 'building-automate-tools',
                              header: 'Building Tools/Automate Tools',
                              text: (
                                <div className='cv__skill-items'>
                                  Webpack / CircleCI
                                </div>
                              )
                            },
                            {
                              key: 'database',
                              header: 'Database',
                              text: (
                                <div className='cv__skill-items'>
                                  MongoDB / Firebase DB / MySQL
                                </div>
                              )
                            }
                          ]}
                        />
                      </div>
                    </div>
                  )
                }
              ]}
            />
          </div>
        </BoxContainer>
      </div>
    </div>
  )
}
