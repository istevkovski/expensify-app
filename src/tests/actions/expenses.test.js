jest.dontMock();
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '6c12-uId-0070' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '6c12-uId-0070'
  });
});

test('should setup edit expense action object', () => {
  
  const action = editExpense( '6c12-uId-0070', { description: 'fork' } );

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '6c12-uId-0070',
    updates: {
      description: 'fork'
    }
  });
});

test('should setup add expense action object', () => {
  const expenseData = {
    description: 'Rent',
    note: 'This was last months rent', 
    amount: 109500, 
    createdAt: 1000 
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
});

test('should setup add expense action object w/ default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});