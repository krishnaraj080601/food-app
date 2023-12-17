import { screen} from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../Utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it("Should render Header Component with a login button", () => {
    <BrowserRouter>
    <Provider store={appStore}>
         render(<Header/>)
    </Provider>
    </BrowserRouter>
   const cartItems=screen.getByRole("button",{name:"Login"});
   expect(LoginButton).toBeInTheDocument();


})
