import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProperties } from '../../actions/propertyActions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const properties = useSelector(state => state.property.properties);

  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead"><i className="fas fa-user"></i> Welcome to Rentify</p>
      {properties.length > 0 ? (
        <div>
          {properties.map(property => (
            <div key={property._id} className="property">
              <h3>{property.place}</h3>
              <p>{property.area} sq ft</p>
              <p>{property.bedrooms} Bedrooms, {property.bathrooms} Bathrooms</p>
              <p>Nearby: {property.nearby}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No properties found</p>
      )}
    </div>
  );
};

export default Dashboard;
