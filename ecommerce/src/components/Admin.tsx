import React, { FunctionComponent } from 'react';
import AddProductForm from './AddProductForm';
import './Admin.css';
import ProductsDashboard from './ProductsDashboard';

const Admin: FunctionComponent = () => {
  return (
    <div className="flex grid-cols-3">
      <div className="pr-20">
      <h2 className="ml-20 text-3xl">Admin Panel</h2>
      <AddProductForm />
      </div>
      
      <div className="mt-20">
      <ProductsDashboard />  
      </div>
      
      
    </div>
  );
}

export default Admin