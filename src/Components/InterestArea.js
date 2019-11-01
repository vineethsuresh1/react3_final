import React from 'react';
import './App.css';
import Interest from './Interest';

class InterestArea extends React.Component {
    getInterests() {
        let interests = [];
        let tempinterests = [];
        for (const course of Object.entries(this.props.courses)){
            for(const keyword of course[1].keywords)
            {
                if(tempinterests.includes(keyword) === false)
                {
                    tempinterests.push(keyword);
                }
            }
            }
    for(var i = 0; i<tempinterests.length; i++)
    {
        interests.push(<Interest interest = {tempinterests[i]}/>)
    }
    return interests;
}

    render() {
        return (
            <div style={{margin: '5px'}}>
                {this.getInterests()}
            </div>
        )
    }
}
export default InterestArea;