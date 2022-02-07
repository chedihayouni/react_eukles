import { clientService } from "../../services/clientService";

/**
 * Define client action types
 */
export const LOAD_CLIENTS_START = "LOAD CLIENTS START";
export const LOAD_CLIENTS_SUCCESS = "LOAD CLIENTS SUCCESS";
export const LOAD_CLIENTS_FAILURE = "LOAD CLIENTS FAILURE";

/**
 * Define client action types
 */
export const LOAD_CLIENT_SALES_START = "LOAD CLIENTS SALES START";
export const LOAD_CLIENTS_SALES_SUCCESS = "LOAD CLIENTS SALES SUCCESS";
export const LOAD_CLIENTS_SALES_FAILURE = "LOAD CLIENTS SALES FAILURE";

/**
 * Define add client action types
 */
export const ADD_CLIENT_START = "ADD CLIENT START";
export const ADD_CLIENT_SUCCESS = "ADD CLIENT SUCCESS";
export const ADD_CLIENT_FAILURE = "ADD CLIENT FAILURE";

/**
 * Load clients action creator
 */
export function loadClients() {
    return async (dispatch) => {
        dispatch({ type: LOAD_CLIENTS_START });
        await clientService
            .getClients()
            .then((clients) => {
                dispatch({
                    type: LOAD_CLIENTS_SUCCESS,
                    payload: clients
                });
            })
            .catch((error) => {
                return dispatch({ type: LOAD_CLIENTS_FAILURE, payload: error });
            });
    };
}

/**
 * Load sales action creator
 */
export function loadClientSales() {
    return async (dispatch) => {
        dispatch({ type: LOAD_CLIENT_SALES_START });
        await clientService
            .getClientSales()
            .then((sales) => {
                dispatch({
                    type: ADD_CLIENT_SUCCESS,
                    payload: sales
                });
            })
            .catch((error) => {
                return dispatch({ type: LOAD_CLIENTS_SALES_FAILURE, payload: error });
            });
    };
}

/**
 * 
 * @param {*} data 
 * @returns 
 */
export function addClient(data) {
    return async (dispatch) => {
        dispatch({ type: ADD_CLIENT_START });
        await clientService
            .addClient(data)
            .then(() => {
                dispatch({
                    type: ADD_CLIENT_SUCCESS,
                });
            })
            .catch((error) => {
                return dispatch({ type: ADD_CLIENT_FAILURE, payload: error });
            });
    };
}