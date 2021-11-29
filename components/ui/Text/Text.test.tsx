import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text Component', () => {
  test('Should be render Text Element', () => {
    render(<Text>Hello World</Text>);
    const textComponent = screen.getByText('Hello World');
    expect(textComponent).toBeInTheDocument();
  });

  test('Tag Should be H1', () => {
    render(
      <Text data-testid='textComponent' as='h1'>
        Hello World
      </Text>,
    );
    const textComponent = screen.getByTestId('textComponent');
    expect(textComponent.tagName).toBe('H1');
  });
});
