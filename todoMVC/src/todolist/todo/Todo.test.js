import React from "react";
import {screen} from "@testing-library/react";
import {render} from "../../test/test-utils";
import'@testing-library/jest-dom'
import Todo from "./Todo";
import userEvent from "@testing-library/user-event";
import {waitFor} from "@babel/core/lib/gensync-utils/async";


describe('Todo', () => {
    test('should test input', () => {
        render(<Todo/>);
        expect(screen.getByRole('textbox')).toBeInTheDocument()
    });

    test('should add one todo when type and enter',async () => {
        render(<Todo/>)
        userEvent.type(screen.getByRole('textbox'), '%{enter}');
      await waitFor(()=>expect(screen.getByText(/%/)).toBeInTheDocument()) ;
    })

})