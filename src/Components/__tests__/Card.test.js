import { render } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import Header from "../Header"
import RestaurantMenu from "../RestaurantMenu"
import Cart from "../Cart";
import { Provider } from "react-redux"
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom"
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
})