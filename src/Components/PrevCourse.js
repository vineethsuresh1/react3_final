import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import { Button, ButtonToolbar} from 'react-bootstrap';

class PrevCourse extends React.Component {
    render() {
        return(
            <Card style={{width: '75%', marginTop: '5px', marginBottom: '5px'}}>
                <Card.Body>
                    <Card.Title>{this.props.prevData.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.prevData.number} - {this.getCredits()}</Card.Subtitle>
                    <Card.Text>
                        {this.props.prevData.data}
                            <Button onClick= "addKeyWord()">Like</Button>
                            <Button variant="outline-danger" >Dislike</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
    addKeyWord(){
        let keywords = [];
        keywords.push(this.props.prevData.keywords);
        console.log(keywords);
    }
    
    getCredits() {
        if(this.props.prevData.credits === 1)
          return '1 credit';
        else
          return this.props.prevData.credits + ' credits';
      }
}

export default PrevCourse;