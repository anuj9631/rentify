import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProperty } from '../../actions/propertyActions';

const AddProperty = () => {
  const [formData, setFormData] = useState({
    place: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    nearby: '',
  });

  const { place, area, bedrooms, bathrooms, nearby } = formData;
  const dispatch = useDispatch();

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    dispatch(addProperty(formData));
  };

  return (
    <div className="container">
      <h1 className="large text-primary">Add Property</h1>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Place" name="place" value={place} onChange={onChange} required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Area (sq ft)" name="area" value={area} onChange={onChange} required />
        </div>
        <div className="form-group">
          <input type="number" placeholder="Bedrooms" name="bedrooms" value={bedrooms} onChange={onChange} required />
        </div>
        <div className="form-group">
          <input type="number" placeholder="Bathrooms" name="bathrooms" value={bathrooms} onChange={onChange} required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Nearby (hospitals, colleges, etc.)" name="nearby" value={nearby} onChange={onChange} required />
        </div>
        <input type="submit" className="btn btn-primary" value="Add Property" />
      </form>
    </div>
  );
};

export default AddProperty;
