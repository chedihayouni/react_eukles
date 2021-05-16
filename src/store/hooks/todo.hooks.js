import { useSelector, useDispatch } from "react-redux";

import * as TodoActions from "../actions/todo.actions";

/**
 * Custom hook
 * Connect to application store
 */
export const useTodos = () => {
    /**
     * Init dispatch
     */
    const dispatch = useDispatch();

    /**
     * load pending todos list
     * @returns 
     */
    const loadPendingToDos = () =>
        dispatch(TodoActions.loadPendingTodos());

    /**
     * load done todos list
     * @returns 
     */
    const loadDoneToDos = () =>
        dispatch(TodoActions.loadDoneTodos());

    /**
     * load todo
     * @returns 
     */
    const loadToDo = (id) =>
        dispatch(TodoActions.loadToDo(id));

    /**
    * Add todo
    * @returns 
    */
    const addToDo = (data) =>
        dispatch(TodoActions.addToDo(data));

    /**
    * Edit todo
    * @returns 
    */
    const editToDo = (data, id) =>
        dispatch(TodoActions.editToDo(data, id));

    /**
    * Close todo
    * @returns 
    */
    const finishToDo = (id) =>
        dispatch(TodoActions.finishToDo(id));

    /**
    * Open todo
    * @returns 
    */
    const openToDo = (id) =>
        dispatch(TodoActions.openToDo(id));

    /**
    * Delete todo
    * @returns 
    */
    const deleteToDo = (id) =>
        dispatch(TodoActions.deleteToDo(id));

    /**
     * Get todos from global state
     */
    const todos = useSelector(({ todo }) => todo.todos);

    const doneTodos = useSelector(({ todo }) => todo.doneTodos);

    const todo = useSelector(({ todo }) => todo.todo);
    const error = useSelector(({ todo }) => todo.error);

    /**
     * Export callBack functions and states
     */
    return {
        loadPendingToDos,
        addToDo,
        loadToDo,
        editToDo,
        finishToDo,
        loadDoneToDos,
        deleteToDo,
        openToDo,
        doneTodos,
        todo,
        todos,
        error
    };
};