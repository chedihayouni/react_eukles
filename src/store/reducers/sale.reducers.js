import * as SaleActions from "../actions/sale.actions";

/**
 * Define intial state
 */
const initialState = {
    sales: [],
    error: null,
    loading: false,
};

/**
 * Define sale reducer
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export default function sale(
    state = initialState,
    action
) {
    switch (action.type) {
        case SaleActions.LOAD_SALES_START: {
            return {
                ...state,
                loading: true,
            };
        }
        case SaleActions.LOAD_SALES_SUCCESS: {
            return {
                ...state,
                loading: false,
                sales: action.payload.data,
            };
        }
        case SaleActions.LOAD_SALES_FAILURE: {
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