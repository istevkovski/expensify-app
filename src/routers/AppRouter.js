import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path={process.env.PUBLIC_URL + '/'} component={LoginPage} exact={true} />
        <PrivateRoute path={process.env.PUBLIC_URL + '/dashboard'} component={ExpenseDashboardPage} exact={true} />
        <PrivateRoute path={process.env.PUBLIC_URL + '/create'} component={AddExpensePage} />
        <PrivateRoute path={process.env.PUBLIC_URL + '/edit/:id'} component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;