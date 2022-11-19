import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import { legacy_createStore, applyMiddleware, compose } from 'redux';
import reducers from "./reducers";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
    reducers,
    composeEnhancer(applyMiddleware())
    );

const rootEelement = document.querySelector('#root');

const root = createRoot(rootEelement);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)