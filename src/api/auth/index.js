import {API} from '../../config';
// import {API} from '../../config';

export const signup = (user) => {
    // console.log(user);
    return fetch(`${API}/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json()
    }).catch(error => {
        console.log(error);
    });
}

export const signin = (user) => {
    // console.log(user);
    return fetch(`${API}/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json()
    }).catch(error => {
        console.log(error);
    });
}

// save auth token and data to localstorage for further use
export const authenticate = (data, next) => {
    if(typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data));
        next();
    }
}

export const signout = next => {
    if(typeof window !== 'undefined') {
        
        localStorage.removeItem('jwt');
        next();

        return fetch(`${API}/signout`, {
            method: 'GET'
        }).then(response => {
            console.log('Signout successful', response);
        }).catch(error => console.log(error));
    }
}

export const isAuthenticated = () => {
    if(typeof window == 'undefined') {
        return false;
    }
    if(localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'));
    } else {
        return false;
    }
}

