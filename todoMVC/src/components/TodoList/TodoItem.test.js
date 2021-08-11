import React from "react";
import {screen} from "@testing-library/react";
import {render} from "../../test/test-utils";
import '@testing-library/jest-dom'
import TodoItems from "./TodoItems";
import userEvent from "@testing-library/user-event";
import {waitFor} from "@babel/core/lib/gensync-utils/async";


const mockTodo = {id: 124, name: '124', complete: false}
jest.mock('../../shared')

describe('Todo', () => {
    test('should render todo list', () => {
        render(<TodoItems todo={mockTodo}/>);
        expect(screen.getByRole('listitem')).toHaveTextContent('124')
    });

    test('should delete todo when click delete button',async () => {
      const  deleteTodo=jest.fn()
        render(<TodoItems  todo={mockTodo} deleteTodo={deleteTodo}/>)
      await userEvent.click(screen.getAllByRole('button')[0])
        userEvent.click(screen.getByTestId('destroy'))
        const textElement=await screen.getByText('124')

      await waitFor(()=>expect(textElement).toBe(1))
    });

    test('should complete todo when click',async () => {
        const handleComplete = jest.fn()
        render(<TodoItems handleComplete={handleComplete} todo={mockTodo}/>)
        userEvent.click(screen.getAllByRole('checkbox')[0])
       await waitFor(()=>expect(handleComplete).toBeCalled())
    })

    test('should edit todo when double click',async () => {
        render(<TodoItems todo={mockTodo} />)
        const firstItem = screen.getByText('124');
        userEvent.dblClick(firstItem);
        const input = screen.getAllByRole('textbox')[0];
        userEvent.type(input, '%{enter}');
        await waitFor(()=> expect(screen.getByRole('listitem')).toHaveTextContent('%'))
    })
})