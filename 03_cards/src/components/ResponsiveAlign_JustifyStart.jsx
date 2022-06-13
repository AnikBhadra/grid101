import React from 'react'
import data from '../assets/data'
import '../ResponsiveAlign_JustifyStart.css'

function ResponsiveAlign_JustifyStart() {
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

export default ResponsiveAlign_JustifyStart