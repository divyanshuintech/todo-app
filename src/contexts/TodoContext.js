import { createContext, useContext } from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            task: "get up",
            status: false
        }
    ],

    addTodo: (task) => { },
    updateTodo: (id, task) => { },
    deleteTodo: (id) => { },
    toggleStatus: (id) => { }
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider