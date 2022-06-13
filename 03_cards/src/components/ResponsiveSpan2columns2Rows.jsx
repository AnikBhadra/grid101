import React from 'react'
import data from '../assets/data'
import '../ResponsiveSpan2columns2Rows.css'

function ResponsiveSpan2columns2Rows() {
    return (
        <div>
            <main className='grid' >
                {data.map((item) => (
                    <article key={item.id}>
                        <img src={item.url} alt={item.title} />
                        <div className='text'>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                            <button>{item.button}</button>
                        </div>
                    </article>
                ))}
            </main>
        </div>
    )
}

export default ResponsiveSpan2columns2Rows