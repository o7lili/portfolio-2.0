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
    <section class="hero" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`}}>
        <img class="pfp" src={`${process.env.PUBLIC_URL}/images/pfp.png`} />
        <h3 class="subtitle">UNC Coding Bootcamp Student</h3>
    </section>

    <main class="container">
        <section id="about" class="about grid grid-cols-3">
            <section class="title-panel">
                <h2>about me</h2>
            </section>
            <section class="about-container col-span-2">
                <div class="about-text">
                    <p>Spent the last 5 years as a Project Coordinator for a metal fabrication company, completed the UNC Coding Bootcamp November '22 and currently working on honing in the skills learned from the bootcamp to break into the web development world. </p>
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
                            <a href="https://stark-castle-18267.herokuapp.com/" target="_blank">
                                <img src={`${process.env.PUBLIC_URL}/images/dungeon-chest.jpg`} id="dungeon-chest" alt="" width="100%" />
                                <div class="project-text">
                                    <h3>Dungeon Chest</h3>
                                    <p>Tailwinds, Express.js, Node.js, JavaScript, MongoDB, GraphQL</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-span-2">
                          <SmallProjectCard 
                            href={"https://o7lili.github.io/run-buddy/"}
                            github={"https://github.com/o7lili/run-buddy"}
                            imgSrc={`${process.env.PUBLIC_URL}/images/run-buddy.jpg`} 
                            title={"Run Buddy"}
                            description={"HTML, CSS"}
                          />
                          <SmallProjectCard 
                            href={"https://o7lili.github.io/Horiseon-Challenge1-LP/"}
                            github={"https://github.com/o7lili/Horiseon-Challenge1-LP"}
                            imgSrc={`${process.env.PUBLIC_URL}/images/horiseon.jpg`} 
                            title={"Horiseon"}
                            description={"HTML, CSS"}
                          />
                          <SmallProjectCard
                            href={"https://o7lili.github.io/weather-dashboard/"}
                            github={"https://github.com/o7lili/weather-dashboard"}
                            imgSrc={`${process.env.PUBLIC_URL}/images/weather-dashboard.jpg`}
                            title={"Weather Dashboard"}
                            description={"HTML, CSS, JavaScript"}
                          />
                        </div>
                        <div class="col-end-5 col-span-2">
                          <SmallProjectCard 
                            href={"https://parariot.github.io/DIY-Bartender/"}
                            github={"https://github.com/parariot/DIY-Bartender"}
                            imgSrc={`${process.env.PUBLIC_URL}/images/DIY-bartender.jpg`} 
                            title={"DIY Bartender"}
                            description={"HTML, CSS/Tailwind, JavaScript"}
                          />
                          <SmallProjectCard 
                            href={"https://damp-chamber-78850.herokuapp.com/"}
                            github={"https://github.com/o7lili/blog-it-up"}
                            imgSrc={`${process.env.PUBLIC_URL}/images/blog-it-up.jpg`} 
                            title={"Blog It Up"}
                            description={"mySQL, Handlebars, Sequelize, Express"}
                          />
                          <SmallProjectCard 
                            href={"https://hidden-shelf-57015.herokuapp.com/"}
                            github={"https://github.com/crisdege/to-dine-list"}
                            imgSrc={`${process.env.PUBLIC_URL}/images/to-dine-for.jpg`} 
                            title={"To-Dine List"}
                            description={"CSS/Materialize, Handlebars.js, Express.js, Node.js, JavaScript, MySQL, Sequelize"}
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