import React, { useState, useEffect } from "react"
import Layout from './Layout';
import BlogCard from './BlogCard'
import Search from './Search';
import image1 from '../images/index.jpg'
import Pagination from '@material-ui/lab/Pagination';

const Blog = () => {

    return (
        <Layout>
            <Search />
            <div className="grid-collection">
                <BlogCard title="How to design effective arts?" img={image1} />
                <BlogCard title="How to design effective arts?" img={image1} />
                <BlogCard title="How to design effective arts?" img={image1} />
                <BlogCard title="How to design effective arts?" img={image1} />
                <BlogCard title="How to design effective arts?" img={image1} />
                <BlogCard title="How to design effective arts?" img={image1} />
                <BlogCard title="How to design effective arts?" img={image1} />
                <BlogCard title="How to design effective arts?" img={image1} />
                <BlogCard title="How to design effective arts?" img={image1} />
            </div>
            <div className="pagination-col">
                <Pagination count={2} defaultPage={1} color="primary" />
            </div>
        </Layout>
    )
}

export default Blog
