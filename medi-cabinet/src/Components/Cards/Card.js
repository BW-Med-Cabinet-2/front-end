import React from 'react';



export default function Card({name, type, ailments}){


    return (
        <div className="card">
            <h3 className="card-name">{name}</h3>
            <p className="card-type">{type}</p>
            <ul className="card-ailments">
                {ailments.map((item, ind) => {
                    return <li key={`${name}-${item}-${ind}`}>{item}</li>
                })}
            </ul>
        </div>
    )
}