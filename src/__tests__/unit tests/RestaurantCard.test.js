import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../../components/RestaurantCard";
import MOCK_DATA from "../../mocks/mockRestaurant.json";

it("Should render RestaurantCard component with props data", () => {
    
    render(
        <RestaurantCard restaurant={MOCK_DATA}/>
    );

    const name = screen.getByText("Taste of Tuscany");
    expect(name).toBeInTheDocument();

    const restaurantBanner = screen.getByAltText("restaurant-banner");
    expect(restaurantBanner).toBeInTheDocument();
});

it("Should render RestaurantCard component with Promoted label", () => {

    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

    render(
        <PromotedRestaurantCard restaurant={MOCK_DATA}/>
    );

    const promotedLabel = screen.getByText("Promoted");
    expect(promotedLabel).toBeInTheDocument();

    const name = screen.getByText("Taste of Tuscany");
    expect(name).toBeInTheDocument();

    const restaurantBanner = screen.getByAltText("restaurant-banner");
    expect(restaurantBanner).toBeInTheDocument();
});