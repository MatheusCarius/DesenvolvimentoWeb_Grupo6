import { api } from "../api/api";

const getProducts = () => {
    return api.get(`produto`)
}
const getProductsById = (id) => {
    return api.get(`produto/${id}`)
}


export default {
    getProducts,
    getProductsById
}