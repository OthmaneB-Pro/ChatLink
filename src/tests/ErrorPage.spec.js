import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import ErrorPage from "../components/pages/error/ErrorPage";

describe("ErrorPage component", () => {
  test("renders the 404 title, message, and button", () => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );

    // Vérifier que le titre "404" est présent
    expect(screen.getByText("404")).toBeInTheDocument();

    // Vérifier que le message est présent
    expect(
      screen.getByText("Oups ! La page que vous cherchez n'existe pas.")
    ).toBeInTheDocument();

    // Vérifier que le bouton est présent
    expect(
      screen.getByRole("button", { name: /Revenir sur la page d'accueil/i })
    ).toBeInTheDocument();
  });

  test("navigates to the home page when the button is clicked", () => {
    const mockNavigate = jest.fn();

    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
    }));

    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );

    // Simuler le clic sur le bouton
    const button = screen.getByRole("button", {
      name: /Revenir sur la page d'accueil/i,
    });
    fireEvent.click(button);

    // Vérifier que navigate a été appelé avec la bonne route
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
