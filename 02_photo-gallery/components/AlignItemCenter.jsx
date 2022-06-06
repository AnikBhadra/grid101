import React from 'react'
import '../styles/AlignItemCenter.css'
import images from '../assets/img.js'
function AlignItemCenter() {
    return (
        <div className='grid'>
            {images.map((image) => {
                return <img key={image.id} src={image.url} alt={image.alt} />
            })}

        </div>
    )
}

export default AlignItemCenter