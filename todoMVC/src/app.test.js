import React from "react";
import {screen,cleanup} from "@testing-library/react";
import'@testing-library/jest-dom'
import App from "./app";
import {render} from './test/test-utils'


describe('App',()=>{
    test('should render todo list',()=>{
        render(<App/>);
        expect(screen.getByText(/TodoMVC/i)).toBeInTheDocument();
    })

})

