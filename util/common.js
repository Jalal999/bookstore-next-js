import axios from "axios"

export const errorHandler = (data, res, code = 400) => {
    res.status(code).json({
        hasError: true,
        errorMessage: data
    })
}

export const responseHandler = (data, res, code = 200) => {
    res.status(code).json({
        hasError: false,
        body: data
    })
}

export const validateAllOnce = (fields) => {
    for (let key in fields) {
        if (fields[key].trim() === "") {
            throw `${key} required`;
        }
    }
}

export const signup = async (newUserData) => {
    try {
        const res = await axios.post('http://localhost:3000/api/user/signup', newUserData);
        return res;
    } catch (err) {
        return err.response;
    }
}

export const getUserOrders = async (payload) => {
    try {
        const result = await axios.post("http://localhost:3000/api/user/orders", payload);
        return result.data;
    } catch (err) {
        return err.response;
    }
}

export const postOrder = async(payload) => {
    try {
        const baseUrl = process.env.BASE_URL
        await axios.post(`http://localhost:3000/api/orders`, payload);

    } catch(err) {
        console.log('Wrong order', err)
    }
}

export const updateItem = async (content, payload) => {
    try {
        const baseUrl = process.env.BASE_URL
        const res = await axios.put(`http://localhost:3000/api/${content}/${payload.id}`, payload);
        return res;
    } catch (err) {
        return err.response;
    }
}

export const deleteItem = async (content, id) => {
    try {
        const res = await axios.delete(`http://localhost:3000/api/${content}/${id}`);
        return res;
    } catch (err) {
        return err.response
    }
}