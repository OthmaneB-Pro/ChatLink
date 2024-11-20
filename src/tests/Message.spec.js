import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Message from "../components/reusable-ui/Message";

describe("Message component", () => {
  test("renders the label and timestamp", () => {
    render(
      <Message
        label="Hello, World!"
        timestamp="12:30 PM"
        onContextMenu={() => {}}
      />
    );

    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
    expect(screen.getByText("12:30 PM")).toBeInTheDocument();
  });

  test("calls onContextMenu when right-clicked", () => {
    const onContextMenuMock = jest.fn();

    render(
      <Message
        label="Hello, ContextMenu!"
        timestamp="10:45 AM"
        onContextMenu={onContextMenuMock}
      />
    );

    const messageElement = screen.getByText("Hello, ContextMenu!");
    fireEvent.contextMenu(messageElement);

    expect(onContextMenuMock).toHaveBeenCalledTimes(1);
  });
});
