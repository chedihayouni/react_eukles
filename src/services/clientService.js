import axios from "../Http";

/**
 * Define client services
 */
export const clientService = {

    getClients: () => {
        return new Promise((resolve, reject) => {
            axios
                .get("/clients")
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    getClientSales: () => {
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
    },

    addClient: (data) => {
        return new Promise((resolve, reject) => {
            axios
                .post("/clients", data)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}

/**
 * Export client services
 */
export default clientService;