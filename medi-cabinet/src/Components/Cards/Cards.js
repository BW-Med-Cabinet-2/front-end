import React from 'react';
import Card from '../Cards/Card';

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

export default function Cards({quizResults}){
console.log(quizResults)
let returnData
if (quizResults){
    returnData = quizResults.recommendations.strain_recommendations
}
    return (
        <div className="cards-container">
            {returnData && returnData.map((item, ind) => {
                return <Card key={`${item.name}-${ind}`} {...item}/>
            })}
        </div>
    )
}