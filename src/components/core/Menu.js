import React from 'react'
import {Link, withRouter} from 'react-router-dom';
import {signout, isAuthenticated} from '../../api/auth/index';

const isActive = (history, path) => {
    if(history.location.pathname === path) {
        return {color: '#fff'}
    } else {
        return {color: '#96b7ff'}
    }
}

const Menu = ({history}) => {
    return (
        <div>
            <ul className="nav nav-tabs bg-primary">
                <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
                </li>
                
                <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, '/shop')} to="/shop">Shop</Link>
                </li>

                {isAuthenticated() && isAuthenticated().user.role === 0 && (
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/user/dashboard')} to="/user/dashboard">Dashboard</Link>
                    </li>
                )}

                {isAuthenticated() && isAuthenticated().user.role === 1 && (
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/admin/dashboard')} to="/admin/dashboard">Dashboard</Link>
                    </li>
                )}

                {!isAuthenticated() && (
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/signin')} to="/signin">Sign In</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/signup')} to="/signup">Sign Up</Link>
                        </li>
                    </>
                )}
                {isAuthenticated() && (
                    <li className="nav-item">
                        <span 
                            className="nav-link" 
                            style={{cursor: 'pointer', color: '#fff'}} 
                            onClick={() => 
                                signout(() => {
                                    history.push('/')
                                })
                            }    
                        >Sign Out</span>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default withRouter(Menu);    // withRouter gives us access to history
