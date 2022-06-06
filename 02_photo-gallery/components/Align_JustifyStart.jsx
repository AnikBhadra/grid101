import React from 'react'
import '../styles/Align_JustifyStart.css'
import images from '../assets/img.js'
function Align_JustifyStart() {
    return (
        <div className='grid'>
            {images.map((image) => {
                return <img key={image.id} src={image.url} alt={image.alt} />
            })}

        </div>
    )
}

export default Align_JustifyStart