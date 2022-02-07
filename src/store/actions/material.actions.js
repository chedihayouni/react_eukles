import { materialService } from "../../services/materialService";

/**
 * Define material action types
 */
export const LOAD_MATERIALS_START = "LOAD MATERIALS START";
export const LOAD_MATERIALS_SUCCESS = "LOAD MATERIALS SUCCESS";
export const LOAD_MATERIALS_FAILURE = "LOAD MATERIALS FAILURE";

/**
 * Define sale action types
 */
export const ADD_SALE_START = "ADD SALE START";
export const ADD_SALE_SUCCESS = "ADD SALE SUCCESS";
export const ADD_SALE_FAILURE = "ADD SALE FAILURE";


/**
 * Define add material action types
 */
export const ADD_MATERIAL_START = "ADD MATERIAL START";
export const ADD_MATERIAL_SUCCESS = "ADD MATERIAL SUCCESS";
export const ADD_MATERIAL_FAILURE = "ADD MATERIAL FAILURE";

/**
 * Load materials action creator
 */
export function loadMaterials() {
    return async (dispatch) => {
        dispatch({ type: LOAD_MATERIALS_START });
        await materialService
            .getMaterials()
            .then((materials) => {
                dispatch({
                    type: LOAD_MATERIALS_SUCCESS,
                    payload: materials
                });
            })
            .catch((error) => {
                return dispatch({ type: LOAD_MATERIALS_FAILURE, payload: error });
            });
    };
}

/**
 * 
 * @param {*} data 
 * @returns 
 */
export function addSale(data) {
    return async (dispatch) => {
        dispatch({ type: ADD_SALE_START });
        await materialService
            .addSale(data)
            .then(() => {
                dispatch({
                    type: ADD_SALE_SUCCESS,
                });
            })
            .catch((error) => {
                return dispatch({ type: ADD_SALE_FAILURE, payload: error });
            });
    };
}

/**
 * 
 * @param {*} data 
 * @returns 
 */
export function addMaterial(data) {
    return async (dispatch) => {
        dispatch({ type: ADD_MATERIAL_START });
        await materialService
            .addMaterial(data)
            .then(() => {
                dispatch({
                    type: ADD_MATERIAL_SUCCESS,
                });
            })
            .catch((error) => {
                return dispatch({ type: ADD_MATERIAL_FAILURE, payload: error });
            });
    };
}