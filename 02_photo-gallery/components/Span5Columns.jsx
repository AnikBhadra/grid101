import React from 'react'
import '../styles/Span5Columns.css'
import images from '../assets/img.js'
function Span5Columns() {
    return (
        <div className='grid'>
            {images.map((image) => {
                return <img key={image.id} src={image.url} alt={image.alt} />
            })}

        </div>
    )
}

export default Span5Columns
