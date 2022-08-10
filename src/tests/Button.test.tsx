import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import {Button} from "../components/Button";

describe("Button", () => {
  test("Кнопка не кликабельна", () => {
    const onClickMock = jest.fn();
    render(
      <Button onClick={onClickMock} disabled>
        My button
      </Button>
    );

    const button = screen.getByText("My button");

    fireEvent.click(button);

    expect(onClickMock).not.toHaveBeenCalled();
  });
});
