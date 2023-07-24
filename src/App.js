import React, { useEffect, useState } from "react";
import { swaggerUrls } from "./static/swaggerUrls.js";
import Iframe from "./Iframe.js";
import './App.css'

function App() {
  const [services, setServices] = useState([]);
  const [swaggerUrl, setSwaggerUrl] = useState(() => swaggerUrls["Workspace"]);
 

  useEffect(() => {
    setServices(Object.keys(swaggerUrls));
  }, []);

  const loadSwagger = (val) => {
    
    setSwaggerUrl(val);
  };
  return (
    <>
  <div className="navbar">
  <h1 className="title">SAFELINC</h1>
  </div>
    <div className="swagger-ui">
      <div className="sidebar">
     <div className="serviceHeader">
     <h1 >Services</h1>
     </div>
        {services &&
          services.map &&
          services.map((value, key) => {
            return (
              <div key={key}>
                <p
                  className="serviceButtons"
                  onClick={() => loadSwagger(swaggerUrls[value])}
                >
                  {value}
                </p>
              </div>
            );
          })}
      </div>

     
     <Iframe swaggerUrl={swaggerUrl}/>
     
    </div>
    </>
  );
}

export default App;
