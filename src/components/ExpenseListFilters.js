import 'react-dates/initialize';
import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';
import { sortByDate, sortByAmount, setTextFilter, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component{
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({calendarFocused}));
  };
  onTextChange = (data) => {
    this.props.setTextFilter(data.target.value);
  };
  onSortChange = (data) => {
    if(data.target.value === 'date'){
      this.props.sortByDate();
    }
    else if(data.target.value === 'amount'){
      this.props.sortByAmount();
    }
  }
  render() {
    return (
      <div className='content-container'>
        <div className='input-group'>
          <div className='input-group__item'>
            <input
              type='text'
              className='text-input'
              placeholder='Search expenses'
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>

          <div className='input-group__item'>
            <select
              className='select'
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value='date'>Date</option>
              <option value='amount'>Amount</option>
            </select>
          </div>

          <div className='input-group__item'>
            <DateRangePicker
              startDateId="startDate"
              endDateId="endDate"
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              monthFormat='DD/MMM/YYYY'
              displayFormat='DD/MMM/YYYY'
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
    );
  }
};


const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);