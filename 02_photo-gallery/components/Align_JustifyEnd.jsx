import React from 'react'
import '../styles/Align_JustifyEnd.css'
import images from '../assets/img.js'
function Align_JustifyEnd() {
    return (
        <div className='grid'>
            {images.map((image) => {
                return <img key={image.id} src={image.url} alt={image.alt} />
            })}

        </div>
    )
}

export default Align_JustifyEnd