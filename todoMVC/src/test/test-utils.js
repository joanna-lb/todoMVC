import React from "react";
import {screen,render as rtlRender,cleanup} from "@testing-library/react";
import'@testing-library/jest-dom'


import {Provider} from "react-redux";

import {configureStore} from "@reduxjs/toolkit";

import todoReducer from '../redux/todoSlice'

        function render(
            ui,
            {
                preloadedState,
                store = configureStore({ reducer: { todoList: todoReducer }, preloadedState }),
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
