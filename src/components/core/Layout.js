import React from 'react';
import Menu from './Menu';
import styles from '../../styles.css';

const Layout = ({title='Title',description='Description', className, children}) => {
    return (
        <div>
            <Menu />
            <div className="jumbotron">
                <h1>{title}</h1>
                <p className="lead">{description}</p>
            </div>
            <div className={className}>{children}</div>
        </div>
    )
}

export default Layout;