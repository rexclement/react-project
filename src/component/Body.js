import React,{ useState } from 'react'

export default function Body() {
    const [isVisible, setIsVisible] = useState(false); // State to track visibility
    const handleMouseEnter = () => {
        setIsVisible(true); // Set visibility to true on hover
      };
  return (
    <div 
    className="two-column-container" 
    onMouseEnter={handleMouseEnter} // Trigger visibility on hover
  >
    <div className={`column left-column ${isVisible ? 'visible' : ''}`}>
      <div className="content">
        {/* <h2>Left Column</h2> */}
        <p>This is the content inside the left column. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of </p>
      </div>
    </div>

    <div className={`column right-column ${isVisible ? 'visible' : ''}`}>
      <div className="content">
        {/* <h2>Right Column</h2> */}
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of </p>
      </div>
    </div>
  </div>
  )
}
