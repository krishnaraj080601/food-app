import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_DATA);
      },
    });
  });
it("Should Search Res List for burger text input ", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body/>
        </BrowserRouter>
      )
    )
    const cardsBeforeSearch = screen.getAllByTestId("rescard");

    expect(cardsBeforeSearch.length).toBe(9);
    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "Burger" } });
    fireEvent.click(searchBtn);
    const cardsAfterSearch = screen.getAllByTestId("rescard");
    expect(cardsAfterSearch.length).toBe(2);

}
);
it("Should filter Top Rated Restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(9);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top rated restaurant",
  });
  fireEvent.click(topRatedBtn);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(4);
  
});