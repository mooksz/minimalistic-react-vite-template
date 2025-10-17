import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Button } from '@/components/button/Button';

describe('Button', () => {
    it('renders button', () => {
        const buttonText = 'My button';
        render(<Button tagName="a">{buttonText}</Button>);

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
    });
});
