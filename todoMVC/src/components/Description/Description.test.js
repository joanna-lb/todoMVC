import React from "react";
import {screen, render} from "@testing-library/react";
import '@testing-library/jest-dom';
import Description from "./Description";

describe('Description', () => {
    test('should have three p labels', () => {
        const firstLine = 'Double-click to edit a todo';
        const secondLine = 'petehunt'
        const thirdLine = 'TodoMVC'

        render(<Description/>)
        expect(screen.getByText(firstLine)).toBeInTheDocument();
        expect(screen.getByText(secondLine)).toBeInTheDocument();
        expect(screen.getByText(thirdLine)).toBeInTheDocument();
    })
})