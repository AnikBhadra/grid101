import React from 'react'
import '../styles/SameSizeImages.css'
import images from '../assets/img.js'
function SameSizeImages() {
    return (
        <div className='container'>
            {images.map((image) => {
                return <img key={image.id} src={image.url} alt={image.alt} />
            })}

        </div>
    )
}

export default SameSizeImages