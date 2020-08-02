import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setStatusFilter } from '../actions/filters';

export class UserListFilters extends React.Component {
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onStatusChange = (e) => {
      this.props.setStatusFilter(e.target.value);

  };
  render() {
    return (
      <div className="filters">
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
          placeholder="Search by name"
        />
        <select
          value={this.props.filters.status}
          onChange={this.onStatusChange}
        >
         <option value="" disabled selected>Filter by status</option>
         <option value="">All</option>
          <option value="Working">Working</option>
          <option value="OnVacation">On Vacation</option>
          <option value="LunchTime">Lunch Time</option>
          <option value="BusinessTrip">Business Trip</option>
        </select>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setStatusFilter: (status) => dispatch(setStatusFilter(status)),

});

export default connect(mapStateToProps, mapDispatchToProps)(UserListFilters);
