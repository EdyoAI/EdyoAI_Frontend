import axiosPrimitive from 'axios'

const axios = axiosPrimitive.create({
    baseURL: `${process.env.API_URL}`,
    headers:{
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        'Content-Type': 'application/json',
    }
})

export {axios}