import React, { useRef, useState } from 'react'

const UseRefImage = () => {
    const imageRef = useRef()
    const textRef = useRef()
    const [ isZoomed, setIsZoomed ] = useState(false)

    const handleClick = () => {
        if(isZoomed){
            imageRef.current.style.transform = 'scale(1)'
        }else {
            imageRef.current.style.transform = 'scale(2)'
        }
        textRef.current.style.backgroundColor= 'blue'
        setIsZoomed(!isZoomed)
    }

  return (
    <div>
        <div ref={textRef}> texto </div>

        <img 
            src='https://th.bing.com/th/id/R.6dcc55e7b98ec973092198c5440937b7?rik=O86CQA3%2fdsIpVg&pid=ImgRaw&r=0'
            onClick={handleClick}
            style={{width: '40%', transition: 'transform 0.5s', cursor: 'pointer'}}
            ref={imageRef}
            />
        
    </div>
  )
}
export default UseRefImage