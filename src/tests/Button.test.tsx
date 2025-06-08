import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Button } from '../components/button/Button';

describe('Button Component', () => {
  test('Changes background on hover', () => {
    const originalError = console.error;
    console.error = jest.fn(); // Silencia warnings

    render(<Button primary>Hover me</Button>);
    const button = screen.getByText('Hover me');

    // Simula hover
    fireEvent.mouseEnter(button);

    // Este es el color real que defines en :hover cuando primary es true
    expect(button).toHaveStyleRule('background', '#0056b3', {
        modifier: ':hover'
      });

    fireEvent.mouseLeave(button);

    // Estado base
    expect(button).toHaveStyle('background: #007bff');

    console.error = originalError; 

  });

  test('Shows disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
    expect(button).toHaveStyle('opacity: 0.6');
  });
  
});
