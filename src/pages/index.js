import React from 'react'
import '../styles/index.scss'
/* images */
import Avatar from '../images/personal-avatar.png'
import ArrowUpRightNeutral from '../images/icons/arrow-up-right-neutral.svg'
import ArrowUpRightGradient from '../images/icons/arrow-up-right-gradient.svg'
import WavingHand from '../images/emojis/waving-hand.svg'

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
        <div className="divider-inline-v" />
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
