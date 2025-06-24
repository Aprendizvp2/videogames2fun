import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Button } from '../components/button/Button';

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyleRule('background', '#0667cf');
  });

  it('changes background on hover', () => {
    render(<Button>Hover me</Button>);
    const button = screen.getByText('Hover me');
    
    // Estado inicial
    expect(button).toHaveStyleRule('background', '#0667cf');
    
    // Simular hover
    fireEvent.mouseEnter(button);
    expect(button).toHaveStyleRule('background', '#0056b3', {
      modifier: ':hover'
    });
    
    // Volver al estado normal
    fireEvent.mouseLeave(button);
  });
  

  it('shows disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
    expect(button).toHaveStyle('opacity: 0.6');
  });

  it('displays different sizes', () => {
    const { rerender } = render(<Button size="small">Small</Button>);
    expect(screen.getByText('Small')).toHaveStyle('padding: 8px 12px');
    
    rerender(<Button size="medium">Medium</Button>);
    expect(screen.getByText('Medium')).toHaveStyle('padding: 10px 16px');
    
    rerender(<Button size="large">Large</Button>);
    expect(screen.getByText('Large')).toHaveStyle('padding: 14px 24px');
  });

  it('renders text variant correctly', () => {
    render(<Button variant="text">Text Button</Button>);
    const button = screen.getByText('Text Button');
    expect(button).toHaveStyleRule('background', 'transparent');
  });

  it('renders outlined variant correctly', () => {
    render(<Button variant="outlined">Outlined Button</Button>);
    const button = screen.getByText('Outlined Button');
    expect(button).toHaveStyleRule('background', 'transparent');
    expect(button).toHaveStyleRule('border', '1px solid #0667cf');
  });
});