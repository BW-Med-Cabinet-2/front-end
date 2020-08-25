import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default function SearchForm() {


    const onSubmit = (e) => {
        e.preventDefault();



    }
    
    return (
        <>
        
        <Form onSubmit={onSubmit}>

          <FormGroup>
            <Label for="exampleText">Strain Name: </Label>
            <Input type="textarea" name="text" id="exampleText" />
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
                <br /> 
          <FormGroup>
            <Label for="exampleSelect">Ailment</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Ailment 1</option>
              <option>Ailment 2</option>
              <option>Ailment 3</option>
              <option>Ailment 4</option>
              <option>Ailment 5</option>
            </Input>
          </FormGroup>

        
          <Button>Submit</Button>
        </Form>
        </>
      );
    
    

    



    // search button 
    //     renders list below

    // clicking each card triggers modal with all strain info




}