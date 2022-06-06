import React from 'react'
import '../styles/Align_JustifyCenter.css'
import images from '../assets/img.js'
function Align_JustifyCenter() {
    return (
        <div className='grid'>
            {images.map((image) => {
                return <img key={image.id} src={image.url} alt={image.alt} />
            })}

        </div>
    )
}

export default Align_JustifyCenter