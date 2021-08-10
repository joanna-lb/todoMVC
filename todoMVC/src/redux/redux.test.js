import todoReducer from "./reducers";
import {
    CLEAR_ALL_COMPLETES,
    CLEAR_COMPLETE,
    SET_ALL_TASKS_AS_COMPLETED, SET_COMPLETE_TRUE, SET_COMPLETE_FALSE,
    SET_TODO_LIST, EDIT_TODO_LIST, DELETE_TODO, SET_FILTER_TYPES
} from "../utils/constants";

describe('todo reducer', () => {
    const mockInitialState = {
        todos: [],
        filterType: 'All'
    };


    test('should return state with todos when SET_TODO_LIST', () => {
        const mockAction = {
            type: SET_TODO_LIST,
            data: 'mock name',
        }
        const expectedState = todoReducer(mockInitialState, mockAction);
        expect(expectedState.todos).toEqual('mock name')
    });

    test('should only return state with todos which is not complete', () => {
        const mockTodos = {
            todos: [{id: 1, name: 'mock user 1', isComplete: true},
                {id: 2, name: 'mock user 2', isComplete: false}]
        }
        const mockAction = {
            type: CLEAR_COMPLETE,
        }
        const expectedState = todoReducer(mockTodos, mockAction);
        expect(expectedState.todos.length).toBe(1)
    });

    test('should only return state with todos which is not complete', () => {
        const mockTodos = {
            todos: [{id: 1, name: 'mock user 1', isComplete: true},
                {id: 2, name: 'mock user 2', isComplete: false}]
        }
        const mockAction = {
            type: SET_ALL_TASKS_AS_COMPLETED,
        }
        const expectedState = todoReducer(mockTodos, mockAction);
        expect(expectedState.todos.filter(todo => !todo.isComplete).length).toBe(0)
    });

    test('should only return state with todos which is not complete', () => {
        const mockTodos = {
            todos: [{id: 1, name: 'mock user 1', isComplete: true}, {id: 2, name: 'mock user 2', isComplete: false}]
        }
        const mockAction = {
            type: SET_ALL_TASKS_AS_COMPLETED,
        }
        const expectedState = todoReducer(mockTodos, mockAction);
        expect(expectedState.todos.filter(todo => !todo.isComplete).length).toBe(0)
    });


    test('should change all status to not complete', () => {
        const mockTodos = {
            todos: [{id: 1, name: 'mock user 1', isComplete: true},
                {id: 2, name: 'mock user 2', isComplete: true},
                {id: 3, name: 'mock user 3', isComplete: false}],
            filterType: 'All'
        }
        const mockAction = {
            type: CLEAR_ALL_COMPLETES,
        }
        const expectedState = todoReducer(mockTodos, mockAction);
        expect(expectedState.todos.filter(todo => todo.isComplete).length).toBe(0)
    });

    test('should change specific status through id', () => {
        const mockTodos = {
            todos: [{id: 1, name: 'mock user 1', isComplete: true},
                {id: 2, name: 'mock user 2', isComplete: true},
                {id: 3, name: 'mock user 3', isComplete: false}],
            filterType: 'All'
        }
        const mockAction = {
            type: SET_COMPLETE_TRUE,
            data: 2
        }
        const expectedState = todoReducer(mockTodos, mockAction);
        expect(expectedState.todos[1].isComplete).toBe(false)
    });

    test('should set specific todo status be complete', () => {
        const mockTodos = {
            todos: [{id: 1, name: 'mock user 1', isComplete: true},
                {id: 2, name: 'mock user 2', isComplete: true},
                {id: 3, name: 'mock user 3', isComplete: false}],
            filterType: 'All'
        }
        const mockAction = {
            type: SET_COMPLETE_FALSE,
            data: 3
        }
        const expectedState = todoReducer(mockTodos, mockAction);
        expect(expectedState.todos[1].isComplete).toBe(true)

    })

    test('should edit todo list with changed name', () => {
        const mockTodos = {
            todos: [{id: 1, name: 'mock user 1', isComplete: true},
                {id: 2, name: 'mock user 2', isComplete: true},
                {id: 3, name: 'mock user 3', isComplete: false}],
            filterType: 'All'
        }
        const mockAction = {
            type: EDIT_TODO_LIST,
            data: {id: 1, name: 'edit name'}
        }
        const expectedState = todoReducer(mockTodos, mockAction);
        expect(expectedState.todos[0].name).toEqual('edit name')
    })

    test('should delete specific todo list ', () => {
        const mockTodos = {
            todos: [{id: 1, name: 'mock user 1', isComplete: true},
                {id: 2, name: 'mock user 2', isComplete: true},
                {id: 3, name: 'mock user 3', isComplete: false}],
            filterType: 'All'
        }
        const mockAction = {
            type: DELETE_TODO,
            data: 1
        }
        const expectedState = todoReducer(mockTodos, mockAction);
        expect(expectedState.todos[0].id).toEqual(2)
    })

    test('should set specific filter type ', () => {
        const mockTodos = {
            todos: [{id: 1, name: 'mock user 1', isComplete: true},
                {id: 2, name: 'mock user 2', isComplete: true},
                {id: 3, name: 'mock user 3', isComplete: false}],
            filterType: 'All'
        }
        const mockAction = {
            type: SET_FILTER_TYPES,
            data: 'Active'
        }
        const expectedState = todoReducer(mockTodos, mockAction);
        expect(expectedState.filterType).toEqual('Active')
    })


    test('should return default state', () => {
        const action = {
            type: 'NOT_MATCHED',
        };
        const expectedState = todoReducer(mockInitialState, action);
        expect(expectedState).toEqual({
            todos: [],
            filterType: 'All'
        })
    })
})