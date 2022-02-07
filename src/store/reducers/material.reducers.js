import * as MaterialActions from "../actions/material.actions";

/**
 * Define intial state
 */
const initialState = {
    materials: [],
    error: null,
    loading: false,
};

/**
 * Define material reducer
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export default function material(
    state = initialState,
    action
) {
    switch (action.type) {
        case MaterialActions.LOAD_MATERIALS_START: {
            return {
                ...state,
                loading: true,
            };
        }
        case MaterialActions.LOAD_MATERIALS_SUCCESS: {
            return {
                ...state,
                loading: false,
                materials: action.payload.data,
            };
        }
        case MaterialActions.LOAD_MATERIALS_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        case MaterialActions.ADD_SALE_START: {
            return {
                ...state,
                loading: true,
            };
        }
        case MaterialActions.ADD_SALE_SUCCESS: {
            return {
                ...state,
                loading: false,
            };
        }
        case MaterialActions.ADD_SALE_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        case MaterialActions.ADD_MATERIAL_START: {
            return {
                ...state,
                loading: true,
            };
        }
        case MaterialActions.ADD_MATERIAL_SUCCESS: {
            return {
                ...state,
                loading: false,
            };
        }
        case MaterialActions.ADD_MATERIAL_FAILURE: {
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