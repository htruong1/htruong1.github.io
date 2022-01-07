import * as React from 'react';
import './Card.css'

const Card = ({
    children,
    title
}) => {
    return(
        <div className='card bg-gray-400 rounded-lg flex flex-col items-center p-4'>
            <h1>{title}</h1>
            {children}
        </div>
    )
}

export {Card}
