import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";
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
}
    );
    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "burger" } });
    fireEvent.click(searchBtn);
