import React from 'react'
import '../styles/F_Span3Columns3rows.css'
import images from '../assets/img.js'
function F_Span3Columns3rows() {
    return (
        <div className='grid'>
            {images.map((image) => {
                return <img key={image.id} src={image.url} alt={image.alt} />
            })}

        </div>
    )
}

export default F_Span3Columns3rows