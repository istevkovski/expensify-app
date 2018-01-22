import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const getExpensesTotal = (expenses) => {
  return expenses.map((expense) => {
    return expense.amount;
  }).reduce(reducer);
};

test('should return 0 if no expenses', () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
  const res = selectExpensesTotal([expenses[0]]);
  expect(res).toEqual(expenses[0].amount);
});

test('should correctly add up multiple expenses', () => {
  const res = selectExpensesTotal(expenses);
  expect(res).toEqual(getExpensesTotal(expenses));
});