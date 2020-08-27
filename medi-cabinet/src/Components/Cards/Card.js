import React from 'react';
import {Card as StrapCard, Badge, CardHeader, CardBody,
    ListGroup, CardDeck, CardFooter, Button} from 'reactstrap';
import { useParams, useHistory } from "react-router-dom";
import axiosWithAuth from '../utils/axiosWithAuth';



export default function Card({name, type, ailments}){
    const history = useHistory(); 
    const params = useParams(); 


    function randomImage(){
        let ranNum = Math.floor(Math.random() * 10);

        const imgName = ['cw-1', 'am-1', 'aw-1', 'el-1', 'jc-1',
                         'js-1', 'ms-1', 'n-1', 'n-2', 'rl-1']

        return `http://localhost:3000/assets/${imgName[ranNum]}.jpg`
    }

    


    const deleteCard = (e) => {
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
                <img className="cardimg" src={randomImage()} alt='' width="20%" />
                <CardBody className="card-type">
                    <ListGroup horizontal className="card-ailments">
                        {ailments.map((item, ind) => {
                            return <Badge color='success' pill key={`${name}-${item}-${ind}`}>{item}</Badge>
                        })}
                    </ListGroup>
                <Badge color='warning'>{type}</Badge>
                </CardBody>
                <CardFooter>
                    <Button color="danger" onClick={deleteCard}>Delete</Button>
                </CardFooter>
            </StrapCard>
        
    )
}