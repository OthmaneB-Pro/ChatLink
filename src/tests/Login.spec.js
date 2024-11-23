import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";
import LoginPage from "../components/pages/login/LoginPage";

jest.mock("../store/useUserStore", () => ({
  useUserStore: jest.fn(),
}));

describe("LoginPage Component", () => {
  let mockSetUser;

  beforeEach(() => {
    mockSetUser = jest.fn();
    useUserStore.mockReturnValue({ setUser: mockSetUser });
  });

  test("renders form inputs and button", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    expect(screen.getByPlaceholderText("nom")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("mot de passe")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /inscription/i })).toBeInTheDocument();
  });

  test("displays error messages when fields are empty", async () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /inscription/i }));

    expect(await screen.findAllByText(/obligatoire/i)).toHaveLength(4);
  });

  test("switches to login mode when 'Se connecter' is clicked", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText(/vous avez déjà un compte/i));
    expect(screen.getByRole("button", { name: /se connecter/i })).toBeInTheDocument();
  });

  test("calls setUser and navigates on form submit", () => {
    const mockNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
    }));

    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("nom"), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByPlaceholderText("email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("mot de passe"), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByPlaceholderText("verifier le mot de passe"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /inscription/i }));

    expect(mockSetUser).toHaveBeenCalledWith({
      username: "testuser",
      password: "password123",
    });
    expect(mockNavigate).toHaveBeenCalledWith("/messaging");
  });
});
