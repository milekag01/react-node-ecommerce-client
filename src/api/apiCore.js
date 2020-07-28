import {API} from '../config.js';
// import {API} from '../config.js';

export const getProducts = (sortBy) => {
    return fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=6`, {
        method: 'GET'
    }).then(response => {
        return response.json();
    }).catch(error => console.log(error));
}

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: 'GET'
    }).then(response => {
        return response.json();
    }).catch(error => console.log(error));
}

export const getFilteredProducts = (skip, limit, filters = {}) => {
    // console.log(user);
    const data = {
        limit,skip,filters
    };
    return fetch(`${API}/products/by/search`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        return response.json()
    }).catch(error => {
        console.log(error);
    });
}