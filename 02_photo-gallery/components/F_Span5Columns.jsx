import React from 'react'
import '../styles/F_Span5Columns.css'
import images from '../assets/img.js'
function F_Span5Columns() {
    return (
        <div className='grid'>
            {images.map((image) => {
                return <img key={image.id} src={image.url} alt={image.alt} />
            })}

        </div>
    )
}

export default F_Span5Columns