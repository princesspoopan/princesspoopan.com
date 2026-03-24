import './CV.styl'

import { BoxContainer } from '../components/BoxContainer.react'
import { DetailList } from '../components/DetailList.react'
import { PeriodList } from '../components/PeriodList.react'
import poopanImg from './poopan.jpg'

export const CV = () => {
  return (
    <div className='cv'>
      <div className='cv__about-me'>
        <BoxContainer>
          <div className='cv__about-me-content'>
            <img className='cv__image' src={poopanImg} />
            <div className='cv__about-me-details'>
              <div className='cv__header'>
                Krongkarn Jitsil
              </div>
              <DetailList
                items={[
                  {
                    icon: 'user',
                    children: (
                      <div className='cv__about-me-description'>
                          Staff Software Engineer based in Lyon, France, specializing in full-stack development across frontend, backend, data engineering, and DevOps.
                          I design and build scalable systems, tackle complex technical challenges, and drive engineering excellence.
                          Solving problems by finding the most efficient solutions is my passion, which motivates me to keep learning and improving every day.
                          I actively leverage AI tools to enhance productivity, streamline development workflows, and deliver high-impact yet simple and cost efficient solutions.
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
                    icon: 'link',
                    children: <div className='cv__about-me-description --emphasize'>https://princesspoopan.github.io/</div>
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
          </div>
        </BoxContainer>
      </div>
      <div className='cv__block-spacing'></div>
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
                            header: 'Languages / Frameworks',
                            text: (
                              <div className='cv__skill-items'>
                                  TypeScript, JavaScript, Java, Scala, Go, HTML, CSS, React, Redux, VueJS, Angular, AngularJS,
                                  Node.js, NestJS, GraphQL, TypeORM, Jest, Karma, Jasmine, Enzyme, Selenium, Cypress, Robot Framework
                              </div>
                            )
                          },
                          {
                            key: 'data-streaming',
                            header: 'Data & Streaming and cloud',
                            text: (
                              <div className='cv__skill-items'>
                                  Kafka, Flink, ClickHouse, SingleStore, Redis, PostgreSQL, MySQL, MongoDB, AWS (S3), Azure (Blob Storage)
                              </div>
                            )
                          },
                          {
                            key: 'infra-devops',
                            header: 'Infrastructure / DevOps',
                            text: (
                              <div className='cv__skill-items'>
                                  Kubernetes, GitHub Actions, Jenkins, Terraform, Helmfile
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
      <div className='cv__block-spacing'></div>
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
                            key: 'staff-software-engineer-at-cs',
                            header: (
                                <span className='cv__work-experiences-title'>
                                    Staff Software Engineer
                                    <span className='cv__work-experiences-company'>
                                        @ContentSquare Lyon, France
                                    </span>
                                </span>
                            ),
                            subHeader: 'Oct 2022 - present',
                            text: (
                                <div>
                                    <div>
                                        Focusing on driving impact across teams, from data collection through data pipelines to applications.
                                        Author RFCs (Request for Comments), design documents, and technical vision to guide engineering decisions.
                                    </div>
                                    <div className="spacing">&nbsp;</div>
                                    <div>
                                        Leverage technologies and tools to ensure cost efficiency and simplicity across projects.
                                        Over the past two years, lead the migration of multiple pipelines, systems, and products from acquired companies (Heap and Hotjar) into a unified analytics platform, improving accessibility, adoption, and revenue growth.
                                    </div>
                                    <div className="spacing">&nbsp;</div>
                                    <div>
                                        Drive alignment across teams for high-stakes projects, ensuring clear communication with stakeholders.
                                    </div>
                                    <div className="spacing">&nbsp;</div>
                                    <div>
                                        Break down initiatives into milestones and sub-projects to deliver incremental value, ensure ROI, and enable phased delivery.
                                    </div>
                                    <div className="spacing">&nbsp;</div>
                                    <div>
                                        Lead the implementation phase involving schema design changes on ClickHouse and SingleStore, and build transport data layer components using Go, Kafka, and Flink for streaming pipelines.
                                        Maintain and implement features in data enrichment services using Scala before data ingestion into databases.
                                    </div>
                                    <div className="spacing">&nbsp;</div>
                                    <div>
                                        Enhance capabilities in read-path and metadata services, and contribute to data collection systems using TypeScript, NestJS, TypeORM, and Redis for real-time communication between frontend and backend.
                                    </div>
                                    <div className="spacing">&nbsp;</div>
                                    <div>
                                        Manage and deploy services using Kubernetes and Helmfile, and implement data backup strategies using AWS S3 and Azure Blob Storage.
                                    </div>
                                    <div className="spacing">&nbsp;</div>
                                    <div>
                                        Implement and maintain CI/CD pipelines using GitHub Actions to automate testing, deployment, and release workflows.
                                    </div>
                                    <div className="spacing">&nbsp;</div>
                                    <div>
                                        Leverage AI tools to accelerate development, improve code quality, and increase test coverage, with early adoption of tools such as GitHub Copilot, Claude Code, and Dust.
                                    </div>
                                </div>
                            )
                          },
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
                            subHeader: 'Nov 2017 - Sep 2022',
                            text: (
                                <div>
                                    <div>Built and maintained features for ContentSquare analytics tools using Angular, React, Vue.js, Webpack, and a micro-frontend architecture. </div>
                                    <div>Developed and maintained microservices which migrated from monolith legacy services using TypeScript, Node.js, NestJS, and TypeORM to build CRUD systems connected to PostgreSQL. </div>
                                    <div className="spacing">&nbsp;</div>
                                    <div>Led a team of 4 engineers on a new product focused on merchandising analytics, including the migration of a pricing analysis module from an acquired company. </div>
                                    <div>Worked in an Agile environment and coordinated closely with project managers, product managers and designers to ensure successful delivery. </div>
                                </div>
                            )
                          },
                          {
                            key: 'team-lead-at-taskworld',
                            header: (
                              <span className='cv__work-experiences-title'>
                                Web Engineer - Web Engineer Team Lead
                                <span className='cv__work-experiences-company'>
                                  @Taskworld co., ltd
                                </span>
                              </span>
                            ),
                            subHeader: 'Nov 2015 — Sep 2017',
                            text: 'Full-stack developer responsible for implementing and improving key features such as Chat, Kanban board, and Project Page. using React, Redux, ES2015, Babel, Webpack, Node.js, and MongoDB.' +
                                'Led the frontend engineering team using Agile methodologies, overseeing both project delivery and team development.' +
                            'Responsible for maintaining and enhancing key features of Taskworld application across web and mobile applications. ' +
                            'Conducted code reviews, facilitated pair programming, onboarded and mentored new team members and help with their continuous growth.'
                          },
                          {
                            key: 'senior-software-engineer-at-tr',
                            header: (
                              <span className='cv__work-experiences-title'>
                                Software Engineer - Senior Software Engineer
                                <span className='cv__work-experiences-company'>
                                  @Thomson Reuters Software Thailand
                                </span>
                              </span>
                            ),
                            subHeader: 'May 2009 — Oct 2015',
                            text: 'Implemented the first version of Thomson Reuters Eikon by porting functionality from C# to a SPA application in JavaScript.' +
                            ' Built features across both frontend and backend using Node.js, jQuery, AngularJS, Backbone.js, Java, and PHP.'
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
    </div>
  )
}

export default CV
