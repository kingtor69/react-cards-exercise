import React from 'react';
import { render } from '@testing-library/react';
import Cards from './Cards';

it('renders without crashing', () => {
  render(<Cards />);
});

it('renders snapshot', () => {
  const { asFragment } = render(<Cards />);
  expect(asFragment()).toMatchSnapshot();
});