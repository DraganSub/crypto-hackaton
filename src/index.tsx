import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./stores";
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
=======
>>>>>>> origin/redux

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
<<<<<<< HEAD
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
=======
    <Provider store={store}>
        <App />
    </Provider>
>>>>>>> origin/redux
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
