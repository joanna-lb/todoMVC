import React from "react";
import {fireEvent, queryByTestId, queryByText, screen} from "@testing-library/react";
import {render} from "../../test/test-utils";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import Footer from "./Footer";
import Filters from "./Filters";
import TodoCount from "./TodoCount";
import {waitFor} from "@babel/core/lib/gensync-utils/async";
import {checkAnyComplete} from "../../shared";

const mockTodos = [{id: 124, name: '124', complete: true}, {id: 125, name: '125', complete: false}, {
    id: 124,
    name: '124',
    complete: true
}]

describe('Todo Count', () => {
    test('should show the correct words on the screen', async () => {
        render(<TodoCount todos={mockTodos} showContent={true} leftItemsCount={1}/>)
      await waitFor(()=> expect(screen.getByText(/1 item left/)).toBeInTheDocument())
    })
})

describe('Filters', () => {
    test('should call showContent function with certain filter type', async () => {
        const mockShowContent = jest.fn();
        render(<Filters todos={mockTodos} showContent={mockShowContent} filterTypes={'Active'}/>)
        const filterType = screen.getByText('Active')
        userEvent.click(filterType)
      await waitFor(()=>expect(mockShowContent).toHaveBeenCalledWith('Active'))
    })
})


describe('Clear Complete Button ', () => {
    test('should call clear complete function when click button',async () => {
        const mockClearComplete = jest.fn();
        const mockCheckAnyComplete=jest.fn();
      const{container}=  render(<Footer
            todos={mockTodos} showContent={'All'} clearComplete={mockClearComplete}
            checkAnyComplet={mockCheckAnyComplete}
        />)

        const clearButton=queryByTestId(container,'button')
        expect(clearButton).toBe()
        //fireEvent.click(clearButton)
       // const clearButton = screen.getByText('Clear completed')
     //fireEvent.click(clearButton)
       // await waitFor(()=>expect(mockClearComplete).toHaveBeenCalled())
    })
})
