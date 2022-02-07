import axios from "../Http";

/**
 * Define material services
 */
export const materialService = {

    getMaterials: () => {
        return new Promise((resolve, reject) => {
            axios
                .get("/materials")
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    addSale: (data) => {
        return new Promise((resolve, reject) => {
            axios
                .post("/client-materials", data)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    addMaterial: (data) => {
        return new Promise((resolve, reject) => {
            axios
                .post("/materials", data)
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
 * Export material services
 */
export default materialService;