import React from 'react'
import '../styles/index.scss'
import '../images/index.js'
import { 
  ArrowUpRightGradient,
  WavingHand,
  Avatar,
  BryanPeters,
  VictorLeipnik,
  DamianSarzynski,
  VladKutsenko,
  LeifDejong,
  SobolMockup,
  NathanKnight,
  ChrisTran,
  WilliamNippard,
  KirbyWoo,
  LeoZhu,
  EricRabiner,
  MatthewHam,
  NaomiLiu,
  BrianQuach,
  DylanSher,
  HussienHussien
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
              <div title="Sobol" className="project">
                <div className="project-content">
                  <div className="project-chips">
                    <a className="link-btn" href="https://www.sobol.io" target="_blank" rel="noreferrer">
                      Sobol <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right"/>
                    </a>
                    <div className="divider-inline-h-round" />
                    <div className="tag sobol">Web3</div>
                  </div>
                  <p className="project-header">
                    Sobol is building a platform for DAOs to use in managing their data, operations and community.
                  </p>
                  <p className="project-description">
                    As a solo designer, I work closely with the product team to deliver value to users, while improving on aesthetics, functionality, and scalability.
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
                <div className="project-mockup sobol-mockup">
                  <img src={SobolMockup} alt="Sobol mockup"/>
                </div>
              </div>
              <div className="project-divider" />
              <div title="Prospr" className="project">
                <div className="project-content">
                  <div className="project-chips">
                    <a className="link-btn" href="https://www.prospr.cc" target="_blank" rel="noreferrer">
                      Prospr <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right"/>
                    </a>
                    <div className="divider-inline-h-round" />
                    <div className="tag prospr">Non-profit Tech</div>
                  </div>
                  <p className="project-header">
                    Prospr helps non-profits build  branded, conversational donation forms to improve donor engagement and conversion.
                  </p>
                  <p className="project-description">
                    We built an app to help non-profits build  branded, conversational donation forms to improve donor engagement and conversion.
                  </p>
                </div>
                <div className="project-team">
                  <span className="project-team-label">TEAM</span>
                  <a className="project-team-member" href="https://www.linkedin.com/in/christopher-tran/" target="_blank" rel="noreferrer">
                    <img className="project-team-member-avatar" src={ChrisTran} alt="Chris Tran' avatar" />
                    <div className="project-team-member-details">
                      <span>Chris Tran</span>
                      <div className="divider-inline-h-round" />
                      <span className="project-team-member-details-role">Product Designer</span>
                      <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right" />
                    </div>
                  </a>
                  <a className="project-team-member" href="https://www.linkedin.com/in/nathan-knight/" target="_blank" rel="noreferrer">
                    <img className="project-team-member-avatar" src={NathanKnight} alt="Nathan Knight's avatar"/>
                    <div className="project-team-member-details">
                      <span>Nathan Knight</span>
                      <div className="divider-inline-h-round" />
                      <span className="project-team-member-details-role">Full-stack Engineer</span>
                      <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right" />
                    </div>
                  </a> 
                  <a className="project-team-member" href="https://www.linkedin.com/in/williamnippard/" target="_blank" rel="noreferrer">
                    <img className="project-team-member-avatar" src={WilliamNippard} alt="William Nippard's avatar"/>
                    <div className="project-team-member-details">
                      <span>William Nippard</span>
                      <div className="divider-inline-h-round" />
                      <span className="project-team-member-details-role">Full-stack Engineer</span>
                      <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right" />
                    </div>
                  </a> 
                </div>
                <div className="project-mockup prospr-mockup">
                  <img src={SobolMockup} alt="Prospr mockup"/>
                </div>
              </div>
              <div className="project-divider" />
              <div title="Arctic Labs" className="project">
                <div className="project-content">
                  <div className="project-chips">
                    <a className="link-btn" href="https://arcticlabs.ca/" target="_blank" rel="noreferrer">
                      Arctic Labs <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right"/>
                    </a>
                    <div className="divider-inline-h-round" />
                    <div className="tag arctic-labs">Dev Shop</div>
                  </div>
                  <p className="project-header">
                    It suddenly struck me that that tiny pea, pretty and blue, was the Earth. I put up my thumb and shut one eye, and my thumb blotted out the planet Earth.
                  </p>
                  <p className="project-description">
                    Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next 10.
                  </p>
                </div>
                <div className="project-team">
                  <span className="project-team-label">TEAM</span>
                  <a className="project-team-member" href="https://www.linkedin.com/in/matthewninja/" target="_blank" rel="noreferrer">
                    <img className="project-team-member-avatar" src={MatthewHam} alt="Matthew Ham's avatar" />
                    <div className="project-team-member-details">
                      <span>Matthew Ham</span>
                      <div className="divider-inline-h-round" />
                      <span className="project-team-member-details-role">Co-founder / Full-stack Engineer</span>
                      <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right" />
                    </div>
                  </a>
                  <a className="project-team-member" href="https://www.linkedin.com/in/ericrabiner/" target="_blank" rel="noreferrer">
                    <img className="project-team-member-avatar" src={EricRabiner} alt="Eric Rabiner's avatar"/>
                    <div className="project-team-member-details">
                      <span>Eric Rabiner</span>
                      <div className="divider-inline-h-round" />
                      <span className="project-team-member-details-role">Co-founder / Full-stack Engineer</span>
                      <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right" />
                    </div>
                  </a> 
                  <a className="project-team-member" href="https://www.linkedin.com/in/brianquach24/" target="_blank" rel="noreferrer">
                    <img className="project-team-member-avatar" src={BrianQuach} alt="Brian Quach's avatar"/>
                    <div className="project-team-member-details">
                      <span>Brian Quach</span>
                      <div className="divider-inline-h-round" />
                      <span className="project-team-member-details-role">Full-stack Engineer</span>
                      <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right" />
                    </div>
                  </a> 
                  <a className="project-team-member" href="https://www.linkedin.com/in/norman-wuwei-liu/" target="_blank" rel="noreferrer">
                    <img className="project-team-member-avatar" src={NaomiLiu} alt="Naomi Liu's avatar"/>
                    <div className="project-team-member-details">
                      <span>Naomi Liu</span>
                      <div className="divider-inline-h-round" />
                      <span className="project-team-member-details-role">Full-stack Engineer</span>
                      <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right" />
                    </div>
                  </a> 
                  <a className="project-team-member" href="https://www.linkedin.com/in/leozhu1996/" target="_blank" rel="noreferrer">
                    <img className="project-team-member-avatar" src={LeoZhu} alt="Leo Zhu's avatar"/>
                    <div className="project-team-member-details">
                      <span>Leo Zhu</span>
                      <div className="divider-inline-h-round" />
                      <span className="project-team-member-details-role">Product Manager</span>
                      <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right" />
                    </div>
                  </a> 
                  <a className="project-team-member" href="https://www.linkedin.com/in/kirby-woo/" target="_blank" rel="noreferrer">
                    <img className="project-team-member-avatar" src={KirbyWoo} alt="Kirby Woo's avatar"/>
                    <div className="project-team-member-details">
                      <span>Kirby Woo</span>
                      <div className="divider-inline-h-round" />
                      <span className="project-team-member-details-role">Product Designer </span>
                      <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right" />
                    </div>
                  </a> 
                </div>
                <div className="project-mockup al-mockup">
                  <img src={SobolMockup} alt="Arctic Labs mockup"/>
                </div>
              </div>
              <div title="VendorPM" className="project">
                <div className="project-content">
                  <div className="project-chips">
                    <a className="link-btn" href="https://vendorpm.com/" target="_blank" rel="noreferrer">
                      VendorPM <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right"/>
                    </a>
                    <div className="divider-inline-h-round" />
                    <div className="tag vendorpm">PropTech</div>
                  </div>
                  <p className="project-header">
                    It suddenly struck me that that tiny pea, pretty and blue, was the Earth. I put up my thumb and shut one eye, and my thumb blotted out the planet Earth.
                  </p>
                  <p className="project-description">
                    Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next 10.
                  </p>
                </div>
                <div className="project-team">
                  <span className="project-team-label">TEAM</span>
                  <a className="project-team-member" href="https://www.linkedin.com/in/dylan-sher-911a7362/" target="_blank" rel="noreferrer">
                    <img className="project-team-member-avatar" src={DylanSher} alt="Dylan Sher's avatar" />
                    <div className="project-team-member-details">
                      <span>Dylan Sher</span>
                      <div className="divider-inline-h-round" />
                      <span className="project-team-member-details-role">Co-founder / VP Product</span>
                      <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right" />
                    </div>
                  </a>
                  <a className="project-team-member" href="https://www.linkedin.com/in/hussienhussien/" target="_blank" rel="noreferrer">
                    <img className="project-team-member-avatar" src={HussienHussien} alt="Hussien Hussien's avatar"/>
                    <div className="project-team-member-details">
                      <span>Hussien Hussien</span>
                      <div className="divider-inline-h-round" />
                      <span className="project-team-member-details-role">Senior Product Manager </span>
                      <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right" />
                    </div>
                  </a>
                  <a className="project-team-member" href="https://www.linkedin.com/in/kirby-woo/" target="_blank" rel="noreferrer">
                    <img className="project-team-member-avatar" src={KirbyWoo} alt="Kirby Woo's avatar"/>
                    <div className="project-team-member-details">
                      <span>Kirby Woo</span>
                      <div className="divider-inline-h-round" />
                      <span className="project-team-member-details-role">Product Designer </span>
                      <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right" />
                    </div>
                  </a>
                  <a className="project-team-member" href="https://www.linkedin.com/in/connorwiebe/" target="_blank" rel="noreferrer">
                    <div className="placeholder-avatar" alt="Connor Wiebe's avatar">
                      <p>CW</p>
                    </div>
                    <div className="project-team-member-details">
                      <span>Connor Wiebe</span>
                      <div className="divider-inline-h-round" />
                      <span className="project-team-member-details-role">Tech Lead</span>
                      <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right" />
                    </div>
                  </a> 
                  <a className="project-team-member" href="https://www.linkedin.com/in/brianquach24/" target="_blank" rel="noreferrer">
                    <img className="project-team-member-avatar" src={BrianQuach} alt="Brian Quach's avatar"/>
                    <div className="project-team-member-details">
                      <span>Brian Quach</span>
                      <div className="divider-inline-h-round" />
                      <span className="project-team-member-details-role">Full-stack Engineer</span>
                      <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right" />
                    </div>
                  </a> 
                  <a className="project-team-member" href="https://www.linkedin.com/in/ericrabiner/" target="_blank" rel="noreferrer">
                    <img className="project-team-member-avatar" src={EricRabiner} alt="Eric Rabiner's avatar"/>
                    <div className="project-team-member-details">
                      <span>Eric Rabiner</span>
                      <div className="divider-inline-h-round" />
                      <span className="project-team-member-details-role">Full-stack Engineer</span>
                      <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right" />
                    </div>
                  </a> 
                </div>
                <div className="project-mockup vpm-mockup">
                  <img src={SobolMockup} alt="VendorPM mockup"/>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="footer">
          <a className="nav-link">
            Process
          </a>
          <a className="nav-link" href="https://read.cv/fardeenchowdhury" target="_blank" rel="noreferrer">
            <span>
              Resume
            </span>
            <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right" />
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
