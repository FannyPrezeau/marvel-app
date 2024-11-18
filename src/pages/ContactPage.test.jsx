import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ContactPage from './ContactPage';

describe('Contact component', () => {
    test('renders without crashing', () => {
        render(<ContactPage />);
    });

    test('sets the document title correctly', () => {
        render(<ContactPage />);
        expect(document.title).toBe("Contact | Marvel App");
    });

    test('renders the "Contact Us" heading', () => {
        render(<ContactPage />);
        expect(screen.getByText('Contact Us')).toBeInTheDocument();
    });

    test('renders the contact email link with correct href', () => {
        render(<ContactPage />);
        const emailLink = screen.getByText('fanny.prezeau@etu.univ-poitiers.fr').closest('a');
        expect(emailLink).toHaveAttribute('href', 'mailto:fanny.prezeau@etu.univ-poitiers.fr');
    });
});