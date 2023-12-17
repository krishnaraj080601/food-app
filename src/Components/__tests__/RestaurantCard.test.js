import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
it("should render RestaurantCard component with props Data", () => {
    render(<RestaurantCard resdata={MOCK_DATA}/>)
    const name = screen.getByText("Burma Bhai");
    expect(name).toBeInTheDocument();
})