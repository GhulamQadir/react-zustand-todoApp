import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
    
const todoStore = (set) => ({
    todos: [],
    addTodo: (todo, todoInput) => {
        set((state) => ({
            todos: [todo, ...state.todos],
        }));
        todoInput("")
    },
    deleteTodo: (index) => {
        set((state) => ({
            todos: [...state.todos.slice(0, index), ...state.todos.slice(index + 1)]
        }))
    },
    editTodo: (index) => {
        set((state) => ({
            todos: state.todos.map((todo, i) => {
                return i === index ? { ...todo, isEdit: true } : todo
            })
        }))
    },
    resetTodoEdits: () => {
        return new Promise((resolve) => {
            set((state) => ({
                todos: state.todos.map((todo) => ({ ...todo, isEdit: false }))
            }))
            resolve()
        })
    },
    updateTodo: (index, updatedVal) => {
        set((state) => ({
            todos: state.todos.map((todo, i) => {
                return i === index ? { ...todo, todoVal: updatedVal, isEdit: false } : todo
            })
        }))
    },
    cancelEdit: (index) => {
        set((state) => ({
            todos: state.todos.map((todo, i) => {
                return i === index ? { ...todo, isEdit: false } : todo
            })
        }))
    }

});

const useTodoStore = create(devtools(
    persist(todoStore, {
        name: "todos"
    })
))

export default useTodoStore;
