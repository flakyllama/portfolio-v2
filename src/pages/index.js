import React from 'react'
import '../styles/index.scss'
import '../images/index.js'
import { 
  ArrowUpRightNeutral,
  ArrowUpRightGradient,
  WavingHand,
  Avatar,
  BryanPeters,
  VictorLeipnik,
  DamianSarzynski,
  VladKutsenko,
  LeifDejong,
  SobolMockup
} from '../images/index.js'

const Landing = () => (
  <html lang="en">
    <head>
      <title>Fardeen Chowdhury - Product Designer</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
      </style>
    </head>
    <body>
      <div className="inner">
        <main className="main">
          <div className="bio">
            <img className="bio-avatar" src={Avatar} alt="Fardeen Chowdury's avatar"/>
            <div className="bio-content"> 
              <span className="bio-header">
                Hey! I&#39;m <span className="bio-header-gradient">Fardeen Chowdhury</span>.
              </span>
              <p className="bio-description">
                I&#39;m a product designer that likes to craft cool things.
                Currently based out of Toronto, Canada (GMT - 3).
              </p>
            </div>
          </div>
          <div className="projects">
            <span className="section-title">PROJECTS</span>
            <div className="project-container">
              <div className="project">
                <div className="project-content">
                  <a className="link-btn" href="https://www.sobol.io">
                    Sobol <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right"/>
                  </a>
                  <p className="project-header">
                    Sobol is building a platform for DAOs to use in managing their data, operations and community.
                  </p>
                  <p className="project-description">
                    As a solo designer, I work  with the product team to deliver value to users, while improving on aesthetics and functionality.
                  </p>
                </div>
                <div className="project-team">
                  <span className="project-team-label">TEAM</span>
                  <a className="project-team-member" href="https://www.linkedin.com/in/bryan-peters-3125373/" target="_blank" rel="noreferrer">
                    <img className="project-team-member-avatar" src={BryanPeters} alt="Bryan Peters' avatar" />
                    <div className="project-team-member-details">
                      <span>Bryan Peters</span>
                      <div className="divider-inline-h-round" />
                      <span className="project-team-member-details-role">Co-founder / Product Manager</span>
                      <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right" />
                    </div>
                  </a>
                  <a className="project-team-member" href="https://www.linkedin.com/in/victor-leipnik-2515352" target="_blank" rel="noreferrer">
                    <img className="project-team-member-avatar" src={VictorLeipnik} alt="Victor Leipnik's avatar"/>
                    <div className="project-team-member-details">
                      <span>Victor Leipnik</span>
                      <div className="divider-inline-h-round" />
                      <span className="project-team-member-details-role">Co-founder / Tech Lead</span>
                      <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right" />
                    </div>
                  </a> 
                  <a className="project-team-member" href="https://www.linkedin.com/in/dsarzynski/" target="_blank" rel="noreferrer">
                    <img className="project-team-member-avatar" src={DamianSarzynski} alt="Damian Sarzynski's avatar"/>
                    <div className="project-team-member-details">
                      <span>Damian Sarzynski</span>
                      <div className="divider-inline-h-round" />
                      <span className="project-team-member-details-role">Product Manager</span>
                      <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right" />
                    </div>
                  </a> 
                  <a className="project-team-member" href="https://www.linkedin.com/in/vlad-kutsenko-80994316/" target="_blank" rel="noreferrer">
                    <img className="project-team-member-avatar" src={VladKutsenko} alt="Vlad Kutsenko's avatar" />
                    <div className="project-team-member-details">
                      <span>Vlad Kutsenko</span>
                      <div className="divider-inline-h-round" />
                      <span className="project-team-member-details-role">Senior Engineer</span>
                      <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right" />
                    </div>
                  </a> 
                  <a className="project-team-member" href="https://www.linkedin.com/in/leifdejong/" target="_blank" rel="noreferrer">
                    <img className="project-team-member-avatar" src={LeifDejong} alt="Leif Dejong's avatar"/>
                    <div className="project-team-member-details">
                      <span>Leif Dejong</span>
                      <div className="divider-inline-h-round" />
                      <span className="project-team-member-details-role">Full-stack Engineer</span>
                      <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right" />
                    </div>
                  </a> 
                </div>
                <div>
                  <img className="project-mockup" src={SobolMockup} alt="Sobol mockup"/>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="footer">
          <a className="nav-link">
            Process
          </a>
          <a className="nav-link">
            <span>
              Resume
            </span>
            <img className="suffix-icon" src={ArrowUpRightNeutral} alt="Arrow up right"/>
          </a>
          <div className="divider-inline-h-rect" />
          <a className="nav-link email-address" href="mailto: fardeen.h.chowdhury@gmail.com">
            <img className="prefix-icon" src={WavingHand} alt="Waving hand emoji" />
            <span>
              fardeen.h.chowdhury@gmail.com
            </span>
          </a>
        </footer>
      </div>
    </body>
  </html>
)

export default Landing
