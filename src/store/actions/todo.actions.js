import { todoService } from "../../services/todoService";

/**
 * Define todo action types
 */
export const LOAD_TODOS_START = "LOAD TODOS START";
export const LOAD_TODOS_SUCCESS = "LOAD TODOS SUCCESS";
export const LOAD_TODOS_FAILURE = "LOAD TODOS FAILURE";

export const LOAD_DONE_TODOS_START = "LOAD DONE TODOS START";
export const LOAD_DONE_TODOS_SUCCESS = "LOAD DONE TODOS SUCCESS";
export const LOAD_DONE_TODOS_FAILURE = "LOAD DONE TODOS FAILURE";

export const ADD_TODO_START = "ADD TODO START";
export const ADD_TODO_SUCCESS = "ADD TODO SUCCESS";
export const ADD_TODO_FAILURE = "ADD TODO FAILURE";

export const LOAD_TODO_START = "LOAD TODO START";
export const LOAD_TODO_SUCCESS = "LOAD TODO SUCCESS";
export const LOAD_TODO_FAILURE = "LOAD TODO FAILURE";

export const EDIT_TODO_START = "EDIT TODO START";
export const EDIT_TODO_SUCCESS = "EDIT TODO SUCCESS";
export const EDIT_TODO_FAILURE = "EDIT TODO FAILURE";

export const CLOSE_TODO_START = "CLOSE TODO START";
export const CLOSE_TODO_SUCCESS = "CLOSE TODO SUCCESS";
export const CLOSE_TODO_FAILURE = "CLOSE TODO FAILURE";

export const OPEN_TODO_START = "OPEN TODO START";
export const OPEN_TODO_SUCCESS = "OPEN TODO SUCCESS";
export const OPEN_TODO_FAILURE = "OPEN TODO FAILURE";

export const DELETE_TODO_START = "DELETE TODO START";
export const DELETE_TODO_SUCCESS = "DELETE TODO SUCCESS";
export const DELETE_TODO_FAILURE = "DELETE TODO FAILURE";

/**
 * Load pending todos action creator
 */
export function loadPendingTodos() {
    return async (dispatch) => {
        dispatch({ type: LOAD_TODOS_START });
        await todoService
            .getPendingTodos()
            .then((todos) => {
                dispatch({
                    type: LOAD_TODOS_SUCCESS,
                    payload: todos
                });
            })
            .catch((error) => {
                return dispatch({ type: LOAD_TODOS_FAILURE, payload: error });
            });
    };
}

/**
 * Load done todos action creator
 */
export function loadDoneTodos() {
    return async (dispatch) => {
        dispatch({ type: LOAD_DONE_TODOS_START });
        await todoService
            .getDoneTodos()
            .then((todos) => {
                dispatch({
                    type: LOAD_DONE_TODOS_SUCCESS,
                    payload: todos
                });
            })
            .catch((error) => {
                return dispatch({ type: LOAD_DONE_TODOS_FAILURE, payload: error });
            });
    };
}

/**
 * 
 * @param {*} data 
 * @returns 
 */
export function addToDo(data) {
    return async (dispatch) => {
        dispatch({ type: ADD_TODO_START });
        await todoService
            .addTodo(data)
            .then(() => {
                dispatch(loadPendingTodos())
                dispatch({
                    type: ADD_TODO_SUCCESS,
                });
            })
            .catch((error) => {
                return dispatch({ type: ADD_TODO_FAILURE, payload: error });
            });
    };
}

/**
 * 
 * @param {*} id 
 * @returns 
 */
export function loadToDo(id) {
    return async (dispatch) => {
        dispatch({ type: LOAD_TODO_START });
        await todoService
            .getToDo(id)
            .then((todo) => {
                dispatch({
                    type: LOAD_TODO_SUCCESS,
                    payload: todo
                });
            })
            .catch((error) => {
                return dispatch({ type: LOAD_TODO_FAILURE, payload: error });
            });
    };
}

/**
 * 
 * @param {*} data 
 * @returns 
 */
export function editToDo(data, id) {
    return async (dispatch) => {
        dispatch({ type: EDIT_TODO_START });
        await todoService
            .editTodo(data, id)
            .then(() => {
                dispatch(loadPendingTodos())
                dispatch({
                    type: EDIT_TODO_SUCCESS,
                });
            })
            .catch((error) => {
                return dispatch({ type: EDIT_TODO_FAILURE, payload: error });
            });
    };
}

/**
 * 
 * @param {*} id 
 * @returns 
 */
export function finishToDo(id) {
    return async (dispatch) => {
        dispatch({ type: CLOSE_TODO_START });
        await todoService
            .finishToDo(id)
            .then(() => {
                dispatch(loadPendingTodos())
                dispatch({
                    type: CLOSE_TODO_SUCCESS,
                });
            })
            .catch((error) => {
                return dispatch({ type: CLOSE_TODO_FAILURE, payload: error });
            });
    };
}

/**
 * 
 * @param {*} id 
 * @returns 
 */
export function openToDo(id) {
    return async (dispatch) => {
        dispatch({ type: OPEN_TODO_START });
        await todoService
            .openToDo(id)
            .then(() => {
                dispatch(loadDoneTodos())
                dispatch({
                    type: OPEN_TODO_SUCCESS,
                });
            })
            .catch((error) => {
                return dispatch({ type: OPEN_TODO_FAILURE, payload: error });
            });
    };
}

/**
 * 
 * @param {*} id 
 * @returns 
 */
export function deleteToDo(id) {
    return async (dispatch) => {
        dispatch({ type: DELETE_TODO_START });
        await todoService
            .deleteToDo(id)
            .then(() => {
                dispatch(loadDoneTodos())
                dispatch({
                    type: DELETE_TODO_SUCCESS,
                });
            })
            .catch((error) => {
                return dispatch({ type: DELETE_TODO_FAILURE, payload: error });
            });
    };
}