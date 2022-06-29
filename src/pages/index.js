import React from 'react'
import '../styles/index.scss'
import ArrowUpRight from '../images/icons/arrow-up-right.svg'
import WavingHand from '../images/emojis/waving-hand.svg'

const Landing = () => (
  <>
    <div className="inner">
      <footer className="footer">
        <a className="nav-link">
          Process
        </a>
        <a className="nav-link">
          <span>
            Resume
          </span>
          <img className="suffix-icon" src={ArrowUpRight} />
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
