import React from "react";
import {screen,render} from "@testing-library/react";
import'@testing-library/jest-dom'
import Todo from "./Todo";
import userEvent from "@testing-library/user-event";


describe('Todo', () => {
    test('should test input', () => {
        render(<Todo/>);
        expect(screen.getByRole('textbox')).toBeInTheDocument()
    });

    test('should add one todo when type and enter', () => {
        render(<Todo/>)
        userEvent.type(screen.getByRole('textbox'), '%{enter}');
        expect(screen.getByText(/%/)).toBeInTheDocument();
    })

})