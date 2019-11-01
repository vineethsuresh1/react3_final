<<<<<<< HEAD
import React from 'react';
import './App.css';
import Sections from './Sections';
import Card from 'react-bootstrap/Card';
import {Accordion, Button} from 'react-bootstrap';

class Course extends React.Component {
  constructor(props) {
    super(props);

    this.getSections = this.getSections.bind(this);
    this.getSubsections = this.getSubsections.bind(this);
    //this.returnCourse = this.returnCourse.bind(this);
  }
  getSubsections(subsections) {
    let arr = [];
    for (const subs_sec of Object.entries(subsections)) {
      arr.push(
        <Accordion>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={0}>
                  {subs_sec[0]}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={0}>
                <Card.Body>
                    <ul>Instructor{subs_sec[1].instructor} </ul>
                    <ul> Location: {subs_sec[1].location} </ul>
                    <ul> Day(s) and Time(s): <Sections subsection={subs_sec[1].time }></Sections></ul>
                </Card.Body>
            </Accordion.Collapse>
          </Accordion>
           
      );
      return arr;
    }
  }
  //This method gets the sections and passes it to the render method
  getSections(data) {
    let arr = [];
    for(const pair of Object.entries(data.sections)) {
      // console.log(pair)
        arr.push(
          <React.Fragment>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={pair[0]}>
                  {pair[0]}
                </Accordion.Toggle>
            </Card.Header>
            
            <Accordion.Collapse eventKey={pair[0]}>
                <Card.Body>
                    <ul> Instructor: {pair[1].instructor} </ul>
                    <ul> Location: {pair[1].location} </ul>
                    <ul> Day(s) and Time(s): <Sections subsection={pair[1].time}> </Sections> </ul>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                   {this.getSubsections(pair[1].subsections)}
                   </Card.Body>
            </Accordion.Collapse>
            </React.Fragment>
        )
    }
    return arr;
  }
  render() {
    return (
      <Accordion  defaultActiveKey="0" width= '9%'>
        <Card bg="info" text="white" style={{width: '75%', marginTop: '5px', marginBottom: '5px'}}>
        <Card.Header>{this.props.data.number}</Card.Header>
          <Card.Body>
            <Card.Title>{this.props.data.name} - {this.getCredits()}</Card.Title>
           
            <Card.Text>{this.props.data.description}</Card.Text>
          </Card.Body>
            <p class="text-danger">{this.getSections(this.props.data)}</p>
        </Card>
      </Accordion>
    )
  }

  getCredits() {
    if(this.props.data.credits === 1)
      return '1 credit';
    else
      return this.props.data.credits + ' credits';
  }
}

export default Course;
=======
import React from 'react';
import './App.css';
import Sections from './Sections';
import Card from 'react-bootstrap/Card';
import {Accordion, Button} from 'react-bootstrap';

class Course extends React.Component {
  constructor(props) {
    super(props);

    this.getSections = this.getSections.bind(this);
    this.getSubsections = this.getSubsections.bind(this);
    //this.returnCourse = this.returnCourse.bind(this);
  }
  getSubsections(subsections) {
    let arr = [];
    for (const subs_sec of Object.entries(subsections)) {
      arr.push(
        <Accordion>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={0}>
                  {subs_sec[0]}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={0}>
                <Card.Body>
                    <ul>Instructor{subs_sec[1].instructor} </ul>
                    <ul> Location: {subs_sec[1].location} </ul>
                    <ul> Day(s) and Time(s): <Sections subsection={subs_sec[1].time }></Sections></ul>
                </Card.Body>
            </Accordion.Collapse>
          </Accordion>
           
      );
      return arr;
    }
  }
  //This method gets the sections and passes it to the render method
  getSections(data) {
    let arr = [];
    for(const pair of Object.entries(data.sections)) {
      // console.log(pair)
        arr.push(
          <React.Fragment>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={pair[0]}>
                  {pair[0]}
                </Accordion.Toggle>
            </Card.Header>
            
            <Accordion.Collapse eventKey={pair[0]}>
                <Card.Body>
                    <ul> Instructor: {pair[1].instructor} </ul>
                    <ul> Location: {pair[1].location} </ul>
                    <ul> Day(s) and Time(s): <Sections subsection={pair[1].time}> </Sections> </ul>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                   {this.getSubsections(pair[1].subsections)}
                   </Card.Body>
            </Accordion.Collapse>
            </React.Fragment>
        )
    }
    return arr;
  }
  render() {
    return (
      <Accordion  defaultActiveKey="0" width= '9%'>
        <Card bg="info" text="white" style={{width: '75%', marginTop: '5px', marginBottom: '5px'}}>
        <Card.Header>{this.props.data.number}</Card.Header>
          <Card.Body>
            <Card.Title>{this.props.data.name} - {this.getCredits()}</Card.Title>
           
            <Card.Text>{this.props.data.description}</Card.Text>
          </Card.Body>
            <p class="text-danger">{this.getSections(this.props.data)}</p>
        </Card>
      </Accordion>
    )
  }

  getCredits() {
    if(this.props.data.credits === 1)
      return '1 credit';
    else
      return this.props.data.credits + ' credits';
  }
}

export default Course;
>>>>>>> My first commit
