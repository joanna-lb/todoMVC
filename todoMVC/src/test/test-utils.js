import React from "react";
import {render as rtlRender} from "@testing-library/react";
import'@testing-library/jest-dom'
import {Provider} from "react-redux";
import todoReducer from "../redux/reducers";
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";

        function render(
            ui,
            {
                preloadedState,
                store = createStore( todoReducer,applyMiddleware(thunk)),
                ...renderOptions
            } = {}
        ) {
            function Wrapper({ children }) {
                return <Provider store={store}>{children}</Provider>
            }
            return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
        }




export * from '@testing-library/react'
// override render method
export { render }
