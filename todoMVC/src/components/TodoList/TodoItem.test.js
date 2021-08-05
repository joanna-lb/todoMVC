import React from "react";
import {screen, render} from "@testing-library/react";
import '@testing-library/jest-dom'
import TodoItems from "./TodoItems";
import userEvent from "@testing-library/user-event";

const mockTodo = {id: 124, name: '124', complete: false}
describe('Todo', () => {
    test('should delete one todo when click delete button', () => {
        render(<TodoItems todo={mockTodo}/>);
        expect(screen.getByRole('listitem')).toHaveTextContent('124')
    });

    test('should delete todo when click', () => {
        const deleteTodo = jest.fn()
        render(<TodoItems deleteTodo={deleteTodo} todo={mockTodo}/>)
        userEvent.click(screen.getAllByRole('button')[0]);
        expect(deleteTodo).toBeCalled()
    });

    test('should complete todo when click', () => {
        const handleComplete = jest.fn()
        render(<TodoItems handleComplete={handleComplete} todo={mockTodo}/>)
        userEvent.click(screen.getAllByRole('checkbox')[0])
        expect(handleComplete).toBeCalled()
    })

    test('should edit todo when double click', () => {
        const editTodoList = jest.fn()
        render(<TodoItems todo={mockTodo} editTodoList={editTodoList}/>)
        const firstItem = screen.getByText('124')
        userEvent.dblClick(firstItem)
        const input = screen.getAllByRole('textbox')[0];
        userEvent.type(input, '%{enter}');
        expect(editTodoList).toBeCalled();
        expect(screen.getByRole('listitem')).toHaveTextContent('%')
    })
})