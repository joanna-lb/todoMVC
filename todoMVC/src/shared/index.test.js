import axios from "axios";
import {
    fetchTodoList,
    deleteTodoAction,
    updateTodoAction,
    createTodo, BASE_URL, newTodos
} from './index'


jest.mock('axios')

describe('todo list request', () => {
    test('should fetch todo list response', () => {
        fetchTodoList();

        expect(axios.get).toHaveBeenCalledWith(BASE_URL)
    })

    test('should post request when call create todo ', () => {

        createTodo();
        expect(axios.post).toHaveBeenCalled()
    })

    test('should delete request when call deleteTodoInDataBase with mock id', () => {
        const mockId = 1
        deleteTodoAction(mockId)
        expect(axios.delete).toHaveBeenCalledWith(`${BASE_URL}/${mockId}`)
    })

    test('should patch request when call updateTodoInDataBase', () => {
        updateTodoAction();
        expect(axios.patch).toHaveBeenCalled()
    })


})