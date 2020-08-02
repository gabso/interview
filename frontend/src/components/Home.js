import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';
import CurrentUserInfo from './CurrentUserInfo';
import UserListFilters from './UserListFilters';
import UserSelector from '../selectors/userSelector';

class Home extends Component {

    render() {
        return (
            <div div className="content-container">
                <CurrentUserInfo {...this.props.currUser}/>

                <p>List of employees:</p>
                <UserListFilters />
                <div className="list-body">
                {
                    (!this.props.users|| this.props.users.length === 0)  ? <p className="no-users">No matching users found</p> :
                    this.props.users.map((user, index) => {
                        return <User key={index} {...user} />;
                    })
                }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: UserSelector(state.users,state.filters),
        currUser: state.auth.user
    };
};


export default connect(mapStateToProps)(Home);
