import React from 'react'
import '../styles/AlignItemStart.css'
import images from '../assets/img.js'
function AlignItemStart() {
    return (
        <div className='grid'>
            {images.map((image) => {
                return <img key={image.id} src={image.url} alt={image.alt} />
            })}

        </div>
    )
}

export default AlignItemStart