import React, {useState} from 'react';
import Layout from '../core/Layout';
// import {Redirect} from 'react-router-dom';

import {signin, authenticate, isAuthenticated} from '../../api/auth/index';
import { Redirect } from 'react-router-dom';
// import {API} from '../../config';

const Signin = () => {

    const [values, setValues] = useState({
        email: 'milek@gmail.com',
        password: 'qwerty123',
        error: '',
        loading: false,
        redirectToReferrer: false
    })

    const {email, password, loading, error, redirectToReferrer} = values;
    const {user} = isAuthenticated();

    // name = name, email, password
    const handleChange = name => event => {
        setValues({
            ...values,
            error: '',
            [name]: event.target.value
        });
    } 

    // const signup = (user) => {
    //     // console.log(user);
    //     return fetch(`${API}/signup`, {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     }).then(response => {
    //         return response.json()
    //     }).catch(error => {
    //         console.log(error);
    //     });
    // }

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error: '', loading: true});

        signin({email,password}).then(data => {
            if(data.error) {
                setValues({
                    ...values,
                    error: data.error,
                    loading: false
                })
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    })
                })
            }
        })
    }

    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input value={email} onChange={handleChange('email')} type="email" className="form-control"/>
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input value={password} onChange={handleChange('password')} type="password" className="form-control"/>
            </div>
            <button onClick={clickSubmit} style={{width: '100%', marginTop: '15px'}} className="btn btn-primary">Submit</button>
        </form>
    )

    const showError = () => (
        <div className="alert alert-danger" style={{display: error ? '' : 'none'}} >
            {error}
        </div>
    )

    const showLoading = () => loading && (
        <div className="alert alert-info">
            Loading...
        </div>
    );

    const redirectUser = () => {
        if(redirectToReferrer) {
            if(user && user.role === 1) {
                return <Redirect to='/admin/dashboard' />
            } else {
                return <Redirect to='/user/dashboard' />
            }
        }
        // user try to access any admin links, redirect him
        if(isAuthenticated()) {
            return <Redirect to='/' />
        }
    }
    

    return (
        <Layout title="SignIn" description="SignIn to Vesper" className="container col-md-8 offset-md-2">
            <div style={{width: '50%', margin: '0 auto'}}>
                {showLoading()}
                {showError()}
                {signUpForm()}
                {redirectUser()}
            </div>
        </Layout>
    );
}

export default Signin;
