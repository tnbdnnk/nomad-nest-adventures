import axios from 'axios';

const API = process.env.API;

export const getAdverts = async () => {
    try {
        const res = await axios.get(API);
        return res.data;
    } catch (error) {
        console.error('Error fetching adverts:', error);
        throw error;
    }
};

export const getAdvertById = async (id) => {
    try {
        const res = await axios.get(`${API}/${id}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching adverts:", error);
        throw error;
    }
}