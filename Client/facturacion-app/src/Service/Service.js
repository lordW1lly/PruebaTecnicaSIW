import axios from 'axios';


const apiClient = axios.create({
    baseURL: 'http://localhost:3001', // Reemplaza con la URL de tu API
    headers: {
        'Content-Type': 'application/json'
    },
    params: {
        idUsuario : JSON.parse(localStorage.getItem('username')).idUsuario
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

export const isLogged = async (username, password) => {
    try {
        

        const body = { username, password}
        return apiClient.post('/login', body )

    } catch (error) {
       console.error(error)
    }
}

export const register = async (username, password, name) => {
    try {
        

        const body = { username, password, name}
        return apiClient.post('/user', body )

    } catch (error) {
       console.error(error)
    }
}

export default apiClient