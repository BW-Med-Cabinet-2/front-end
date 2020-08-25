import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Button, Form} from 'reactstrap';
import Radio from './Radio';

let questionsArray = [
    {
        name: "floral",
        question: "I can't get enough of the smell of flowers."
    },
    {
        name: "citrus",
        question: "I enjoy the flavor and aroma of citrus fruits."
    },
    {
        name: "gasoline",
        question: "I find the smell of the gas station oddly appealing."
    },
    {
        name: "anxiety",
        question: "I suffer from bouts of anxiety frequently."
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
    floral: 0,
    citrus: 0,
    gasoline: 0,
    anxiety: 0,
    pain: 0,
    insomnia: 0,
    energetic: 0,
    euphoric: 0,
    relaxed: 0
}


export default function Quiz(props) {
    
    let [formValues, setFormValues] = useState(initialFormValues);
    let [quizObject, setQuizObject] = useState(initialFormValues);

    function onChange (event) {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value})
    }

    function onSubmit (event){
        event.preventDefault();
        submitQuizObj(quizObject)
    }

    function submitQuizObj (quizObj){
        axios.post('https:/reqres.in/api/users', quizObj)
            .then(response => {
                let testText = JSON.stringify(response.data);
                let test = document.createElement('div');
                document.querySelector('.test').appendChild(test)
                    test.textContent = testText;
            })
    }

    useEffect(() => {
        setQuizObject(formValues)
    }, [formValues])

    return (
        <Form onSubmit={onSubmit} className='test'>
            {questionsArray.map((item, ind) => { 
                return (
                    
                    <label
                    key={`${item.name}-${ind}`}
                    htmlFor={item.name}> {item.question}
                        <br/>
                        <Radio onChange={onChange} value={1} item={item}/>
                        <Radio onChange={onChange} value={2} item={item}/>
                        <Radio onChange={onChange} value={3} item={item}/>
                        <Radio onChange={onChange} value={4} item={item}/>
                        <Radio onChange={onChange} value={5} item={item}/>
                        
                    </label>
                    
                )
                })
            }
            <Button color="primary">Submit</Button>
        </Form>
    )
}