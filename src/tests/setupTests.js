import 'react-dates/initialize';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// require('dotenv').config({ path: '.env.test' });
import DotEnv from 'dotenv';

Enzyme.configure({
  adapter: new Adapter()
});

DotEnv.config({ path: '.env.test' });