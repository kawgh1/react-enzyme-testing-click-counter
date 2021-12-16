import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    const [count, setCount] = React.useState(0);

    return (
        <div data-test="component-app">
            <h1 data-test="counter-display">
                The counter is currently <span data-test="count">{count}</span>
            </h1>
            <button
                data-test="increment-button"
                onClick={() => setCount(count + 1)}
            >
                Increment button
            </button>
        </div>
    );
}

export default App;
