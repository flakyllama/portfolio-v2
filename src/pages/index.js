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
  ProsprMockup,
  KirbyWoo,
  LeoZhu,
  EricRabiner,
  MatthewHam,
  NaomiLiu,
  BrianQuach,
  ArcticLabsMockup,
  DylanSher,
  HussienHussien,
  VendorPMMockup
} from '../images/index.js'

const Landing = () => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="I'm a self-taught product designer with a background in biology/bioinformatics and 4 years of design experience." />
      <title>Fardeen Chowdhury — Product Designer</title>
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
                Hey! I&#39;m <span className="bio-header-gradient">Fardeen Chowdhury (he/him)</span>.
              </span>
              <p className="bio-description">
                I&#39;m a product designer that likes to craft cool things.
                Currently based out of Toronto, Canada <span>(GMT - 3)</span>.
              </p>
              <div className="tag alert">
                <span className="bio-construction-emoji">🚧</span> 
                <p> This site is still under construction </p>
                <span className="bio-construction-emoji">🚧</span>
              </div>
            </div>
          </div>
          <div className="projects">
            <span className="section-title">PROJECTS</span>
            <div className="project-container">
              <div title="Sobol" className="project">
                <div className="project-content">
                  <div className="project-chips">
                    <a className="link-btn-wrapper" href="https://www.sobol.io" target="_blank" rel="noreferrer">
                      <div className="link-btn">
                        Sobol <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right"/>
                      </div>
                    </a>
                    <div className="divider-inline-h-rect" />
                    <div className="tag sobol">Web3</div>
                  </div>
                  <p className="project-header">
                    Sobol is building a platform for DAOs to use in managing their data, operations and community.
                  </p>
                  <p className="project-description">
                    As a solo designer, I work closely with the product team to deliver value to users while improving on aesthetics, functionality, and scalability.
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
              <div title="Prospr" className="project">
                <div className="project-content">
                  <div className="project-chips">
                    <a className="link-btn-wrapper" href="https://www.prospr.cc" target="_blank" rel="noreferrer">
                      <div className="link-btn">
                       Prospr <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right"/>
                      </div>
                    </a>
                    <div className="divider-inline-h-rect" />
                    <div className="tag prospr">Non-profit Tech</div>
                  </div>
                  <p className="project-header">
                    Prospr helps non-profits build branded, conversational donation forms to improve donor engagement and conversion.
                  </p>
                  <p className="project-description">
                    We created a no-code donation form builder and donor management system to optimize fundraising efforts for non-profits.
                    As co-founders, we all carry out a range of functions from sales to product development.
                  </p>
                </div>
                <div className="project-team">
                  <span className="project-team-label">TEAM</span>
                  <a className="project-team-member" href="https://www.linkedin.com/in/christopher-tran/" target="_blank" rel="noreferrer">
                    <img className="project-team-member-avatar" src={ChrisTran} alt="Chris Tran' avatar" />
                    <div className="project-team-member-details">
                      <span>Chris Tran</span>
                      <div className="divider-inline-h-round" />
                      <span className="project-team-member-details-role">Co-founder / Product Designer</span>
                      <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right" />
                    </div>
                  </a>
                  <a className="project-team-member" href="https://www.linkedin.com/in/nathan-knight/" target="_blank" rel="noreferrer">
                    <img className="project-team-member-avatar" src={NathanKnight} alt="Nathan Knight's avatar"/>
                    <div className="project-team-member-details">
                      <span>Nathan Knight</span>
                      <div className="divider-inline-h-round" />
                      <span className="project-team-member-details-role">Co-founder / Full-stack Engineer</span>
                      <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right" />
                    </div>
                  </a> 
                  <a className="project-team-member" href="https://www.linkedin.com/in/williamnippard/" target="_blank" rel="noreferrer">
                    <img className="project-team-member-avatar" src={WilliamNippard} alt="William Nippard's avatar"/>
                    <div className="project-team-member-details">
                      <span>William Nippard</span>
                      <div className="divider-inline-h-round" />
                      <span className="project-team-member-details-role">Co-founder / Full-stack Engineer</span>
                      <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right" />
                    </div>
                  </a> 
                </div>
                <div className="project-mockup prospr-mockup">
                  <img src={ProsprMockup} alt="Prospr mockup"/>
                </div>
              </div>
              <div title="Arctic Labs" className="project">
                <div className="project-content">
                  <div className="project-chips">
                    <a className="link-btn-wrapper" href="https://arcticlabs.ca/" target="_blank" rel="noreferrer">
                     <div className="link-btn">
                        Arctic Labs <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right"/>
                     </div>
                    </a>
                    <div className="divider-inline-h-rect" />
                    <div className="tag arctic-labs">Dev Agency</div>
                  </div>
                  <p className="project-header">
                    Arctic Labs is a software development group that builds custom software for clients to bring their ideas to life. 
                  </p>
                  <p className="project-description">
                    I lead design efforts on client projects, such as an internal sales CRM for a real-estate brokerage and a donation-based 
                    fantasy sports app for a non-profit.
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
                  <img src={ArcticLabsMockup} alt="Arctic Labs mockup"/>
                </div>
              </div>
              <div title="VendorPM" className="project">
                <div className="project-content">
                  <div className="project-chips">
                    <a className="link-btn-wrapper" href="https://vendorpm.com/" target="_blank" rel="noreferrer">
                      <div className="link-btn">
                        VendorPM <img className="suffix-icon" src={ArrowUpRightGradient} alt="Arrow up right"/>
                      </div>
                    </a>
                    <div className="divider-inline-h-rect" />
                    <div className="tag vendorpm">PropTech</div>
                  </div>
                  <p className="project-header">
                    VendorPM is a two-sided marketplace that modernizes how property managers work with service vendors.
                  </p>
                  <p className="project-description">
                    I joined the team as their first product designer while they were pre-seed. My work on the product and branding
                    assisted in raising a $6M seed round and scaling the team to 60+ people.
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
                  <img src={VendorPMMockup} alt="VendorPM mockup"/>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="footer">
          {/* <a className="nav-link" href="/about">
            About
          </a>
          */}
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
              Get in touch
            </span>
          </a>
        </footer>
      </div>
    </body>
  </html>
)

export default Landing
