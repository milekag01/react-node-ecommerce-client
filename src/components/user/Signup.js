import React from 'react';
import Layout from '../core/Layout';
import {API} from '../../config';

const Signup = () => {
    return (
        <Layout title="SignUp" description="SignUp to Vesper">
            {API}
        </Layout>
    );
}

export default Signup;
