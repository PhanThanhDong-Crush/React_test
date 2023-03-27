import { instance } from "./instance";

export const getAll = () => {
    return instance.get("/products");
}

export const getOne = (id) => {
    return instance.get("/products/" + id);
}

export const addPro = (product) => {
    return instance.post("/products", product);
}

export const editPro = (id, product) => {
    return instance.patch("/products/" + id, product);
}

export const deletePro = (id) => {
    return instance.delete("/products/" + id);
}