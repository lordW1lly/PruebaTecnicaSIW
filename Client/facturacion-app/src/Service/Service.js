import axios from 'axios';


const apiClient = axios.create({
    baseURL: 'http://localhost:3001', // Reemplaza con la URL de tu API
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getAllFacturas = async () => {
    try {
        const response = await apiClient.get('/facturas');
        return response.data;
    } catch (error) {
        console.error('Error al obtener las facturas:', error);
        throw error;
    }
};

export default apiClient