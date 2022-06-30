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
  LeifDejong
} from '../images/index.js'

const Landing = () => (
  <>
    <div className="inner">
      <div className="main">
        <div className="bio">
          <img className="bio-avatar" src={Avatar} />
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
                <a className="link-btn">
                  Sobol <img className="suffix-icon" src={ArrowUpRightGradient} />
                </a>
                <p className="project-header">
                  Sobol is building a platform for DAOs to use in managing their community, data and operations.
                </p>
                <p className="project-description">
                  As a solo designer, I work  with the product team to deliver value to users, while improving on aesthetics and functionality.
                </p>
              </div>
              <div className="project-team">
                <span className="project-team-label">TEAM</span>
                <a className="project-team-member" href="https://www.linkedin.com/in/bryan-peters-3125373/" target="_blank" rel="noreferrer">
                  <img className="project-team-member-avatar" src={BryanPeters} />
                  <div className="project-team-member-details">
                    <span>Bryan Peters</span>
                    <div className="divider-inline-h-round" />
                    <span className="project-team-member-details-role">Co-founder / Product Manager</span>
                    <img className="suffix-icon" src={ArrowUpRightGradient} />
                  </div>
                </a>
                <a className="project-team-member" href="https://www.linkedin.com/in/victor-leipnik-2515352" target="_blank" rel="noreferrer">
                  <img className="project-team-member-avatar" src={VictorLeipnik} />
                  <div className="project-team-member-details">
                    <span>Victor Leipnik</span>
                    <div className="divider-inline-h-round" />
                    <span className="project-team-member-details-role">Co-founder / Tech Lead</span>
                    <img className="suffix-icon" src={ArrowUpRightGradient} />
                  </div>
                </a> 
                <a className="project-team-member" href="https://www.linkedin.com/in/dsarzynski/" target="_blank" rel="noreferrer">
                  <img className="project-team-member-avatar" src={DamianSarzynski} />
                  <div className="project-team-member-details">
                    <span>Damian Sarzynski</span>
                    <div className="divider-inline-h-round" />
                    <span className="project-team-member-details-role">Product Manager</span>
                    <img className="suffix-icon" src={ArrowUpRightGradient} />
                  </div>
                </a> 
                <a className="project-team-member" href="https://www.linkedin.com/in/vlad-kutsenko-80994316/" target="_blank" rel="noreferrer">
                  <img className="project-team-member-avatar" src={VladKutsenko} />
                  <div className="project-team-member-details">
                    <span>Vlad Kutsenko</span>
                    <div className="divider-inline-h-round" />
                    <span className="project-team-member-details-role">Senior Engineer</span>
                    <img className="suffix-icon" src={ArrowUpRightGradient} />
                  </div>
                </a> 
                <a className="project-team-member" href="https://www.linkedin.com/in/leifdejong/" target="_blank" rel="noreferrer">
                  <img className="project-team-member-avatar" src={LeifDejong} />
                  <div className="project-team-member-details">
                    <span>Leif Dejong</span>
                    <div className="divider-inline-h-round" />
                    <span className="project-team-member-details-role">Full-stack Engineer</span>
                    <img className="suffix-icon" src={ArrowUpRightGradient} />
                  </div>
                </a> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <a className="nav-link">
          Process
        </a>
        <a className="nav-link">
          <span>
            Resume
          </span>
          <img className="suffix-icon" src={ArrowUpRightNeutral} />
        </a>
        <div className="divider-inline-h-rect" />
        <a className="nav-link email-address">
          <img className="prefix-icon" src={WavingHand} />
          <span>
            fardeen.h.chowdhury@gmail.com
          </span>
        </a>
      </footer>
      </div>
  </>
)

export default Landing
