import React from 'react';
import {Card as StrapCard, Badge, CardHeader, CardBody,
    ListGroup, CardDeck, CardFooter, CardImg, Button} from 'reactstrap';
import { useParams, useHistory } from "react-router-dom";
import axiosWithAuth from '../utils/axiosWithAuth';




export default function Card({name, type, ailment, flavors, positive_effects}){

let ailments = ailment.split(', ');
let flavorArray = flavors.split(', ')
let positiveArray = positive_effects.split(', ')
const history = useHistory(); 
const params = useParams(); 


    function randomImage(){
        let ranNum = Math.floor(Math.random() * 10);

        const imgName = ['cw-1', 'am-1', 'aw-1', 'el-1', 'jc-1',
                         'js-1', 'ms-1', 'n-1', 'n-2', 'rl-1']

        return `http://localhost:3000/assets/${imgName[ranNum]}.jpg`
    }


    const deleteMovie = (e) => {
        e.preventDefault();
        axiosWithAuth()   
          .delete(`/api/strain/${name}`)
          .then((res) =>{
            history.push(`/dashboard`);
          })
          .catch((err) => console.log(err));
      }

    console.log(randomImage());

    return (

        <StrapCard className="card">
            <CardHeader tag="h3" className="card-name">{name}</CardHeader>
            <CardImg src={randomImage()} alt='' width="20%" />
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
        </StrapCard>

    )
}
