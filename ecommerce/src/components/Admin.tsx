import React, { FunctionComponent } from 'react';
import AddProductForm from './AddProductForm';
import './Admin.css';

const Admin: FunctionComponent = () => {
  return (
    <div className="admin">
      <h1>Admin Panel</h1>
      <AddProductForm />
      
      
      
    </div>
  );
}

export default Admin