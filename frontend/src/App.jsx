import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
    return (
        <div>
            <ReactFullpage
                scrollingSpeed={1000}
                navigation
                controlArrows={true}
                slidesNavigation={true}
                loopHorizontal={false}

                render={() => (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <div className="slide">
                                <Hero/>
                            </div>
                            <div className="slide">
                                <About/>
                            </div>
                            <div className="slide">
                                <Skills/>
                            </div>
                            <div className="slide">
                                <Projects/>
                            </div>
                            <div className="slide">
                                <Contact/>
                            </div>
                        </div>
                    </ReactFullpage.Wrapper>
                )}
            />
            <footer className="regular-text bg-gray-800 text-white text-center p-4">
                &copy; 2024 Luis Carvalho
            </footer>
        </div>
    );
};

export default App;
