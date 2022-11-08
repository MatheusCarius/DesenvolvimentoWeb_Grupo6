import { api } from "../api/api";


const getAllCategorys = () => {
    return api.get(`categoria`)

}

const getCategoryById = (id) => {
    return api.get(`(categoria/${id})`)
}

const postCategory = (category) => {

    return api.post(`categoria`, category)
}

const updateCategory = (id,) => {
    return api.put(`categoria/${id}`)
}

const deleteCategory = (id) =>{
    return api.delete(`categoria/${id}`)
}

export default{
    getAllCategorys, 
    postCategory,
    updateCategory,
    getCategoryById,
    deleteCategory,

}   
