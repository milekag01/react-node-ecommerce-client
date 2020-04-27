import React from 'react';
import {Link} from 'react-router-dom';
import ShowImage from './ShowImage';

const Card = ({product}) => {
    return (
        <div className="col-4 mb-3">
            <div className="card">
                {/* <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" class="card-img-top" alt="..." /> */}
                
                <ShowImage item={product} url="product" />
                <div className="card-body">
                    <h4 className="card-title">{product.name}</h4>
                    <p className="card-text">{product.description.substring(0, 50)}</p>
                    <h6>&#8377; {product.price}</h6>
                
                    <Link to='/'>
                        <button className="btn btn-outline-primary mt-2 mb-2 mr-2">
                            View Product
                        </button>
                    </Link>
                    <Link to='/'>
                        <button className="btn btn-right btn-outline-warning mt-2 mb-2">
                            Add to cart
                        </button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Card;