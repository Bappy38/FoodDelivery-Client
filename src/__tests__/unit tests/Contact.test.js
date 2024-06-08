import { render, screen } from "@testing-library/react";
import Contact from "../../components/Contact";
import "@testing-library/jest-dom";

it("Should load input box for name", () => {

    render(<Contact/>);

    const nameInputBox = screen.getByPlaceholderText("Name");
    expect(nameInputBox).toBeInTheDocument();
});

it("Should load input box for message", () => {

    render(<Contact/>);

    const messageInputBox = screen.getByPlaceholderText("Write your message");
    expect(messageInputBox).toBeInTheDocument();
});

it("Should load submit button", () => {

    render(<Contact/>);

    const submitButton = screen.getByRole("button", {name: "Submit"});
    expect(submitButton).toBeInTheDocument();
});

it("Should load two input boxes", () => {

    render(<Contact/>);

    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
});