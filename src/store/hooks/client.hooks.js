import { useSelector, useDispatch } from "react-redux";

import * as ClientActions from "../actions/client.actions";

/**
 * Custom hook
 * Connect to application store
 */
export const useClients = () => {
    /**
     * Init dispatch
     */
    const dispatch = useDispatch();

    /**
     * load clients list
     * @returns 
     */
    const loadClients = () =>{
        dispatch(ClientActions.loadClients());
    }

    /**
    * Add client
    * @returns 
    */
    const addClient = (data) =>
        dispatch(ClientActions.addClient(data));

    /**
     * Get clients from global state
     */
    const clients = useSelector(({ client }) => client.clients);

    /**
     * Export callBack functions and states
     */
    return {
        loadClients,
        addClient,
        clients
    };
};