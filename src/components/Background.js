import * as React from 'react';
import './Background.css'

const Background = ({children, className}) => {
    return (
        <div className={`${className} background sm:t-0`}>
            {children}
        </div>
    )
}

export default Background
