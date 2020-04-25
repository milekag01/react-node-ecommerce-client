import React, {useState} from 'react';
import Layout from '../core/Layout';
import {Link} from 'react-router-dom';

import {signup} from '../../api/auth/index';
// import {API} from '../../config';

const Signup = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false,
    })

    const {name, email, password, success, error} = values;

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
        // setValues({...values, error: ''});

        signup({name,email,password}).then(data => {
            if(data.error) {
                setValues({
                    ...values,
                    error: data.error,
                    success: false
                })
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    success: true
                })
            }
        })
    }

    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input value={name} onChange={handleChange('name')} type="text" className="form-control"/>
            </div>

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

    const showSuccess = () => (
        <div className="alert alert-info" style={{display: success ? '' : 'none'}} >
            New account created successfully! Please <Link to='/signin'>login</Link> to start shopping!!!
        </div>
    )

    return (
        <Layout title="SignUp" description="SignUp for Vesper" className="container col-md-8 offset-md-2">
            <div style={{width: '50%', margin: '0 auto'}}>
                {showSuccess()}
                {showError()}
                {signUpForm()}
            </div>
        </Layout>
    );
}

export default Signup;
