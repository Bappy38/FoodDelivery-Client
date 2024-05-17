import React from "react";
import ReactDOM from "react-dom/client";
import Body from './components/Body';
import NavBar from "./components/NavBar";

const AppLayout = () => {
    return (
        <div className="app">
            <NavBar/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);