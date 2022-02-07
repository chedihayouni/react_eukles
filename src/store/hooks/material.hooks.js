import { useSelector, useDispatch } from "react-redux";

import * as MaterialActions from "../actions/material.actions";

/**
 * Custom hook
 * Connect to application store
 */
export const useMaterials = () => {
    /**
     * Init dispatch
     */
    const dispatch = useDispatch();

    /**
     * load materials list
     * @returns 
     */
    const loadMaterials = () =>{
        dispatch(MaterialActions.loadMaterials());
    }
    
    /**
    * Add sale
    * @returns 
    */
    const addSale = (data) =>
        dispatch(MaterialActions.addSale(data));

    /**
    * Add Material
    * @returns 
    */
    const addMaterial = (data) =>
        dispatch(MaterialActions.addMaterial(data));
        
    /**
     * Get materials from global state
     */
    const materials = useSelector(({ material }) => material.materials);

    /**
     * Export callBack functions and states
     */
    return {
        loadMaterials,
        addSale,
        addMaterial,
        materials
    };
};