import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  render(<App />);
});

it('renders snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});