import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { NumberOfCharacters } from './NumberOfCharacters';

test('displays "There is no character" when characters array is empty', () => {
  const { getByText } = render(<NumberOfCharacters characters={[]} />);
  expect(getByText('There is no character')).toBeInTheDocument();
});

test('displays "There is 1 character" when characters array has one character', () => {
  const { getByText } = render(<NumberOfCharacters characters={['Spider-Man']} />);
  expect(getByText('There is 1 character')).toBeInTheDocument();
});

test('displays "There are 2 characters" when characters array has multiple characters', () => {
  const { getByText } = render(<NumberOfCharacters characters={['Spider-Man', 'Iron Man']} />);
  expect(getByText('There are 2 characters')).toBeInTheDocument();
});