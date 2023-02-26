import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("footer", () => {
  render(<Header />);
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn())
}));

test("render id", () => {
  render(<Header />);
  const divText = screen.getByTestId('header');
  expect(divText).toBeInTheDocument();
});

test("render btnMyProfile", () => {
  render(<Header />);
  const btnMyProfile = screen.getByText('Мой профиль');
  expect(btnMyProfile).toBeInTheDocument();
});

test("render btnFindFriends", () => {
  render(<Header />);
  const btnFindFriends = screen.getByText('Найти друзей');
  expect(btnFindFriends).toBeInTheDocument();
});

test("render btnOpenFeeds", () => {
  render(<Header />);
  const btnOpenFeeds = screen.getByText('Открыть ленту постов');
  expect(btnOpenFeeds).toBeInTheDocument();
});