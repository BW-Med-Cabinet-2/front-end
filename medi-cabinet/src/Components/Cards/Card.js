import React, { useState } from 'react';
import {
    Card as StrapCard, Badge, CardHeader, CardBody,
    CardFooter, CardImg, Button, Container
} from 'reactstrap';
import { useHistory } from "react-router-dom";
import axiosWithAuth from '../utils/axiosWithAuth';




export default function Card(props) {

    const { addToSavedList, savedList, setSavedList, ...strainProps } = props
    const { name, ailment, flavors, positive_effects, type } = strainProps

    let ailments = ailment.split(', ');
    let flavorArray = flavors.split(', ')
    let positiveArray = positive_effects.split(', ')
    const history = useHistory();

    function randomImage() {
        let ranNum = Math.floor(Math.random() * 10);

        const imgName = ['cw-1', 'am-1', 'aw-1', 'el-1', 'jc-1',
            'js-1', 'ms-1', 'n-1', 'n-2', 'rl-1']

        return `http://localhost:3000/assets/${imgName[ranNum]}.jpg`
    }


    const saveCard = (e) => {
        addToSavedList(strainProps);
        console.log(strainProps); 
    }

    const deleteCard = (e) => {
        setSavedList(savedList.filter((item) => {
            console.log(item, 'item');
            console.log(strainProps, 'strainProps');
            return item.name !== strainProps.name
        }))
        console.log(savedList, 'Deleted Card'); 
    }

    console.log(randomImage());

    return (


        <StrapCard className="card">
            <CardHeader tag="h3" className="card-name">{name}</CardHeader>
            <img className="cardimg" src={randomImage()} alt='' />
            <CardBody className="card-type">
                <h4 className="ailments">Ailments</h4>
                {ailments.map((item, ind) => {
                    return <Badge color='success' pill key={`${name}-${item}-${ind}`}>{item}</Badge>
                })}
                <h4 className="flavor-heading">Flavors</h4>
                {flavorArray && flavorArray.map((item, ind) => {
                    return <Badge color='warning' pill key={`${name}-${item}-${ind}`}>{item}</Badge>
                })}
                <h4 className="positives-heading">Positive Effects</h4>
                {positiveArray && positiveArray.map((item, ind) => {
                    return <Badge color='success' pill key={`${name}-${item}-${ind}`}>{item}</Badge>
                })}
                <h4 className="type">Type</h4>
                <Badge color='warning'>{type}</Badge>
            </CardBody>
            <CardFooter>
                <Button color="success" onClick={saveCard}>Save</Button>
                <Button color="danger" onClick={deleteCard}>Delete</Button>
            </CardFooter>
        </StrapCard>

    )
}
