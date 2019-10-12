import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import {Display} from './components/Display';
import {Dashboard} from './components/Dashboard'

afterEach(rtl.cleanup);
test('renders without crashing', () => {
  const wrapper = rtl.render(<App/>)
  wrapper.debug()
});
test('passes', () => {
  const wrapper = rtl.render(<Display />)
  wrapper.debug()
})
test('passing', () => {
  const wrapper = rtl.render(<Dashboard/>)
  wrapper.debug()
})
