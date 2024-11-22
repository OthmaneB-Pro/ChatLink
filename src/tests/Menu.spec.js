import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useUserStore } from "../store/useUserStore";
import Menu from "../components/pages/menu/Menu";

// Mock de Zustand
jest.mock("../store/useUserStore", () => ({
  useUserStore: jest.fn(),
}));

describe("Menu Component", () => {
  let mockSetUser;

  beforeEach(() => {
    mockSetUser = jest.fn();
    useUserStore.mockReturnValue({
      username: "TestUser",
      picture: "https://via.placeholder.com/100",
      status: "Disponible",
      setUser: mockSetUser,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders user profile correctly", () => {
    render(<Menu />);

    expect(screen.getByAltText("avatar")).toHaveAttribute(
      "src",
      "https://via.placeholder.com/100"
    );
    expect(screen.getByText("TestUser")).toBeInTheDocument();
    expect(screen.getByText("Disponible")).toBeInTheDocument();
  });

  test("opens edit form on button click", () => {
    render(<Menu />);

    fireEvent.click(screen.getByText("Modifier mon profil"));

    expect(screen.getByPlaceholderText("Nom d'utilisateur")).toHaveValue("TestUser");
    expect(screen.getByPlaceholderText("URL de l'image")).toHaveValue(
      "https://via.placeholder.com/100"
    );
    expect(screen.getByDisplayValue("Disponible")).toBeInTheDocument();
  });

  test("updates user information and closes form on submit", () => {
    render(<Menu />);

    fireEvent.click(screen.getByText("Modifier mon profil"));

    fireEvent.change(screen.getByPlaceholderText("Nom d'utilisateur"), {
      target: { value: "UpdatedUser" },
    });
    fireEvent.change(screen.getByPlaceholderText("URL de l'image"), {
      target: { value: "https://new-image.com/avatar.png" },
    });
    fireEvent.change(screen.getByDisplayValue("Disponible"), {
      target: { value: "Indisponible" },
    });

    fireEvent.click(screen.getByText("Valider les modifications"));

    expect(mockSetUser).toHaveBeenCalledWith({ username: "UpdatedUser" });
    expect(mockSetUser).toHaveBeenCalledWith({ picture: "https://new-image.com/avatar.png" });
    expect(mockSetUser).toHaveBeenCalledWith({ status: "Indisponible" });

    expect(screen.queryByPlaceholderText("Nom d'utilisateur")).not.toBeInTheDocument();
  });
});
