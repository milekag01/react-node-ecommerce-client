import React from 'react'
import {Link, withRouter} from 'react-router-dom';

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
                    <Link className="nav-link" style={isActive(history, '/signin')} to="/signin">SignIn</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, '/signup')} to="/signup">SignUp</Link>
                </li>
            </ul>
        </div>
    )
}

export default withRouter(Menu);    // withRouter gives us access to history
