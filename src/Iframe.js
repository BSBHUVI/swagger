import React from 'react'


function Iframe({swaggerUrl}) {
   
    
  return (
    <div className='iframeDiv'>
    <iframe
        key={Math.random()}
        src={swaggerUrl}
    
        title="swagger ui"
      ></iframe>
    </div>
  )
}

export default Iframe
