import React from 'react';
import Card from './Card';

const dummyData = [
    {
        name: 'blue dream',
        ailments: ['nausea', 'anxiety', 'insomnia'],
        type: 'hybrid'
    },
    {
        name: 'gg4',
        ailments: ['nausea', 'anxiety', 'insomnia'],
        type: 'hybrid'
    },
    {
        name: 'sour diesel',
        ailments: ['nausea', 'anxiety', 'insomnia'],
        type: 'hybrid'
    }
]
export default function Cards(props){
 const weed = props

    return (
        <div className="cards-container">
            {weed.map((item, ind) => {
                return <Card key={`${item.name}-${ind}`} {...item}/>
            })}
        </div>
    )
}