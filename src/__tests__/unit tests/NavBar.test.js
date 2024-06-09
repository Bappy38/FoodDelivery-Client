import { render, screen } from "@testing-library/react"
import NavBar from "../../components/NavBar"
import { Provider } from "react-redux"
import appStore from "../../store/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render NavBar with a Logo", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <NavBar/>
            </Provider>
        </BrowserRouter>
    );

    const logo = screen.getByAltText('Logo Image');
    expect(logo).toBeInTheDocument();
});

it("Should render NavBar with a login button", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <NavBar/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});
    expect(loginButton).toBeInTheDocument();
});

it("Should render NavBar with Cart Items", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <NavBar/>
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText(/🛒/);
    expect(cartItems).toBeInTheDocument();
});