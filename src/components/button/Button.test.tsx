import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { expect, it, describe } from 'vitest';

describe('Button', () => {
    it('renders button', () => {
        const buttonText = 'My button';
        render(<Button>{buttonText}</Button>);

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
    });
});
