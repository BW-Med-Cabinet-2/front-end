import React from 'react';



export default function Card({name, ailments, type}){


    return (
        <div className="card">
            <h3 className="card-name">{name}</h3>
            <ul className="card-ailments">
                {ailments.map((item, ind) => {
                    return <li key={`${name}-${item}-${ind}`}>{item}</li>
                })}
            </ul>
            <p className="card-type">{type}</p>
        </div>
    )
}