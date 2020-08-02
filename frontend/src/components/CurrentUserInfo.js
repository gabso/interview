
import React from 'react';
import { connect } from 'react-redux';
import { startChangeUserStatus } from '../actions/users';

class CurrentUserInfo extends React.Component {

    StatusToDesc ={
        Working: 'Working',
        OnVacation: 'On Vacation',
        LunchTime: 'Lunch Time',
        BusinessTrip: 'Business Trip'
    }
    
    constructor() {
        super();
        this.state = {
            status: ''
        }
    }
    render() {

        if (!this.props.currUser || !this.props.currUser.name || !this.props.currUser.status){
            return <React.Fragment/>;
        }

        return(
            <div className="user-info">
            <p className="greetings">
               Hello Mr. {this.props.currUser.name }, Your current status is: {this.StatusToDesc[this.props.currUser.status]}
            </p>
            <p>Update my current status:</p>
            <select className="select-status"
            value={this.props.currUser.status}
            onChange={this.onStatusChange}
          >
            <option value="Working">Working</option>
            <option value="OnVacation">On Vacation</option>
            <option value="LunchTime">Lunch Time</option>
            <option value="BusinessTrip">Business Trip</option>
          </select>
          </div>
        )

    }

    onStatusChange = (e) => {
        this.props.ChangeUserStatus({id: this.props.currUser.id, status: e.target.value});
  
    };
}

const mapStateToProps = (state, props) => ({
    currUser: state.users.find( user => user.id === state.auth.user.id)
});
  
  const mapDispatchToProps = (dispatch, props) => ({
    ChangeUserStatus: (data) => dispatch(startChangeUserStatus(data))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(CurrentUserInfo);