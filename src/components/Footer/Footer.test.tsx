import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('render footer', () => {
  render(<Footer />);
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn()),
}));

test('render id', () => {
  render(<Footer />);
  const divText = screen.getByTestId('footer');
  expect(divText).toBeInTheDocument();
});

test('render button', () => {
  render(<Footer />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});

test('render linkGitHubNikita', () => {
  render(<Footer />);
  const linkGitHubNikita = screen.getByText('Nikita');
  expect(linkGitHubNikita).toBeInTheDocument();
});

test('render linkGitHubBaxrom', () => {
  render(<Footer />);
  const linkGitHubBaxrom = screen.getByText('Baxrom');
  expect(linkGitHubBaxrom).toBeInTheDocument();
});

test('render linkGitHubKarina', () => {
  render(<Footer />);
  const linkGitHubKarina = screen.getByText('Karina');
  expect(linkGitHubKarina).toBeInTheDocument();
});
