import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home Pages', () => {
  test('Should be render Greeting', () => {
    render(<Home />);
    const getTextIntro = screen.getByTestId('textGreeting');
    expect(getTextIntro).toHaveTextContent(/Hi there,/i);
  });

  test('Should be render introduce', () => {
    render(<Home />);
    const getTextIntro = screen.getByTestId('textIntro');
    expect(getTextIntro).toHaveTextContent(/I'm Hafidz, software engineer - frontend/i);
  });

  test('Should be render self describe', () => {
    render(<Home />);
    const getTextIntro = screen.getByTestId('textDescribe');
    expect(getTextIntro).toHaveTextContent(
      /Im Software Engineer - Frontend 🚀 from Indonesia. Always working on some project or learning something new!/i,
    );
  });

  test('Should be render tech stacks', () => {
    render(<Home />);
    const getTextIntro = screen.getByTestId('textTechStacks');
    expect(getTextIntro).toHaveTextContent(/Stacks I have worked with: React, Next Js, Nuxt JS/i);
  });

  test('Should be render Quick Facts', () => {
    render(<Home />);
    const getTextQuickFacts = screen.getByText(/✨ Quick Facts/i);
    expect(getTextQuickFacts).toBeInTheDocument();
  });
});
