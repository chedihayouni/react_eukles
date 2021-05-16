import * as TodoActions from "../actions/todo.actions";

/**
 * Define intial state
 */
const initialState = {
    todos: [],
    doneTodos: [],
    todo: {},
    error: null,
    loading: false,
};

/**
 * Define todo reducer
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export default function todo(
    state = initialState,
    action
) {
    switch (action.type) {
        case TodoActions.LOAD_TODOS_START: {
            return {
                ...state,
                loading: true,
            };
        }
        case TodoActions.LOAD_TODOS_SUCCESS: {
            return {
                ...state,
                loading: false,
                todos: action.payload.data,
            };
        }
        case TodoActions.LOAD_TODOS_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        case TodoActions.LOAD_DONE_TODOS_START: {
            return {
                ...state,
                loading: true,
            };
        }
        case TodoActions.LOAD_DONE_TODOS_SUCCESS: {
            return {
                ...state,
                loading: false,
                doneTodos: action.payload.data,
            };
        }
        case TodoActions.LOAD_TODO_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        case TodoActions.ADD_TODO_START: {
            return {
                ...state,
                loading: true,
            };
        }
        case TodoActions.ADD_TODO_SUCCESS: {
            return {
                ...state,
                loading: false,
            };
        }
        case TodoActions.ADD_TODO_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        case TodoActions.LOAD_TODO_START: {
            return {
                ...state,
                loading: true,
            };
        }
        case TodoActions.LOAD_TODO_SUCCESS: {
            return {
                ...state,
                loading: false,
                todo: action.payload.data.data,
            };
        }
        case TodoActions.LOAD_TODO_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        case TodoActions.EDIT_TODO_START: {
            return {
                ...state,
                loading: true,
            };
        }
        case TodoActions.EDIT_TODO_SUCCESS: {
            return {
                ...state,
                loading: false,
            };
        }
        case TodoActions.EDIT_TODO_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        case TodoActions.CLOSE_TODO_START: {
            return {
                ...state,
                loading: true,
            };
        }
        case TodoActions.CLOSE_TODO_SUCCESS: {
            return {
                ...state,
                loading: false,
            };
        }
        case TodoActions.CLOSE_TODO_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        case TodoActions.OPEN_TODO_START: {
            return {
                ...state,
                loading: true,
            };
        }
        case TodoActions.OPEN_TODO_SUCCESS: {
            return {
                ...state,
                loading: false,
            };
        }
        case TodoActions.OPEN_TODO_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        case TodoActions.DELETE_TODO_START: {
            return {
                ...state,
                loading: true,
            };
        }
        case TodoActions.DELETE_TODO_SUCCESS: {
            return {
                ...state,
                loading: false,
            };
        }
        case TodoActions.DELETE_TODO_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        default: {
            return state;
        }
    }
}