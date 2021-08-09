import React from "react";
import {screen} from "@testing-library/react";
import {render} from "../../test/test-utils";
import'@testing-library/jest-dom'
import {TodoRedux} from "./TodoRedux";
import userEvent from "@testing-library/user-event";


describe('Todo', () => {
    test('should test input', () => {
        render(<TodoRedux/>);
        expect(screen.getByRole('textbox')).toBeInTheDocument()
    });

    test('should add one todo when type and enter', () => {
        render(<TodoRedux/>)
        userEvent.type(screen.getByRole('textbox'), '%{enter}');
        expect(screen.getByText(/%/)).toBeInTheDocument();
    })

})