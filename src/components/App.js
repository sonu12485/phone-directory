import React, { Component } from 'react';

import { Button, Table } from "reactstrap";

import { connect } from "react-redux";

import { deleteContact } from "../actions";

import { FaTrash } from 'react-icons/fa';

class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      temp: true
    }
  }

  renderTable = () => {
    return this.props.numbers.map( (number, index) => {
      return (
        <tbody>
          <tr>
            <th scope="row">{Number(index) + 1}</th>
            <td>{number.name}</td>
            <td>{number.number}</td>
            <td>
              <FaTrash color="#D40022" size="20px"
                style={{ cursor: "pointer" }} 
                onClick = { () => {
                  this.props.deleteContact(index);
                  this.setState({
                    temp: true
                  });
                }}
              />
            </td>
          </tr>
        </tbody>
      );
    })
  }

  render() {
    return (
      <div>
        <center style={{
          marginBottom: "40px",
          padding: "20px",
          backgroundColor: "#eee"
        }} >
          <h1>Phone Directory</h1>
        </center>
        <div>
          <center style={{
            margin: "20px",
            marginBottom: "50px"
          }} >
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            {this.renderTable()}
          </Table>
          </center>
          <center>
          <Button color="success" 
            onClick={ () => {
              this.props.history.push("/add");
            }}
          >ADD</Button>
          </center>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numbers: state.numbers
  }
}

export default connect(mapStateToProps, {
  deleteContact
})(App);
