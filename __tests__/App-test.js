/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  let snapshot= renderer.create(<App />).toJSON()
  // expect(true).toBe(true)
  expect(snapshot).toMatchSnapshot()
});
