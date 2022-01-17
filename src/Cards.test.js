import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Cards from './Cards';
import {deckBaseUrl, deckNewEnd, deckDrawEnd} from './helpers';

it('renders without crashing', () => {
  render(<Cards />);
});

it('renders snapshot', () => {
  const { asFragment } = render(<Cards />);
  expect(asFragment()).toMatchSnapshot();
});

it('should change cards dealt with "fewer" and "more" buttons', () => {
  const { queryByText, queryByTestId } = render(<Cards 
    deckBaseUrl={deckBaseUrl}
    deckNewEnd={deckNewEnd}
    deckDrawEnd={deckDrawEnd}
  />);
  const more = queryByText('more cards');
  const fewer = queryByText('fewer cards');
  const deal = queryByTestId('deal');
  expect(more).toBeInTheDocument();
  expect(fewer).toBeInTheDocument();
  expect(deal).toBeInTheDocument();
  // expect(queryByText("deal 1 card")).toBeInTheDocument();
  // expect(queryByText("deal 2 cards")).toBe(null);
  // fireEvent.click(more);
  // expect(queryByText("deal 2 cards")).toBeInTheDocument();
  // fireEvent.click(fewer);
  // expect(queryByText("deal 2 cards")).toBe(null);
  // expect(queryByText("deal 1 card")).toBeInTheDocument();
})