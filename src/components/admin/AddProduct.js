import React, {useState, useEffect} from 'react'
import Layout from '../core/Layout';
import {isAuthenticated} from '../../api/auth/index';
import {Link} from 'react-router-dom';
import {createProduct, getCategories} from '../../api/apiAdmin';
// import Resizer from 'react-image-file-resizer';

const AddProduct = () => {

    const {user, token} = isAuthenticated();
    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        categories: [],
        category: '',
        shipping: '',
        quantity: '',
        photo: '',
        loading: false,
        error: '',
        createdProduct: '',
        redirectToProfile: false,
        formData: ''
    })

    // destructuring
    const {
        name,
        description,
        price,
        categories,
        category,
        shipping,
        quantity,
        photo,
        loading,
        error,
        createdProduct,
        redirectToProfile,
        formData } = values;

    // load categories and set form data
    const init = () => {
        getCategories().then(data => {
            if(data.error) {
                setValues({...values, error: data.error})
            } else {
                setValues({...values, categories: data, formData: new FormData()})
            }
        })
    }

    useEffect(() => {
        init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value;
        // resize image
        // const value = '';
        // if(name==='photo') {
        //     Resizer.imageFileResizer(
        //         event.target.files[0],
        //         250,
        //         250,
        //         'JPEG',
        //         100,
        //         0,
        //         uri => {
        //             value = uri
        //         }, 'base64'
        //     );
        // } else {
        //     value = event.target.value;
        // }
        formData.set(name, value);
        setValues({...values, [name]: value, error: ''});
    }

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error: '', loading: true});

        createProduct(user._id, token, formData).then(data => {
            if(data.error) {
                setValues({...values, error: data.error})
            } else {
                setValues({
                    ...values,
                    name: '',
                    description: '',
                    photo: '',
                    quantity: '',
                    price: '',
                    error: '',
                    // formData: '',
                    loading: false,
                    createdProduct: data
                })
            }
        })
    }

    const newPostForm = () => (
        <form onSubmit={clickSubmit}>
            <h4>Post Photo</h4>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*" />
                </label>
            </div>

            <div className="form-group">
                <label className="text-muted">Name</label>
                <input type="text" value={name} onChange={handleChange('name')} className="form-control"/>
            </div>
            
            <div className="form-group">
                <label className="text-muted">Description</label>
                <textarea type="text" value={description} onChange={handleChange('description')} className="form-control"/>
            </div>
            
            <div className="form-group">
                <label className="text-muted">Price</label>
                <input type="number" value={price} onChange={handleChange('price')} className="form-control"/>
            </div>
            
            <div className="form-group">
                <label className="text-muted">Category</label>
                <select onChange={handleChange('category')} className="form-control">
                    <option>Please select</option>
                    {categories.map((c,i) => (
                        <option key={i} value={c._id}>{c.name}</option>
                    ))}
                </select>
            </div>
            
            <div className="form-group">
                <label className="text-muted">Quantity</label>
                <input type="number" value={quantity} onChange={handleChange('quantity')} className="form-control"/>
            </div>

            <div className="form-group">
                <label className="text-muted">Shipping</label>
                <select onChange={handleChange('shipping')} className="form-control">
                    <option>Please select</option>
                    <option value="0">NO</option>
                    <option value="1">YES</option>
                </select>
            </div>
            
            <button className="btn btn-outline-primary">
                Create Product
            </button>
        </form>
    )

    const showError = () => (
        <div className="alert alert-danger" style={{display: error ? '' : 'none'}} >
            {error}
        </div>
    )

    const showSuccess = () => (
        <div className="alert alert-info" style={{display: createdProduct ? '' : 'none'}} >
            {/* {console.log(createdProduct)} */}
            <strong>{createdProduct.name}</strong> created successfully!!!
        </div>
    )
    
    const showLoading = () => loading && (
        <div className="alert alert-success">
            Loading...
        </div>
    )

    const goBack = () => (
        <div className="mt-3 mb-5">
            <Link className="text-danger" to='/admin/dashboard'>Back to Dashboard &larr;</Link>
        </div>
    );

    return (
        <Layout title="Add new Product" description={`Hello ${user.name} !!!`} className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showSuccess()}
                    {showLoading()}
                    {showError()}
                    {newPostForm()}
                    {goBack()}
                </div>
            </div>
        </Layout>
    );
}

export default AddProduct;