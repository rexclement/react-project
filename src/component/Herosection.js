// import React,{useEffect,useState} from 'react'

// export default function Herosection() {
//     const [videoClass, setVideoClass] = useState('video-full-width');
//     const [showText, setShowText] = useState(false);
//     const [removeBlink, setRemoveBlink] = useState(false); // State to remove blink

//   // Shrink the video width after 2 seconds
//   useEffect(() => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu1 = () => {
//       setIsMenuOpen(prevState => !prevState);
//     };
//     const timer = setTimeout(() => {
//       setVideoClass('video-shrink');
//     }, 2000); // Adjust the duration as needed

//     const textTimer = setTimeout(() => {
//         setShowText(true); // Show text after shrinking
//       }, 4000); 
//       const removeBlinkTimer = setTimeout(() => {
//         setRemoveBlink(true); // Stop blinking after typing finishes
//       }, 7000); // Adjust this to match the typing animation duration (3s + buffer)


//     return () => {

//         clearTimeout(timer);
//         clearTimeout(textTimer);
//         clearTimeout(removeBlinkTimer); // Clean up timers

//     }; 
//   }, []);
  
//   return (
//     <div className="App">
//     <video
//       className={videoClass}
//       autoPlay
//       loop
//       muted
//       playsInline
//     >
//       <source src={`${process.env.PUBLIC_URL}/wave.mp4`} type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>
//     {showText && (
//  <p className={`typing-text ${removeBlink ? 'no-blink' : ''}`}>
// Kinowave is leading the path towards sustainable communities.


// </p>      )}
//   </div>




  
//   )
// }



import React, { useEffect, useState } from 'react';

export default function Herosection() {
  const [videoClass, setVideoClass] = useState('video-full-width');
  const [showText, setShowText] = useState(false);
  const [removeBlink, setRemoveBlink] = useState(false); // State to remove blink
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Moved this state outside useEffect

  // Shrink the video width after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoClass('video-shrink');
    }, 2000); // Adjust the duration as needed

    const textTimer = setTimeout(() => {
      setShowText(true); // Show text after shrinking
    }, 4000); 

    const removeBlinkTimer = setTimeout(() => {
      setRemoveBlink(true); // Stop blinking after typing finishes
    }, 7000); // Adjust this to match the typing animation duration (3s + buffer)

    return () => {
      clearTimeout(timer);
      clearTimeout(textTimer);
      clearTimeout(removeBlinkTimer); // Clean up timers
    };
  }, []);

  return (
    <div className="App">
      <video
        className={videoClass}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={`${process.env.PUBLIC_URL}/wave.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {showText && (
        <p className={`typing-text ${removeBlink ? 'no-blink' : ''}`}>
          Kinowave is leading the path towards sustainable communities.
        </p>
      )}
    </div>
  );
}
