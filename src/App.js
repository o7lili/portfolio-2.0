import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
// background-image: url(`${proc}/images/hero.jpg`);
import SmallProjectCard from './components/SmallProjectCard';

function App() {
    
  // return (
  //     <div className=''>
  //         <Nav></Nav>
  //         <main>
  //             <About></About>
  //         </main>
  //     </div>
  // );

  return (
    <div className='bodyDiv'>
    <header>
        <h1>Liliana Perez</h1>
        <div>
            <nav>
                <ul>
                    <li><a href="#about">about</a></li>
                    <li><a href="#portfolio">portfolio</a></li>
                    <li><a href="#contact">contact</a></li>
                    <li><a href="#resume">resume</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <section class="hero" style={{ backgroundImage: `url(/images/hero.jpg)`}}>
        <img class="pfp" src="/images/pfp.png" />
        <h3 class="subtitle">UNC Coding Bootcamp Student</h3>
    </section>

    <main class="container">
        <section id="about" class="about grid grid-cols-3">
            <section class="title-panel">
                <h2>about me</h2>
            </section>
            <section class="about-container col-span-2">
                <div class="about-text">
                    <p>Currently a Project Coordinator for a metal fabrication company for 4 1/2 years. I am also enrolled in the UNC Coding Bootcamp, graduating November '22 and hoping to break into the web development world. </p>
                </div>
            </section>
        </section>
        <content>
            <div id="portfolio" class="work grid grid-cols-3">
                <section class="title-panel">
                    <h2>portfolio</h2>
                </section>
                <section class="projects col-span-2">
                    <div class="grid grid-cols-4">
                        <div class="col-span-4">
                            <a href="https://hidden-shelf-57015.herokuapp.com/" target="_blank">
                                <img src="/images/to-dine-for.jpg" id="to-dine-list" alt="" width="100%" />
                                <div class="project-text">
                                    <h3>To-Dine List</h3>
                                    <p>CSS/Materialize, Handlebars.js, Express.js, Node.js, JavaScript, MySQL, Sequelize</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-span-2">
                          <SmallProjectCard 
                            href={"https://o7lili.github.io/run-buddy/"}
                            github={"https://github.com/o7lili/run-buddy"}
                            imgSrc={"/images/run-buddy.jpg"} 
                            title={"Run Buddy"}
                            description={"HTML, CSS"}
                          />
                          <SmallProjectCard 
                            href={"https://o7lili.github.io/Horiseon-Challenge1-LP/"}
                            github={"https://github.com/o7lili/Horiseon-Challenge1-LP"}
                            imgSrc={"/images/horiseon.jpg"} 
                            title={"Horiseon"}
                            description={"HTML, CSS"}
                          />
                          <SmallProjectCard
                            href={"https://o7lili.github.io/weather-dashboard/"}
                            github={"https://github.com/o7lili/weather-dashboard"}
                            imgSrc={"/images/weather-dashboard.jpg"}
                            title={"Weather Dashboard"}
                            description={"HTML, CSS, JavaScript"}
                          />
                        </div>
                        <div class="col-end-5 col-span-2">
                          <SmallProjectCard 
                            href={"https://parariot.github.io/DIY-Bartender/"}
                            github={"https://github.com/parariot/DIY-Bartender"}
                            imgSrc={"/images/DIY-bartender.jpg"} 
                            title={"DIY Bartender"}
                            description={"HTML, CSS/Tailwind, JavaScript"}
                          />
                          <SmallProjectCard 
                            href={"https://damp-chamber-78850.herokuapp.com/"}
                            github={"https://github.com/o7lili/blog-it-up"}
                            imgSrc={"/images/blog-it-up.jpg"} 
                            title={"Blog It Up"}
                            description={"mySQL, Handlebars, Sequelize, Express"}
                          />
                        </div>
                    </div>
                </section>
            </div>
        </content>     
        <content>
            <div id="contact" class="contact grid grid-cols-3">
                <section class="title-panel">
                    <h2>contact</h2>
                </section>
                <section class="contact-info col-span-2">
                    <div>
                      <form action="#">
                        <ul>

                          <li>
                            <p>
                              <label for="name">Name</label>
                              <input type="text" name="name" placeholder="Name" />
                            </p>
                          </li>
                          <li>
                            <p>
                              <label for="email">Email</label>
                              <input type="text" name="email" placeholder="Email" />
                            </p>
                          </li>
                          <li>
                            <label for="message">Message</label>
                            <textarea cols="46" rows="3" name="message" placeholder="Message" />
                          </li>

                          <li>
                            <input class="btn btn-submit" type="submit" value="Submit" />
                          </li>

                        </ul>
                      </form>
                    </div>
                </section>
            </div>
        </content>
    </main>

    </div>
  )
}

export default App;