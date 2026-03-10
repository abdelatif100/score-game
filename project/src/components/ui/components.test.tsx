import { render, screen } from "@testing-library/react";
import { StatusBadge } from "./status-badge";
import { PricingHeader } from "../sections/pricing-header";
import { ConsoleCard } from "./console-card";
import "@testing-library/jest-dom";

describe("Shared UI Components", () => {
  describe("StatusBadge", () => {
    test("renders available status correctly", () => {
      render(<StatusBadge status="available" />);
      expect(screen.getByText(/available/i)).toBeInTheDocument();
    });

    test("renders reserved status correctly", () => {
      render(<StatusBadge status="reserved" />);
      expect(screen.getByText(/reserved/i)).toBeInTheDocument();
    });
  });

  describe("PricingHeader", () => {
    test("renders pricing tiers", () => {
      render(<PricingHeader />);
      // "10 minutes" appears twice (tier and footer note), so we use getAllByText
      expect(screen.getAllByText(/10 minutes/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getByText(/30 minutes/i)).toBeInTheDocument();
      expect(screen.getByText(/1 hour/i)).toBeInTheDocument();
      expect(screen.getByText(/50 DZD/i)).toBeInTheDocument();
    });
  });

  describe("ConsoleCard", () => {
    test("renders console details and games", () => {
      const games = [
        { id: "1", name: "FIFA 24" },
        { id: "2", name: "Spider-Man" },
      ];
      render(<ConsoleCard id="c1" name="PS5 #1" status="available" games={games} />);
      
      expect(screen.getByText(/PS5 #1/i)).toBeInTheDocument();
      expect(screen.getByText(/FIFA 24/i)).toBeInTheDocument();
      expect(screen.getByText(/Spider-Man/i)).toBeInTheDocument();
      expect(screen.getByText(/Starting from/i)).toBeInTheDocument();
    });
  });
});
