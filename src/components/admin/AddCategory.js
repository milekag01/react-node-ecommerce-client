import React, {useState} from 'react'
import Layout from '../core/Layout';
import {isAuthenticated} from '../../api/auth/index';
import {Link} from 'react-router-dom';
import {createCategory} from '../../api/apiAdmin';

const AddCategory = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    // destructuring user and token from localStorage
    const {user, token} = isAuthenticated();

    const handleChange = (event) => {
        setError('');
        setSuccess(false);
        setName(event.target.value);
    }

    const clickSubmit = (event) => {
        event.preventDefault();
        setError('');
        setSuccess(false);
        // make request to api to create category
        createCategory(user._id, token, {name}).then(data => {
            if (data.error) {
                setError(true);
            } else {
                setError('');
                setSuccess(true);
            }
        });
    } 
    
    const newCategoryForm = () => (
        <form onSubmit={clickSubmit}>
            <div className="form-group">
                <label className="text-muted">Category Name</label>
                <input required type="text" className="form-control" value={name} onChange={handleChange} autoFocus />
            </div>
            <button className="btn btn-outline-primary">Create Category</button>
        </form>
    )

    const showError = () => (
        <div className="alert alert-danger" style={{display: error ? '' : 'none'}} >
            {name} category already exists
        </div>
    )

    const showSuccess = () => (
        <div className="alert alert-info" style={{display: success ? '' : 'none'}} >
            {name} category created successfully!!!
        </div>
    )

    const goBack = () => (
        <div className="mt-4">
            <Link className="text-danger" to='/admin/dashboard'>&larr; Back to Dashboard</Link>
        </div>
    );

    return (
        <Layout title="Add new category" description={`Hello ${user.name} !!!`}>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showSuccess()}
                    {showError()}
                    {newCategoryForm()}
                    {goBack()}
                </div>
            </div>
        </Layout>
    );
}

export default AddCategory;