import Axios from 'axios';

export const getAxiosInstance = () => {
    return Axios.create({
        baseURL:"http://http://localhost:4000",
        Headers:{
            API_KEY:"liypeurgdvhfpu"
        }
    });
};