import React from "react";
import {screen} from "@testing-library/react";
import {render} from "../../test/test-utils";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import Footer from "./Footer";
import {Filters} from "./Filters";
import {TodoCount} from "./TodoCount";

const mockTodos = [{id: 124, name: '124', complete: true}, {id: 125, name: '125', complete: false}, {
    id: 124,
    name: '124',
    complete: true
}]

describe('Todo Count', () => {
    test('should show the correct words on the screen', () => {
        render(<TodoCount todos={mockTodos} showContent={true} leftItemsCount={1}/>)
        expect(screen.getByText(/1 item left/)).toBeInTheDocument()
    })
})

describe('Filters', () => {
    test('should call showContent function with certain filter type', () => {
        const mockShowContent = jest.fn();
        render(<Filters todos={mockTodos} showContent={mockShowContent} filterTypes={'Active'}/>)
        const filterType = screen.getByText('Active')
        userEvent.click(filterType)
        expect(mockShowContent).toHaveBeenCalledWith('Active')
    })
})


describe('Clear Complete Button ', () => {
    test('should call clear complete function when click button', () => {
        const mockClearComplete = jest.fn();
        render(<Footer todos={mockTodos} showContent={'All'} clearComplete={mockClearComplete}/>)
        const clearButton = screen.getByText('Clear completed')
        userEvent.click(clearButton)
        expect(mockClearComplete).toHaveBeenCalled()
    })
})
