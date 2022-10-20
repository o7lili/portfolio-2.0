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
                    <li><a href="#work">work</a></li>
                    <li><a href="#contact">contact</a></li>
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
                <h2>about</h2>
            </section>
            <section class="about-container col-span-2">
                <div class="about-text">
                    <p>Currently a Project Coordinator for a metal fabrication company. I am also enrolled in the UNC Coding Bootcamp, hoping to break into the web development world. </p>
                </div>
            </section>
        </section>
        <content>
            <div id="work" class="work grid grid-cols-3">
                <section class="title-panel">
                    <h2>work</h2>
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
                            imgSrc={"/images/run-buddy.jpg"} 
                            title={"Run Buddy"}
                            description={"HTML, CSS"}
                          />
                          <SmallProjectCard 
                            href={"https://o7lili.github.io/Horiseon-Challenge1-LP/"}
                            imgSrc={"/images/horiseon.jpg"} 
                            title={"Horiseon"}
                            description={"HTML, CSS"}
                          />
                        </div>
                        <div class="col-end-5 col-span-2">
                          <SmallProjectCard 
                            href={"https://parariot.github.io/DIY-Bartender/"}
                            imgSrc={"/images/DIY-bartender.jpg"} 
                            title={"DIY Bartender"}
                            description={"HTML, CSS/Tailwind, JavaScript"}
                          />
                          <SmallProjectCard 
                            href={""}
                            imgSrc={"/images/dummy-img3.jpg"} 
                            title={"Project #5"}
                            description={"details"}
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
                    <ul>
                        <li>555.555.555</li>
                        <li>email@website.com</li>
                        <li><a href="https://github.com/o7lili" target="_blank">GitHub</a></li>
                        <li>LinkedIn</li>
                    </ul>
                </section>
            </div>
        </content>
    </main>

    </div>
  )
}

export default App;