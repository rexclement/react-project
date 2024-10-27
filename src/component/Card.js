import React, { useState } from "react";
// import "./CardComponent.css";

export default function Card() {
    // const cards = [
    //     { id: 1, name: "Kell Dawx", img: "/img/avatar-1.png" },
    //     { id: 2, name: "Lotw Fox", img: "/img/avatar-2.png" },
    //     { id: 3, name: "Sara Mit", img: "/img/avatar-3.png" },
    //     { id: 4, name: "Jenny Wert", img: "/img/avatar-4.png" },
    //     { id: 5, name: "Lexa Kin", img: "/img/avatar-5.png" },
    //   ];
    const [activeCard, setActiveCard] = useState(null); // Correct the naming

    const handleMouseEnter = (index) => {
      setActiveCard(index); // Use correct state setter function
    };
  
    const handleMouseLeave = () => {
      setActiveCard(null); // Reset active card when the cursor leaves
    };
  
    const cards = [
      {
        id: 1,
        title: "Kinocil",
        description: "Passionate about nnn creating web applications.",
        img: './Kinocil Rendered Product.jpg',

        link: "https://example.com/development",
      },
      {
        id: 2,
        title: "Ellergy",
        description: "I design user-centric UI/UX experiences.",
        img: '../ellergy-1.jpg',
        link: "https://example.com/design",
      },
    ];
  return (
    <div className="projects-section">
            <h2 className="projects-title">Our Project Section</h2>

  <div className="cards-container">
  {cards.map((card, index) => (
    <div
      key={card.id}
      className={`card ${activeCard === index ? "active" : ""}`}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-content">
        <img src={card.img} alt={card.title} className="card-image" />
        <h3 className="card-title">{card.title}</h3>
        <p className="card-description">{card.description}</p>
        <a
          href={card.link}
          className="card-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More
        </a>
      </div>
    </div>
  ))}
</div>
</div>
  )
}
