import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('Render Button Component', () => {
    render(<Button data-testid='buttonComponent'>Click</Button>);
    const ButtonComponent = screen.getByTestId('buttonComponent');
    expect(ButtonComponent.textContent).toBe('Click');
  });

  // test('Button Clicked', () => {
  //   render(
  //     <Button data-testid='buttonComponent' onClick={jest.fn()}>
  //       Click
  //     </Button>,
  //   );
  //   const ButtonComponent = screen.getByTestId('buttonComponent');
  //   fireEvent.click(ButtonComponent);
  //   expect(ButtonComponent).toHaveBeenCalled();
  // });
});
