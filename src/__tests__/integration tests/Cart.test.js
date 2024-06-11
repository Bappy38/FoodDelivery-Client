import { act, fireEvent, render, screen } from '@testing-library/react';
import MOCK_DATA from '../../mocks/mockRestaurantMenu.json'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import RestaurantMenu from '../../components/RestaurantMenu';
import NavBar from '../../components/NavBar';
import appStore from '../../store/appStore';
import Cart from '../../components/Cart';
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

describe("Tests by keeping state", () => {

    it("Should add single item to cart", async () => {

        await act( async () =>
            
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <NavBar/>
                        <RestaurantMenu/>
                        <Cart/>
                    </Provider>
                </BrowserRouter>
            )
        );
    
        const emptyCartImage = screen.getByAltText('empty cart image');
        expect(emptyCartImage).toBeInTheDocument();
    
        const accordionHeader = screen.getByText("Desserts (1)");
        fireEvent.click(accordionHeader);
    
        const foodItems = screen.getAllByTestId("fooditem");
        expect(foodItems.length).toBe(1);
    
        const addButtons = screen.getAllByRole("button", {name: "Add +"});
        fireEvent.click(addButtons[0]);
    
        const cartItemsAfterAdding = screen.getAllByTestId("cartitem");
        expect(cartItemsAfterAdding.length).toBe(1);
    
        fireEvent.click(addButtons[0]);
    
        const cartItemsAfterAddingSameItemAgain = screen.getAllByTestId("cartitem");
        expect(cartItemsAfterAddingSameItemAgain.length).toBe(1);
    });
    
    it("Should add multiple item to cart considering state we created in previous test", async () => {
    
        await act( async () =>
            
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <NavBar/>
                        <RestaurantMenu/>
                        <Cart/>
                    </Provider>
                </BrowserRouter>
            )
        );
    
        const accordionHeader = screen.getByText("Main Courses (1)");
        fireEvent.click(accordionHeader);
    
        const addButtons = screen.getAllByRole("button", {name: "Add +"});
        fireEvent.click(addButtons[0]);
    
        const cartItemsAfterAddingAnotherItem = screen.getAllByTestId("cartitem");
        expect(cartItemsAfterAddingAnotherItem.length).toBe(2);
    });

    it("Should remove the item of quantity 2 from cart", async () => {

        await act( async () =>
            
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <NavBar/>
                        <RestaurantMenu/>
                        <Cart/>
                    </Provider>
                </BrowserRouter>
            )
        );

        const decQuantityButtons = screen.getAllByTestId("decQuantity");
        fireEvent.click(decQuantityButtons[0]);

        const cartItemsAfterReducingQuantityOfAnItem = screen.getAllByTestId("cartitem");
        expect(cartItemsAfterReducingQuantityOfAnItem.length).toBe(2);

        fireEvent.click(decQuantityButtons[0]);
        const cartItemsAfterRemovingAnItem = screen.getAllByTestId("cartitem");
        expect(cartItemsAfterRemovingAnItem.length).toBe(1);
    });

    it("Should clear the cart", async () => {

        await act( async () =>
            
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <NavBar/>
                        <RestaurantMenu/>
                        <Cart/>
                    </Provider>
                </BrowserRouter>
            )
        );

        const decQuantityButtons = screen.getAllByTestId("decQuantity");
        fireEvent.click(decQuantityButtons[0]);
        
        const emptyCartImage = screen.getByAltText('empty cart image');
        expect(emptyCartImage).toBeInTheDocument();
    });
});