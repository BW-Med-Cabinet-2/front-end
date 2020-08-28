import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { fetchStrains } from '../actions';
import Cards from './Cards/Cards';
import { connect } from 'react-redux';
import axios from 'axios';

function SearchForm(props) {

    const initialFormValues = {
        'name': '',
        'ailment': '',
        // 'sativa': '',
        // 'hybrid': '',
        // 'indica': '',
        // 'results': '',
    };

    const weedData = '';

    let setSearchResults = props.setSearchResults;

    const [form, setForm] = useState(initialFormValues);

    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function objectHandler(quizObj) {
        axios.post('https://cors-anywhere.herokuapp.com/hold-your-turnips.herokuapp.com/predict', quizObj)
            .then(response => {
                console.log(response.data);
                setSearchResults(response.data)
            })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let quizSymptoms = Object.values(form).join(', ');
        console.log(quizSymptoms);
        objectHandler({ symptoms: quizSymptoms, results: 10 })
        props.fetchStrains(form);

    }

    return (
        <>
            {weedData.length > 0 ? <Cards weed={weedData} /> :
                <Form onSubmit={onSubmit}>

                    <FormGroup>
                        <Label for="StrainName" className="formtext">Strain Name: </Label>
                        <Input
                            type="text"
                            name="name"
                            id="Text"
                            placeholder="Enter all or part of a strain name..."
                            onChange={changeHandler}
                        />
                    </FormGroup>


                    <FormGroup>
                        <Label for="exampleSelect" className="formtext">Ailment: </Label>
                        <Input
                            type="select"
                            name="ailment"
                            id="exampleSelect"
                            onChange={changeHandler}
                        >
                            <option>What ails you?</option>
                            <option>Lack of Appetite</option>
                            <option>Muscle Cramps</option>
                            <option>Depression</option>
                            <option>Fatigue</option>
                            <option>Headache</option>
                            <option>Inflammation</option>
                            <option>Insomnia</option>
                            <option>Nausea</option>
                            <option>Pain</option>
                            <option>Eye Pressure</option>
                            <option>Seizures</option>
                            <option>Spasms</option>
                            <option>Stress</option>
                        </Input>
                    </FormGroup>

                    {/* <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="sativa" value="sativa" onChange={changeHandler} />{' '}
                        Sativa
                        </Label>
                        <br />
                        <Label check>
                            <Input type="checkbox" name="hybrid" value="hybrid" onChange={changeHandler} />{' '}
                        Hybrid
                        </Label>
                        <br />
                        <Label check>
                            <Input type="checkbox" name="indica" value="indica" onChange={changeHandler} />{' '}
                        Indica
                        </Label>
                    </FormGroup> */}
                    <br />

                    {/* <FormGroup>
                        <Label for="exampleSelect" className="formtext"></Label>
                        <Input type="select" name="results" id="exampleSelect" onChange={changeHandler}>
                            <option>Number of Results</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                            <option>25</option>
                            <option>30</option>
                        </Input>
                    </FormGroup> */}

                    <Button block className="searchbutton" color="success">SEARCH</Button>
                </Form>
            }

        </>
    );

}



export default connect(null, { fetchStrains })(SearchForm); 