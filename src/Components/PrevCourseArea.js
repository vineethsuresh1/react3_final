import React from 'react';
import './App.css';
import PrevCourse from './PrevCourse';

class PrevCourseArea extends React.Component {
    getPrevCourses() {
        let prevCourses = [];
        for (const course of Object.entries(this.props.courses)) {
            for (const prevCourse of Object.entries(this.props.prevData.data)) {
                if (prevCourse[1] === course[0])
                    prevCourses.push (
                        <PrevCourse key={course[0]} prevData={course[1]}/>
                    )
            }
        }
        return prevCourses;
    }

    render() {
        return (
            <div style={{margin: '5px'}}>
                {this.getPrevCourses()}
            </div>
        )
    }
}

export default PrevCourseArea;