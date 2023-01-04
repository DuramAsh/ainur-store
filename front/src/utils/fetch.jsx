import axios from "axios";

export const fetchProducts = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/photos")
    return response.data
}