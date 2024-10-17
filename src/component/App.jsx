// import React, { useState }  from "react";
// import Blog from './blog.jsx';
// import Cont from './Content.jsx';

// function App(){
//     const [rssData, setRssData] = useState(null);
//     const [loading, setLoading] = useState(false);
  
    
//       setLoading(true);
  
//       // Send request to PHP backend
//       fetch("http://localhost/firstPHP/hello.php")
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data);
//           setRssData(data); // Set the data received from the backend
//           setLoading(false); // Stop loading once data is received
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//           setLoading(false);
//         });

//     return(
//     <div className="main">
//       <div className="card-grid">
//       {rssData.map((item , index) => {
           
//           const img= item.image && item.image.length > 0 ? ( 
//                 item.imgage[1] ) : ("flower.png"
//            );
//            <Blog
//                key={index}
//                image={img}
//                link={item.link}
//                title={item.title}
//            />
//        })
//       }

//       </div>

//     </div>
//     );
// }

// export default App;

import React, { useState, useEffect } from "react";
import Blog from './blog.jsx';

function App() {
  const [rssData, setRssData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // Send request to PHP backend
    fetch("http://localhost/firstPHP/hello.php")
      .then((response) => response.json())
      .then((data) => {
        setRssData(data); // Set the data received from the backend
        setLoading(false); // Stop loading once data is received
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main">
      <div className="card-grid">
        {rssData.map((item, index) => {
          const img = item.image && item.image.length > 1 
            ? item.image[1] 
            : "flower.png"; // Use default image if not available

          return (
            <Blog
              key={index}
              image={img}
              link={item.link}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
