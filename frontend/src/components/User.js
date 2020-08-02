
import React from 'react';
export default class User extends React.Component {
    StatusToDesc ={
        Working: 'Working',
        OnVacation: 'On Vacation',
        LunchTime: 'Lunch Time',
        BusinessTrip: 'Business Trip',

    }
    render() {

        return(
            <div className="list-item" style={{color:this.props.status === 'OnVacation' ? 'red' : undefined}}>
                {this.props.name } ({this.StatusToDesc[this.props.status]})
            </div>
        )

    }
}