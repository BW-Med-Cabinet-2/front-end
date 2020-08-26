import React from 'react';
import {Card as StrapCard, Badge, CardHeader, CardBody,
    ListGroup, CardImg} from 'reactstrap';


export default function Card({name, type, ailments}){

    function randomImage(){
        let ranNum = Math.floor(Math.random() * 10);

        const imgName = ['cw-1', 'am-1', 'aw-1', 'el-1', 'jc-1',
                         'js-1', 'ms-1', 'n-1', 'n-2', 'rl-1']

        return `http://localhost:3000/assets/${imgName[ranNum]}.jpg`
    }

    console.log(randomImage());

    return (
        <StrapCard className="card">
            <CardHeader tag="h3" className="card-name">{name}</CardHeader>
            <CardImg src={randomImage()} alt='' width="20%" />
            <CardBody className="card-type">
                <ListGroup horizontal className="card-ailments">
                    {ailments.map((item, ind) => {
                        return <Badge color='success' pill key={`${name}-${item}-${ind}`}>{item}</Badge>
                    })}
                </ListGroup>
            
            <Badge color='warning'>{type}</Badge>
            </CardBody>
        </StrapCard>
    )
}