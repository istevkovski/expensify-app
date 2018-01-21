import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set defalt state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not fount', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '6c12-uId-0073',
      description: 'Opel Astra',
      note: 'New car bought, Opel Astra',
      amount: 600000,
      createdAt: 0
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test('should edit an expense', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toEqual(amount);
});

test('shoud not edit expense if id not found', () => {
  const amount = 12000
  const action = {
    type: 'EDIT_EXPENSE',
    id: '6cfE-uId-0010',
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});