import React from 'react'
import '../styles/Span3Columns2Rows.css'
import images from '../assets/img.js'
function Span3Columns2Rows() {
    return (
        <div className='grid'>
            {images.map((image) => {
                return <img key={image.id} src={image.url} alt={image.alt} />
            })}

        </div>
    )
}

export default Span3Columns2Rows
