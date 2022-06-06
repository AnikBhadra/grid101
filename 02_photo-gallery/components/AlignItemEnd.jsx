import React from 'react'
import '../styles/AlignItemEnd.css'
import images from '../assets/img.js'
function AlignItemEnd() {
    return (
        <div className='grid'>
            {images.map((image) => {
                return <img key={image.id} src={image.url} alt={image.alt} />
            })}

        </div>
    )
}

export default AlignItemEnd
