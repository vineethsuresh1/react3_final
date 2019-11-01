import React from 'react';
import './App.css';

class Sections extends React.Component{
    constructor(props) {
        super(props);
        this.getSections = this.getSections.bind(this);
    } 
    
    getSections(subsection) {
        let arr = []
        if (subsection === null) {
            return arr;
        }
        for(const section of Object.entries(subsection)) { 

            arr.push(section)
        }
        return arr;
    }
    render() {
        
        return(
            <div>
                {this.getSections(this.props.subsection)}
            </div>           
        )
    }
     
}
export default Sections;