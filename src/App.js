import React from 'react';
import './Components/App.css';
import Sidebar from './Components/Sidebar';
import CourseArea from './Components/CourseArea';
import PrevCourseArea from './Components/PrevCourseArea'
import {Tabs, Tab} from 'react-bootstrap';
import InterestArea from './Components/InterestArea';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allCourses: {},
      prevCourses: {},
      filteredCourses: {},
      subjects: [],
      prevSubjects: [],
    };
  }

  componentDidMount() {
    fetch('https://mysqlcs639.cs.wisc.edu:5000/classes').then(
      res => res.json()
    ).then(data => this.setState({allCourses: data, filteredCourses: data, subjects: this.getSubjects(data)}));

    fetch('https://mysqlcs639.cs.wisc.edu/students/5022025924/classes/completed/').then(
      res => res.json()
    ).then(prevData => this.setState({prevCourses: prevData}));
  }

  getSubjects(data) {
    let subjects = [];
    subjects.push("All");
    for(const course of Object.values(data)) {
      if(subjects.indexOf(course.subject) === -1)
        subjects.push(course.subject);
    }
    return subjects;
  }

  setCourses(courses) {
    this.setState({filteredCourses: courses})
  }
  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />

      <Tabs defaultActiveKey="Sidebar" id="uncontrolled-tab-example">
        <Tab eventKey="Sidebar" title="Courses"> 
            <Sidebar setCourses={(courses) => this.setCourses(courses)} courses={this.state.allCourses} subjects={this.state.subjects}/>
              <div style={{marginLeft: '20vw'}}>
                <CourseArea data={this.state.filteredCourses} setCartCourses={(data) => this.setCartCourses(data)}/>
              </div>
        </Tab>
        <Tab eventKey="Rate Courses" title="Rate Courses">
           <div>
            <PrevCourseArea courses={this.state.allCourses} prevData={this.state.prevCourses} />
            </div>
        </Tab>
        <Tab eventKey="Interest Areas" title="Interest Areas">
           <div>
             <InterestArea courses={this.state.allCourses} prevData={this.state.prevCourses} />
            </div>
        </Tab>
      </Tabs>
        
      </>
    )
  }
}

export default App;
