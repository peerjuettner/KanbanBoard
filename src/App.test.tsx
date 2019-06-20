import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { cleanup, render, prettyDOM, queryAllByText, getByText, queryByText } from "@testing-library/react";
import Grid from "./components/Grid/Grid";
import { Status } from "./components/GridApp/CardStatus";

afterEach(cleanup);

it("loads and displays cards", () => {
  const { getByText } = render(
    <Grid cards={[{ key: 0, title: "Feed Cat", status: Status.Todo }]} handleCardChange={jest.fn()} />
  );
  const card = getByText("Feed Cat");
  expect(card).not.toBeNull();
});

it("only displays right arrow for cards in todo state", () => {
  const dom = render(<Grid cards={[{ key: 0, title: "Feed Cat", status: Status.Todo }]} handleCardChange={jest.fn()} />);
  const leftbutton = queryByText(dom.baseElement, "<--");
  const rightbutton = getByText(dom.baseElement, "-->");
  expect(leftbutton).toBeNull();
  expect(rightbutton).not.toBeNull();
});

it("only displays left arrow for cards in done state", () => {
  const dom = render(<Grid cards={[{ key: 0, title: "Feed Cat", status: Status.Done }]} handleCardChange={jest.fn()} />);
  const leftbutton = getByText(dom.baseElement, "<--");
  const rightbutton = queryByText(dom.baseElement, "-->");
  expect(leftbutton).not.toBeNull();
  expect(rightbutton).toBeNull();
});
