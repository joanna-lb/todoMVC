import React from "react";
import {screen} from "@testing-library/react";
import {render} from "../../test/test-utils";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import Header from "./Header";
import {waitFor} from "@babel/core/lib/gensync-utils/async";


describe('Header', () => {

    const mockTodos = [{id: 124, name: '124', complete: false}, {id: 125, name: '125', complete: false}]

    test('should render input with placeholder', () => {
        render(<Header/>);
        expect(screen.getByPlaceholderText('What needs to be done?')).toBeInTheDocument()
    })

    test('should change css style when click arrow', () => {
        render(<Header/>);
        screen.getByRole('textbox');
    })

    test('should add to list and render',async () => {
        const setTodoList = jest.fn();
        render(<Header setTodoList={setTodoList}/>)
        const input = screen.getByRole('textbox')
        userEvent.type(input, '123{enter}')

     await waitFor(()=> expect(setTodoList).toHaveBeenCalled())
    })

})