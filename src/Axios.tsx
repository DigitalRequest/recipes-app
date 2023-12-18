import axios from "axios";

const getData = async (query: string, numIngredients: number, dishType: string[]) => {
    try {
        const params = {
            q: query,
            ingr: numIngredients || '',
            // Add dishType only if it's not empty
            ...(dishType.length > 0 && { dishType: dishType.join(',') }),
        };

        const response = await axios.get('http://localhost:3000/api/recipes', {
            params,
            withCredentials: true,
        });

        return response.data["hits"];
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error.response); // Log the response data in case of an error
        } else {
            console.error(error);
        }
    }
};

export { getData };