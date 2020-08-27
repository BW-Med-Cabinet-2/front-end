import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import { fetchStrains } from '../actions'; 
import Cards from './Cards/Cards'; 
import { connect } from 'react-redux'; 

function SearchForm(props) {

    const initialFormValues = {
        name: '',
        ailment: '',
        sativa: '',
        hybrid: '',
        indica: '',
        results: '',
    };

    const weedData = '';

    const [form, setForm] = useState(initialFormValues);

    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        var dataArray = Object.keys(form).map(val => form[val]);
        var stringyweed = dataArray.join(' ').toLowerCase(); 
        props.fetchStrains(stringyweed); 

    }

    return (
        <>
            {weedData.length > 0 ? <Cards weed={weedData}/> :
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

                    <FormGroup check>
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
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleSelect" className="formtext"></Label>
                        <Input type="select" name="results" id="exampleSelect" onChange={changeHandler}>
                            <option>Number of Results</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                            <option>25</option>
                            <option>30</option>
                        </Input>
                    </FormGroup>

                    <Button block className="searchbutton" color="success">SEARCH</Button>
                </Form>
            }

        </>
    );

}



export default connect(null, { fetchStrains })(SearchForm); 