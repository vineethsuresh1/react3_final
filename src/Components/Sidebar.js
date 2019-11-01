<<<<<<< HEAD
import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import SearchAndFilter from './SearchAndFilter';
import TabArea from  './TabArea';
import {Button,Modal} from 'react-bootstrap';


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.searchAndFilter = new SearchAndFilter();
    this.subject = React.createRef();
    this.minimumCredits = React.createRef();
    this.maximumCredits = React.createRef();
    this.search = React.createRef();
    this.state = { 
      keywordsToSearch : [],
      toggle : false
    }
  }

  /* method used to handle searching when enter is clicked */
  searchKeywords(e) {
    if (e.key === 'Enter') {  // checks if the value being searched is already a tag or empty 
      if (this.state.keywordsToSearch.indexOf(e.target.value) > -1 || e.target.value === "") {
        this.search.current.value = "";
      } else {  // otherwise add the new tag into tag area
          let newElement = this.state.keywordsToSearch.concat(e.target.value);
          this.setState(
            { keywordsToSearch: newElement }
          );

        }
        // clear the search bar
        this.search.current.value = "";
        this.setCourses();      
    }
  }

  setCourses() {
    this.props.setCourses(this.searchAndFilter.searchAndFilter(this.props.courses, this.state.keywordsToSearch, this.subject.current.value, this.minimumCredits.current.value, this.maximumCredits.current.value));
  }

  handleCreditsKeyDown(e) {
    if(['0','1','2','3','4','5','6','7','8','9','Backspace','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Tab'].indexOf(e.key) === -1)
      e.preventDefault();
  }

  getSubjectOptions() {
    let subjectOptions = [];

    for(const subject of this.props.subjects) {
      subjectOptions.push(<option key={subject}>{subject}</option>);
    }

    return subjectOptions;
  }

  /* method used to update tags immediately after being deleted */
  updateTabs(newTabs) {
    this.setState({keywordsToSearch: newTabs})
    this.setCourses()
  }

  /*toggleButton() {
    this.state.toggle = !this.state.toggle
    if ( this.state.toggle === true) {
      alert("Searching with union")
    } else {
      alert("Searching with intersection")
    }
  }*/

  render() {
    return (
      <>
        <Card style={{width: 'calc(20vw - 5px)', marginLeft: '5px', height: 'calc(100vh - 10px)', position: 'fixed'}}>
          <Card.Body>
            <Card.Title>Search and Filter</Card.Title>
            <Form>
              <Form.Group controlId="formKeywords" onKeyDown={(e) => this.searchKeywords(e)} style={{width: '100%'}}>
                <Form.Label>Search</Form.Label>
                <Form.Control type="text" placeholder="Search" autoComplete="off" ref={this.search}/>
              </Form.Group>
              <div>
                <TabArea tabs={this.state.keywordsToSearch} updateTabs={() => this.updateTabs(this.state.keywordsToSearch)}></TabArea>
              </div>
              <Form.Group controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control as="select" ref={this.subject} onClick={() => this.setCourses()}>
                  {this.getSubjectOptions()}
                </Form.Control>
              </Form.Group>

              <div style={{display: 'flex', flexDirection: 'row'}}>
                <Form.Group controlId="minimumCredits" onChange={() => this.setCourses()} onKeyDown={(e) => this.handleCreditsKeyDown(e)}>
                  <Form.Label>Credits</Form.Label>
                  <Form.Control type="text" placeholder="minimum" autoComplete="off" ref={this.minimumCredits}/>
                </Form.Group>
                <div style={{marginLeft: '5px', marginRight: '5px', marginTop: '38px'}}>to</div>
                <Form.Group controlId="maximumCredits" style={{marginTop: '32px'}} onChange={() => this.setCourses()} onKeyDown={(e) => this.handleCreditsKeyDown(e)}>
                  <Form.Control type="text" placeholder="maximum" autoComplete="off" ref={this.maximumCredits}/>
                </Form.Group>
              </div>
              
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              Previous Courses
              </button>
              <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    ...
                  </div>
              </div>  
        </div>    
              <Button align={"right"} style={{marginTop: "5px"}}>See Recommended Courses</Button>
            </Form>
          
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default Sidebar;
=======
import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import SearchAndFilter from './SearchAndFilter';
import TabArea from  './TabArea';
import {Button,Modal} from 'react-bootstrap';


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.searchAndFilter = new SearchAndFilter();
    this.subject = React.createRef();
    this.minimumCredits = React.createRef();
    this.maximumCredits = React.createRef();
    this.search = React.createRef();
    this.state = { 
      keywordsToSearch : [],
      toggle : false
    }
  }

  /* method used to handle searching when enter is clicked */
  searchKeywords(e) {
    if (e.key === 'Enter') {  // checks if the value being searched is already a tag or empty 
      if (this.state.keywordsToSearch.indexOf(e.target.value) > -1 || e.target.value === "") {
        this.search.current.value = "";
      } else {  // otherwise add the new tag into tag area
          let newElement = this.state.keywordsToSearch.concat(e.target.value);
          this.setState(
            { keywordsToSearch: newElement }
          );

        }
        // clear the search bar
        this.search.current.value = "";
        this.setCourses();      
    }
  }

  setCourses() {
    this.props.setCourses(this.searchAndFilter.searchAndFilter(this.props.courses, this.state.keywordsToSearch, this.subject.current.value, this.minimumCredits.current.value, this.maximumCredits.current.value));
  }

  handleCreditsKeyDown(e) {
    if(['0','1','2','3','4','5','6','7','8','9','Backspace','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Tab'].indexOf(e.key) === -1)
      e.preventDefault();
  }

  getSubjectOptions() {
    let subjectOptions = [];

    for(const subject of this.props.subjects) {
      subjectOptions.push(<option key={subject}>{subject}</option>);
    }

    return subjectOptions;
  }

  /* method used to update tags immediately after being deleted */
  updateTabs(newTabs) {
    this.setState({keywordsToSearch: newTabs})
    this.setCourses()
  }

  /*toggleButton() {
    this.state.toggle = !this.state.toggle
    if ( this.state.toggle === true) {
      alert("Searching with union")
    } else {
      alert("Searching with intersection")
    }
  }*/

  render() {
    return (
      <>
        <Card style={{width: 'calc(20vw - 5px)', marginLeft: '5px', height: 'calc(100vh - 10px)', position: 'fixed'}}>
          <Card.Body>
            <Card.Title>Search and Filter</Card.Title>
            <Form>
              <Form.Group controlId="formKeywords" onKeyDown={(e) => this.searchKeywords(e)} style={{width: '100%'}}>
                <Form.Label>Search</Form.Label>
                <Form.Control type="text" placeholder="Search" autoComplete="off" ref={this.search}/>
              </Form.Group>
              <div>
                <TabArea tabs={this.state.keywordsToSearch} updateTabs={() => this.updateTabs(this.state.keywordsToSearch)}></TabArea>
              </div>
              <Form.Group controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control as="select" ref={this.subject} onClick={() => this.setCourses()}>
                  {this.getSubjectOptions()}
                </Form.Control>
              </Form.Group>

              <div style={{display: 'flex', flexDirection: 'row'}}>
                <Form.Group controlId="minimumCredits" onChange={() => this.setCourses()} onKeyDown={(e) => this.handleCreditsKeyDown(e)}>
                  <Form.Label>Credits</Form.Label>
                  <Form.Control type="text" placeholder="minimum" autoComplete="off" ref={this.minimumCredits}/>
                </Form.Group>
                <div style={{marginLeft: '5px', marginRight: '5px', marginTop: '38px'}}>to</div>
                <Form.Group controlId="maximumCredits" style={{marginTop: '32px'}} onChange={() => this.setCourses()} onKeyDown={(e) => this.handleCreditsKeyDown(e)}>
                  <Form.Control type="text" placeholder="maximum" autoComplete="off" ref={this.maximumCredits}/>
                </Form.Group>
              </div>
              <Button align={"right"} style={{marginTop: "5px"}}>See Recommended Courses</Button>
            </Form>
          
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default Sidebar;
>>>>>>> My first commit
