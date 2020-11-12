import "./i18n";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorkerRegistration.register();
reportWebVitals();
