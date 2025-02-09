import React, {useState, useEffect} from 'react';

//preloading screen
const Preloader = () => {
  const [loadText, setLoadText] = useState("...");
  const titles = ["photography", "graphic design", "web design & development", "writer & editor"];

  useEffect(() => {
    //cycle through text
    let index = 0;
    const cycleText = setInterval(() => {
      setLoadText(titles[index]);
      index = (index + 1) % titles.length;
    }, 1000);

    //hide after display
    const timer = setTimeout(() => {
      clearInterval(cycleText);
    }, 5000);

    //reset
    return () => {
      clearInterval(cycleText);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className='preloading-screen'>
      <div className='loading-text'>{loadText}</div>
    </div>
  );
};

export default Preloader;