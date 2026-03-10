import { render, screen } from "@testing-library/react";
import { GameCard } from "./game-card";
import "@testing-library/jest-dom";

describe("GameCard Component", () => {
  test("renders game name correctly", () => {
    render(<GameCard id="g1" name="FIFA 24" imageUrl="/fifa.jpg" />);
    expect(screen.getByText(/FIFA 24/i)).toBeInTheDocument();
  });

  test("contains a link to the details page", () => {
    render(<GameCard id="g1" name="FIFA 24" imageUrl="/fifa.jpg" />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/games/g1");
  });

  test("renders 'No Art' when imageUrl is missing", () => {
    render(<GameCard id="g2" name="Empty Game" />);
    expect(screen.getByText(/No Art/i)).toBeInTheDocument();
  });
});
