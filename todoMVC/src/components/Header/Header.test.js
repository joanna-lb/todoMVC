import React from "react";
import {screen} from "@testing-library/react";
import {render} from "../../test/test-utils";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import Header from "./Header";

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

    test('should add to list and render', () => {
        const setTodoList = jest.fn();
        render(<Header setTodoList={setTodoList}/>)
        const input = screen.getByRole('textbox')
        userEvent.type(input, '123{enter}')

        expect(setTodoList).toHaveBeenCalled()
    })

    test('should complete all when click button and todos are not all completed', () => {

        const setAllTasksAsCompleted = jest.fn()
        const setTodoList = jest.fn();
        render(<Header ifShowDecoration={true} setTodoList={setTodoList} todos={mockTodos}
                       setAllTasksAsCompleted={setAllTasksAsCompleted}/>)
        const span = screen.getByTestId('toggle-all')
        userEvent.click(span)
        expect(setAllTasksAsCompleted).toHaveBeenCalled()
    })

})