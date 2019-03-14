import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { addContact } from "../actions";

import { connect } from "react-redux";

class App extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            name: '',
            number: ''
        }
    }

  render() {
    return (
      <div>
        <div style={{
          marginBottom: "40px",
          padding: "20px",
          backgroundColor: "#eee",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }} >
            <div>
                <h1>Add Contact</h1>
            </div>
            <div>
            <Button color="primary" 
                onClick={ () => {
                    this.props.history.push("/");
                }}
            >BACK</Button>
            </div>
        </div>
        <div style={{
            paddingLeft:"10%",
            paddingRight: "10%"
        }} >
            <Form>
                <FormGroup>
                <Label>Name:</Label>
                <Input type="text" name="name" placeholder="Enter Name" 
                    value={this.state.name}
                    onChange={ (e) => {
                        this.setState({
                            name: e.target.value
                        })
                    }}
                />
                </FormGroup>
                <FormGroup>
                <Label>Phone:</Label>
                <Input type="number" name="number" placeholder="Enter Phone Number" 
                    value={this.state.number}
                    onChange={ (e) => {
                        this.setState({
                            number: e.target.value
                        })
                    }}/>
                </FormGroup>
                <Button color="success" 
                    onClick = {() => {
                        if(this.state.number.toString().length !== 10)
                        {
                            alert("Please enter a valid Phone number");
                        }
                        else
                        {
                            this.props.addContact(
                                this.state.name,
                                this.state.number
                            );
                            this.setState({
                                name: '',
                                number: ''
                            });
                        }
                    }}
                >ADD</Button>
            </Form>
        </div>
        <div style={{
            marginTop: "30px",
            paddingLeft:"10%"
        }} >
            <h2>Subscriber to be added : </h2>
            Name - {this.state.name}
            <br />
            Phone - {this.state.number}
        </div>
        <div style={{
            padding:"30px"
        }} >
        </div>
      </div>
    );
  }
}

export default connect(null, {
    addContact
})(App);
