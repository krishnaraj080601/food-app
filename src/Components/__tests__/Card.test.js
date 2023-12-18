import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import Header from "../Header"
import RestaurantMenu from "../RestaurantMenu"
import Cart from "../Cart";
import { Provider } from "react-redux"
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom"
import MOCK_DATA_NAME from "../mocks/mockResMenu.json"
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);
it("should Load Restaurant Menu Component", async () => {

    await act (async () =>
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        <RestaurantMenu/>
        <Cart/>
        </Provider>
        </BrowserRouter>
        
    )
    )
    const accordionHeader = screen.getByText("Biryanis (14 )");
    fireEvent.click(accordionHeader);
    expect(screen.getAllByTestId("foodItems").length).toBe(14);
    expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();
    const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);
})