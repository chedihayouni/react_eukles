import { saleService } from "../../services/saleService";

/**
 * Define sale action types
 */
export const LOAD_SALES_START = "LOAD SALES START";
export const LOAD_SALES_SUCCESS = "LOAD SALES SUCCESS";
export const LOAD_SALES_FAILURE = "LOAD SALES FAILURE";

/**
 * Load sales action creator
 */
export function loadSales() {
    return async (dispatch) => {
        dispatch({ type: LOAD_SALES_START });
        await saleService
            .getSales()
            .then((sales) => {
                dispatch({
                    type: LOAD_SALES_SUCCESS,
                    payload: sales
                });
            })
            .catch((error) => {
                return dispatch({ type: LOAD_SALES_FAILURE, payload: error });
            });
    };
}