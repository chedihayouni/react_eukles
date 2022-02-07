import { useSelector, useDispatch } from "react-redux";

import * as SalesActions from "../actions/sale.actions";

/**
 * Custom hook
 * Connect to application store
 */
export const useSales = () => {
    /**
     * Init dispatch
     */
    const dispatch = useDispatch();

    /**
     * load sales list
     * @returns 
     */
    const loadSales = () =>{
        dispatch(SalesActions.loadSales());
    }

    /**
     * Get sales from global state
     */
    const sales = useSelector(({ sale }) => sale.sales);

    /**
     * Export callBack functions and states
     */
    return {
        loadSales,
        sales
    };
};