import * as ClientActions from "../actions/client.actions";

/**
 * Define intial state
 */
const initialState = {
    clients: [],
    error: null,
    loading: false,
};

/**
 * Define client reducer
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export default function client(
    state = initialState,
    action
) {
    switch (action.type) {
        case ClientActions.LOAD_CLIENTS_START: {
            return {
                ...state,
                loading: true,
            };
        }
        case ClientActions.LOAD_CLIENTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                clients: action.payload.data,
            };
        }
        case ClientActions.LOAD_CLIENTS_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        case ClientActions.ADD_CLIENT_START: {
            return {
                ...state,
                loading: true,
            };
        }
        case ClientActions.ADD_CLIENT_SUCCESS: {
            return {
                ...state,
                loading: false,
            };
        }
        case ClientActions.ADD_CLIENT_FAILURE: {
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