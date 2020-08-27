import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axiosWithAuth from './utils/axiosWithAuth';

export default function SearchForm() {


    const onSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .get('/api/strains')
            .then((res) => (res.data))
            .catch((err) => console.log(err))


    }
    
    return (
        <>
        <Form onSubmit={onSubmit}>

          <FormGroup>
            <Label for="StrainName" className="formtext">Strain Name: </Label>
            <Input 
                type="text" 
                name="text" 
                id="Text" 
                placeholder="Enter all or part of a strain name..."
            />
          </FormGroup>

         
          <FormGroup>
            <Label for="exampleSelect" className="formtext">Ailment: </Label>
            <Input type="select" name="select" id="exampleSelect">
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
              <Input type="checkbox" />{' '}
              Sativa
            </Label>
            <br />
            <Label check>
              <Input type="checkbox" />{' '}
              Hybrid
            </Label>
            <br />
            <Label check>
              <Input type="checkbox" />{' '}
              Indica
            </Label>
          </FormGroup>
               
          <FormGroup>
            <Label for="exampleSelect" className="formtext"></Label>
            <Input type="select" name="select" id="exampleSelect">
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
        </>
      );

}