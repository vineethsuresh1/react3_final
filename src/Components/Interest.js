import React from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';

class Interest extends React.Component {
    render() {
        let count = 0;
        return(
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="radio" label={this.props.interest} />
            </Form.Group>
        )
    }
}
export default Interest;