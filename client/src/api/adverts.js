import axios from 'axios';

// const API = process.env.API;
const instance = axios.create({
    baseURL: process.env.API
})

export const getAdverts = async () => {
    try {
        const res = await instance.get('/adverts');
        return res.data;
    } catch (error) {
        console.error('Error fetching adverts:', error);
        throw error;
    }
};

export const getAdvertById = async (id) => {
    try {
        const res = await instance.get(`/adverts/${id}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching adverts:", error);
        throw error;
    }
}