import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "../src/components/Button";

describe("Button", () => {
  test("Кнопка кликабельна", () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>My button</Button>);

    const button = screen.getByText("My button");

    fireEvent.click(button);

    expect(onClickMock).toBeCalled();
  });

  test("Кнопка не кликабельна", () => {
    const onClickMock = jest.fn();
    render(
      <Button onClick={onClickMock} disabled>
        My button
      </Button>
    );

    const button = screen.getByText("My button");

    fireEvent.click(button);

    expect(onClickMock).not.toBeCalled();
  });
});
