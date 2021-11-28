import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

const MockTextCompoenent = () => {
  return <Text>Assalamualaikum World</Text>;
};

describe('Text Componenent', () => {
  test('Should be render Text Element', () => {
    render(<MockTextCompoenent />);
    const textComponent = screen.getByText('Assalamualaikum World');
    expect(textComponent).toBeInTheDocument();
  });
});
