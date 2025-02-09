import React, {useState, useEffect} from 'react';
import Preloader from './Preloader';
import Link from 'next/link';
import User from './User';
import Contact from './Contact';

const Homepage = () => {
    //display preloader
    const [showPreloader, setShowPreloader] = useState(false);

    useEffect(() => {
        //check if preloader has been shown
        const preloaderShown = sessionStorage.getItem("preloaderShown");

        if (!preloaderShown) {
            setShowPreloader(true);
            sessionStorage.setItem("preloaderShown", "true");
            setTimeout(() => setShowPreloader(false), 5000);
        }
    }, []);

    //emphasize about-bio
    const [aboutClick, setAboutClick] = useState(false);

    const handleAboutClick = () => {
      setAboutClick((prevState) => !prevState);
    };

    return (
        <>
        {showPreloader ? (
            <Preloader />
        ) : (
            <div className='homepage'>
              <div className='intro'>
                  <h1>Assignment 1: Foundations of Advanced Front-end Development</h1>
                  <p className='about-bio' style={{backgroundColor: aboutClick ? "yellow" : "transparent", fontWeight: aboutClick ? "bold" : "normal", padding: "10px"}}>This project demonstrates an understanding of the foundational concepts of front-end development.<br>
                  </br>It incorporates the use of components, props, state management, event handling, and conditional rendering.</p>
              </div>

              <div className="navigation">
                <nav>
                  <ul>
                    <li><Link href="/" className='nav-link'>Homepage</Link></li>
                    <li onClick={handleAboutClick} className='nav-link'>About</li>
                    <li><Link href="/User" className='nav-link'>User Information</Link></li>
                    <li><Link href="/Contact" className='nav-link'>Contact</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
        )}
        </>
    );
};

export default Homepage;