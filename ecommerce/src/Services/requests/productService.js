import { api } from "../api/api";

const getProducts = () => {
    return api.get(`produto`)
}
const getProductsById = (id) => {
    return api.get(`produto/${id}`)
}

const postProduct = (product) => {

    return api.post(`produto`, product)
}

const updateProduct = (id,) => {
    return api.put(`produto/${id}`)
}

const deleteProduct = (id) =>{
    return api.delete(`produto/${id}`)
}


export default {
    getProducts,
    getProductsById,
    postProduct,
    updateProduct,
    deleteProduct
}