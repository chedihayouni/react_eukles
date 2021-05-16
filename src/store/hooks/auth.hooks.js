import { useDispatch } from "react-redux";

import * as AuthActions from "../actions/auth.actions";

/**
 * Custom hook
 * Connect to application store
 */
export const useAuth = () => {
    /**
     * Init dispatch
     */
    const dispatch = useDispatch();

    /**
    * Login
    * @returns 
    */
    const login = (data) =>
        dispatch(AuthActions.login(data));

    /**
    * Register
    * @returns 
    */
    const register = (data) =>
        dispatch(AuthActions.register(data));

    /**
     * Export callBack functions and states
     */
    return {
        login,
        register
    };
};