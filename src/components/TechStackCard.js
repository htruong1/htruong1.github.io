import * as React from 'react';

const TechStackCard = ({name, icon}) => {
    return(
        <div>
            <img src={icon} alt={name}/>
            <div className="text-white text-center">{name}</div>
        </div>
    )
}

export default TechStackCard
