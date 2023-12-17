import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
it("should render RestaurantCard component with props Data", () => {
    render(<RestaurantCard data={MOCK_DATA}/>)
    const name = screen.getByText("Sri Raja Biriyani Hotel");
    expect(name).toBeInTheDocument();
})