import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/UI';

describe('Button Component', () => {
  test('Render Button Component', () => {
    render(<Button data-testid='buttonComponent'>Click</Button>);
    const ButtonComponent = screen.getByTestId('buttonComponent');
    expect(ButtonComponent.textContent).toBe('Click');
  });

  test('Button Clicked', () => {
    const handleClick = jest.fn();

    render(
      <Button data-testid='buttonComponent' onClick={handleClick}>
        Click
      </Button>,
    );
    const ButtonComponent = screen.getByTestId('buttonComponent');
    fireEvent.click(ButtonComponent);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
