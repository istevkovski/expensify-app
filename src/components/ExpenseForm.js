import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import React from 'react';
import moment from 'moment';

// const date = new Date()
const now = moment();

export default class ExpenseForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onDescriptionChange = (data) => {
    const description = data.target.value;
    this.setState(() => ({ description}));
  };
  onNoteChange = (data) => {
    const note = data.target.value;
    this.setState(() => ({ note }))
  };
  onAmountChange = (data) => {
    const amount = data.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if(createdAt){
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ( { focused } ) => {
    this.setState(() => ({ calendarFocused: focused }))
  };
  onSubmit = (data) => {
    data.preventDefault();

    if(!this.state.description || !this.state.amount){
      this.setState(() => ( { error: 'Please provide a description and amount' } ));
    }
    else{
      this.setState(() => ( { error: '' } ));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render(){
    return(
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            displayFormat="D/MMM/YYYY"
          />
          <textarea
            value={this.state.note}
            placeholder="Add a note for your expense (optional)"
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}