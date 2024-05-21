import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProperty, likeProperty } from '../../actions/propertyActions';

const PropertyList = () => {
  const dispatch = useDispatch();
  const properties = useSelector(state => state.property.properties);

  return (
    <div>
      {properties.map(property => (
        <div key={property._id} className="property">
          <h3>{property.place}</h3>
          <p>{property.area} sq ft</p>
          <p>{property.bedrooms} Bedrooms, {property.bathrooms} Bathrooms</p>
          <p>Nearby: {property.nearby}</p>
          <button onClick={() => dispatch(likeProperty(property._id))} className="btn btn-light">
            <i className="fas fa-thumbs-up"></i> <span>{property.likes.length}</span>
          </button>
          <button onClick={() => dispatch(deleteProperty(property._id))} className="btn btn-danger">
            <i className="fas fa-trash-alt"></i> Delete
          </button>
        </div>
      ))}
    </div>
  );
};


export default PropertyList;

