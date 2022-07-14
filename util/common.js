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
        if(fields[key].trim() === "") {
            throw `${key} required`;
        }
    }
}

export const signup = async (newUserData) => {
    try {
        const res = await axios.post('http://localhost:3000/api/user/signup', newUserData);
        return res;
    } catch(err) {
        return err.response;
    }
}