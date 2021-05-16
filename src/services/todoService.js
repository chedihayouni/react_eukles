import axios from "../Http";

/**
 * Define todo services
 */
export const todoService = {

    getPendingTodos: () => {
        return new Promise((resolve, reject) => {
            axios
                .get("/todos/pending")
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    getDoneTodos: () => {
        return new Promise((resolve, reject) => {
            axios
                .get("/todos/done")
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    addTodo: (data) => {
        return new Promise((resolve, reject) => {
            axios
                .post("/todos", data)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    getToDo: (id) => {
        return new Promise((resolve, reject) => {
            axios
                .get("/todos/" + id)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    editTodo: (data, id) => {
        return new Promise((resolve, reject) => {
            axios
                .put("/todos/" + id, data)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    finishToDo: (id) => {
        return new Promise((resolve, reject) => {
            axios
                .patch("/todos/finish/" + id, { status: "DONE" })
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    openToDo: (id) => {
        return new Promise((resolve, reject) => {
            axios
                .patch("/todos/open/" + id, { status: "PENDING" })
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    deleteToDo: (id) => {
        return new Promise((resolve, reject) => {
            axios
                .delete("/todos/" + id)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
}

/**
 * Export todo services
 */
export default todoService;