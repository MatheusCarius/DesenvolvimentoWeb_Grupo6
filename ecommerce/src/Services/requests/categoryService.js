import { api } from "../api/api";


const getCategory = () => {
    return api.get(`categoria`)

}




export default{
    getCategory,
}
