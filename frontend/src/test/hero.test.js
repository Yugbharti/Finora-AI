import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing page/home/Hero";

//Test Suite
describe("Hero Component", () => {
  test("renders Hero Image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "images/homeHero.png");
  });
});
