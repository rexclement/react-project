import React from "react";

function Blog(props) {
  console.log(props);
  return (
    <div className="image-container">
    <a href={props.link}><img src={props.image} alt="flower"/></a>
    <div className="content-overlay">
      <h2>{props.title}</h2>
    </div>
  </div>
  );
}

export default Blog;