import React, { FunctionComponent , useState} from 'react';
import './AddProductForm.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const AddProductForm: FunctionComponent = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [imageURL, setImageURL] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [currency, setCurrency] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  
  return (
    <div className="flex tw-flex-col justify-left items-center my-0 mx-auto w-11/12">
        <form
          className="p-10 mb-10 rounded-lg bg-gray-200 
        shadow-lg flex flex-col justify-center items-center"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
        <h3 className="font-bold text-#242424 text-3xl block">Add new Product</h3>

          <label htmlFor="product-name" className="font-semibold text-lg">
            Product name
            <input
              id="product-name"
              type="text"
              value={name}
              placeholder="product-name"
              onChange={(e) => setName(e.target.value)}
              className="w-60 mb-5 block tw-text-black"
            />
          </label>
          <label htmlFor="product-description" className="font-semibold text-lg">
            Description
            <input
              id="product-description"
              type="text"
              value={description}
              placeholder="product-description"
              onChange={(e) => setDescription(e.target.value)}
              className="w-60 mb-5 block  tw-text-black"
            />
          </label>
          <label htmlFor="product-image" className="font-semibold text-lg">
            Image URL
            <input
              id="product-image"
              type="text"
              value={imageURL}
              placeholder="product-image"
              onChange={(e) => setImageURL(e.target.value)}
              className="w-60 mb-5 block  tw-text-black"
            />
          </label>
          
          <div className="max-w-60 flex">
            
          <label htmlFor="product-price" className="font-semibold text-lg">
            Price
            <input
              id="product-price"
              type="number"
              value={price}
              placeholder="product-price"
              onChange={(e) => setPrice(Number(e.target.value))}
              className="mb-5 space-x-1.5 block tw-text-black"
            />
          </label>
          <label htmlFor="currency" className="font-semibold text-lg">
            Currency
            <select
            value={currency}
            className=" mb-5 ml-3 block tw-text-black"
            onChange={(e) => setCurrency(e.target.value)}>
              <option value="EUR">€</option>
              <option value="USD">$</option>
              <option value="GBP">£</option>
            </select>
          </label>
          </div>
          
          <label htmlFor="category" className="font-semibold text-lg" >
            Category
            <select
            value={category}
            className="mb-5 max-w-60 block tw-text-black"
            onChange={(e) => setCategory(e.target.value)}>
              <option value="course">Course</option>
              <option value="therapy">Therapy</option>
              <option value="onsite-yoga-class">On-Site Yoga Class</option>
              <option value="online-yoga-class">Online Yoga Class</option>
              <option value="performance">Live Performance</option>
              <option value="online-session">Online Session</option>
              <option value="retreat">Retreat</option>
            </select>
          </label>  
          <button className="rounded px-12 py-2.5 text-white text-lg hover:opacity-90 border-none">
            Submit
          </button>
        </form>
    </div>
  );
};

export default AddProductForm;
