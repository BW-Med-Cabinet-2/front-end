import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Button, Form, ListGroup, ListGroupItem} from 'reactstrap';
import Radio from './Radio';

let questionsArray = [
    {
        name: "berry",
        question: "I enjoy fresh berries in my cereal."
    },
    {
        name: "citrus",
        question: "I enjoy the flavor and aroma of citrus fruits."
    },
    {
        name: "diesel",
        question: "I find the smell of the gas station oddly appealing."
    },
    {
        name: "depression",
        question: "I suffer from bouts of depression frequently."
    },
    {
        name: "pain",
        question: "I frequently experience physical pain."
    },
    {
        name: "insomnia",
        question: "It can be extremely difficult for me to fall asleep at night."
    },
    {
        name: "energetic",
        question: "I can't function without a cup of coffee in the morning."
    },
    {
        name: "euphoric",
        question: "I love to go out and have a good time."
    },
    {
        name: "relaxed",
        question: "Staying inside and relaxing on the couch is my life."
    },
]

const initialFormValues = {
    berry: 0,
    citrus: 0,
    diesel: 0,
    depression: 0,
    pain: 0,
    insomnia: 0,
    energetic: 0,
    euphoric: 0,
    relaxed: 0
}


export default function Quiz(props) {
    
    let setQuizResults = props.setQuizResults;
    console.log(setQuizResults);

    let [formValues, setFormValues] = useState(initialFormValues);
    let [quizObject, setQuizObject] = useState(initialFormValues);
    let [postJSON, setPostJSON] = useState(JSON.stringify({symptoms: 'insomnia', results: '5'}));

    function onChange (event) {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value})
    }

    function onSubmit (event){
        event.preventDefault();
        submitQuizObj(postJSON)
    }

    function submitQuizObj (quizObj){
        console.log(quizObj);
        axios.post('https://cors-anywhere.herokuapp.com/hold-your-turnips.herokuapp.com/predict', quizObj)
            .then(response => {
                console.log(response.data);
                setQuizResults(response.data)
            })
    }

    function orderResults (quizObj){
        if (quizObj){
            let newArray = Object.entries(quizObj).sort((a, b) => a[1] - b[1])
                .filter(item => item[1] > 2).map(item => item[0]).reverse();
            
            return setPostJSON({symptoms: newArray.join(', '), results: 5})      
    }
    }

    


    useEffect(() => {
        setQuizObject(formValues)
    }, [formValues])

    useEffect(() => {
        orderResults(quizObject)
    }, [quizObject])




    return (
        <Form onSubmit={onSubmit} className='test'>

            {questionsArray.map((item, ind) => { 
                return (
                    <label
                    key={`${item.name}-${ind}`}
                    htmlFor={item.name}> {item.question}
                        <br/>
                    <ListGroup horizontal>
                        <ListGroupItem color='secondary'>
                            <Radio onChange={onChange} value={1} item={item}/>
                        </ListGroupItem>
                        <ListGroupItem color='secondary'>
                            <Radio onChange={onChange} value={2} item={item}/>
                        </ListGroupItem>
                        <ListGroupItem color='secondary'>
                            <Radio onChange={onChange} value={3} item={item}/>
                        </ListGroupItem>
                        <ListGroupItem color='secondary'>
                            <Radio onChange={onChange} value={4} item={item}/>
                        </ListGroupItem>
                        <ListGroupItem color='secondary'>
                            <Radio onChange={onChange} value={5} item={item}/>
                        </ListGroupItem>                    
                    </ListGroup>
                    </label>
                    
                )
                })
            }
            <div>
            <Button color="primary">Submit</Button>
            </div>
        </Form>
    )
}