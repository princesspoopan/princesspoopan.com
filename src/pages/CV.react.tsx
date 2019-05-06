import './CV.styl'

import { BoxContainer } from '../components/BoxContainer.react'
import { DetailList } from '../components/DetailList.react'
import { PeriodList } from '../components/PeriodList.react'
import * as React from 'react'

declare let require: any

export const CV = () => {
  return (
    <div className='cv'>
      <div className='cv__about-me'>
        <BoxContainer height='100%'>
          <div className='cv__about-me-bg'>
            <img className='cv__image' src={require('./poopan.jpg')} />
            <div className='cv__header' >
              Miss Krongkarn Jitsil
            </div>
            <DetailList
              items={[
                {
                  icon: 'user',
                  children: (
                    <div className='cv__about-me-description'>
                      You can call me Poopan. I am Senior Software Engineer based in Paris, France.
                      I like to resolve challenging problems, developing rich web experiences & web applications
                    </div>
                  )
                },
                {
                  icon: 'phone',
                  children: <div className='cv__about-me-description --emphasize'>(+33) 07 61 21 68 82</div>
                },
                {
                  icon: 'envelope',
                  children: <div className='cv__about-me-description --emphasize'>krongkarn.jitsil@gmail.com</div>
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
                        Work Experiences
                      </div>
                      <PeriodList
                        items={[
                          {
                            key: 'sr-software-engineer-at-cs',
                            header: (
                              <span className='cv__work-experiences-title'>
                                Senior Software Engineer
                                <span className='cv__work-experiences-company'>
                                  @ContentSquare Paris, France
                                </span>
                              </span>
                            ),
                            subHeader: 'Nov 2017 - Present',
                            text: 'Senior software engineer in R&D Application team, lead the projects,' +
                            ' create implementation plan, design the architecture and the solution for the project.' +
                            ' Mentoring the junior developers and onboarding the new joiners.'
                          },
                          {
                            key: 'team-lead-at-taskworld',
                            header: (
                              <span className='cv__work-experiences-title'>
                                Web Engineer Team Lead
                                <span className='cv__work-experiences-company'>
                                  @Taskworld co., ltd
                                </span>
                              </span>
                            ),
                            subHeader: 'Nov 2016 — Sep 2018',
                            text: 'Manage Frontend development team, using Agile methodology. ' +
                            'My team responsibilites are maintenance ' +
                            'and improve significant features in Taskworld in both web-based ' +
                            'and mobile application. Also do code review, pair programming and ' +
                            'help new team members to get onboard'
                          },
                          {
                            key: 'web-engineer-at-taskworld',
                            header: (
                              <span className='cv__work-experiences-title'>
                                Web Engineer
                                <span className='cv__work-experiences-company'>
                                  @Taskworld co., ltd
                                </span>
                              </span>
                            ),
                            subHeader: 'Nov 2015 — Oct 2016',
                            text: 'Full stack developer, implement and improve significant features, ' +
                            'such as Chat, Kanban board, Project Page to build and release ' +
                            'the real-time project management application called Taskworld using ' +
                            'ReactJS, Redux, ES2015, Babel, Webpack, NodeJS and MongoDB'
                          },
                          {
                            key: 'sr-software-engineer-at-tr',
                            header: (
                              <span className='cv__work-experiences-title'>
                                Senior Software Engineer
                                <span className='cv__work-experiences-company'>
                                  @Thomson Reuters Software Thailand
                                </span>
                              </span>
                            ),
                            subHeader: 'Mar 2013 — Oct 2015',
                            text: 'Full stack developer, to build web application called What\'s New ' +
                            'to distribute news, articles and feature ' +
                            'releases using NodeJS, WCF, AngularJS'
                          },
                          {
                            key: 'software-engineer-at-tr',
                            header: (
                              <span className='cv__work-experiences-title'>
                                Software Engineer
                                <span className='cv__work-experiences-company'>
                                  @Thomson Reuters Software Thailand
                                </span>
                              </span>
                            ),
                            subHeader: 'May 2011 — Feb 2013',
                            text: (
                              <div>
                                <div>&#9675; Implement and maintenance realtime data in Thomson Reuters Eikon using JavaScript.</div>
                                <div>&nbsp;</div>
                                <div>&#9675; Developed the SPA application for realtime Bonds data using NodeJS, jQuery, AngularJS, Backbone.js.</div>
                                <div>&nbsp;</div>
                                <div>&#9675; Implement CMS system to manage web pages which publish directly to Production for using Java, PHP, JavaScript.</div>
                              </div>
                            )
                          },
                          {
                            key: 'associate-software-engineer-at-tr',
                            header: (
                              <span className='cv__work-experiences-title'>
                                Associate Software Engineer
                                <span className='cv__work-experiences-company'>
                                  @Thomson Reuters Software Thailand
                                </span>
                              </span>
                            ),
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
                                  HTML / CSS / JavaScript / ReactJS / Redux / Angular / AngularJS
                                  / NodeJS / NestJS / Express / Karma / Jasmine / Enzyme / Jest / Selenium
                                  / Robot Framework / Cypress
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
                                  Webpack / Lerna / CircleCI / Jenkins
                                </div>
                              )
                            },
                            {
                              key: 'database',
                              header: 'Database',
                              text: (
                                <div className='cv__skill-items'>
                                  MongoDB / Firebase DB / MySQL / Postgresql
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

export default CV
