import React from 'react';
import {API} from '../../config';

const ShowImage = ({item, url}) => (
    <img 
        src={`${API}/${url}/photo/${item._id}`} 
        alt={item.name} 
        className="card-img-top"   
        style={{maxHeight: '300px', maxWidth: '100%'}}
    />
    // <div className="product-img">
    //     <img 
    //         src={`${API}/${url}/photo/${item._id}`} 
    //         alt={item.name} 
    //         className="mb-3"
    //         style={{maxHeight: '100%', maxWidth: '100%'}}    
    //     />    
    // </div>
);

export default ShowImage;