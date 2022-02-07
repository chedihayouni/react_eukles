import axios from "../Http";

/**
 * Define sale services
 */
export const saleService = {

    getSales: () => {
        return new Promise((resolve, reject) => {
            axios
                .get("/client-sales")
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}

/**
 * Export sale services
 */
export default saleService;