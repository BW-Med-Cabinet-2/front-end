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

export default function Cards({ quizResults, searchResults, addToSavedList, savedList, setSavedList }) {
    // console.log(quizResults)
    let returnData
    if (quizResults) {
        returnData = quizResults.recommendations.strain_recommendations
    } else if (searchResults) {
        returnData = searchResults.recommendations.strain_recommendations
    } else if (quizResults && searchResults) {
        returnData = quizResults.recommendations.strain_recommendations + searchResults.recommendations.strain_recommendations
    } else if (savedList !== []) {
        returnData = savedList
    }
    return (
        <div className="cards-container">
            {returnData && returnData.map((item, ind) => {
                return <Card key={`${item.name}-${ind}`} {...item} addToSavedList={addToSavedList} savedList={savedList} setSavedList={setSavedList}/>
            })}
        </div>
    )
}