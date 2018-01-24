import { login, logout } from '../../actions/auth';

test('should generate login action object', () => {
  const uid = '6c12-uid-007X';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should generate logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});