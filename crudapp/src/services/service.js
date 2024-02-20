import axios from 'axios';

const loginUrl = "https://api.escuelajs.co/api/v1/auth/login";
const userBaseUrl = "https://api.escuelajs.co/api/v1/users";


export const getLoginUrl = async (email, password) => {
    try {
        const response = await axios.post(`${loginUrl}`, {
            email,
            password
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export const getUsers = async () => {
    try {
        const response = await axios.get(userBaseUrl);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export const getUserById = async (id) => {
    try {
        const response = await axios.get(`${userBaseUrl}/${id}`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}


export const AddUserData = async (name, email, password, avatar) => {
    try {

        const response = await axios.post(`${userBaseUrl}/`, {
            name,
            email,
            password,
            avatar
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export const updateUserById = async (id, editEmail, editName) => {
    try {
        const response = await axios.put(`${userBaseUrl}/${id}`, {
            email: editEmail,
            name: editName
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}