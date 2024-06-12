import "@testing-library/jest-dom";
import { BrowserRouter, json } from "react-router-dom";
import MOCK_DATA from "../../mocks/mockRestaurantList.json";
import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../../components/Body";

global.fetch = jest.fn(() => {

    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

it("Should render the Body component with Search button and Search bar", async () => {

    await act(async () => render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ));

    const searchBtn = screen.getByRole("button", {name: "Search"});
    expect(searchBtn).toBeInTheDocument();

    const searchBar = screen.getByPlaceholderText("Search for restaurants and food");
    expect(searchBar).toBeInTheDocument();
});