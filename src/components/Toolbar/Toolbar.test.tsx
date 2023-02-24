import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Toolbar from "./Toolbar";

test("should render text component", () => {
  render(<Toolbar />);
});

test("render id toolbar", () => {
  render(<Toolbar />);
  const toolbar = screen.getByTestId('toolbar');
  expect(toolbar).toBeInTheDocument();
});

test("render btnChangeInfo", () => {
  render(<Toolbar />);
  const btnChangeInfo = screen.getByText('Изменить информацию в профиле');
  expect(btnChangeInfo).toBeInTheDocument();
});

test("render btnCreatePost in toolbar", () => {
  render(<Toolbar />);
  const btnCreatePost = screen.getByText('Создать пост');
  expect(btnCreatePost).toBeInTheDocument();
});