import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import {Display} from './components/Display';
import {Dashboard} from './components/Dashboard'

afterEach(rtl.cleanup);
test('renders without crashing', () => {
  const wrapper = rtl.render(<App/>)
  const balls = wrapper.queryByText(/balls/i)
  expect(balls).toBeInTheDocument()
  console.log('app displays balls', balls.textContent)
  const strikes = wrapper.queryByText(/strikes/i)
  expect(strikes).toBeInTheDocument()
  console.log('app displays strikes', strikes.textContent)
});
// test('passes', () => {
//   const wrapper = rtl.render(<Display />)
//   wrapper.debug()
// })
// test('passing', () => {
//   const wrapper = rtl.render(<Dashboard/>)
//   wrapper.debug()
// })
