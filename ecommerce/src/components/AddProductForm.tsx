import React, { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/reducers/allProductsSlice';
import { updateIsAddingNewProductState } from '../redux/reducers/isAddingNewProductSlice';
import { addNewProduct } from '../services/product';
import { ProductType } from '../types/ProductType';

const AddProductForm: FunctionComponent = () => {
  const dispatch = useDispatch();
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const form = e.currentTarget;
      const formData = form.elements as typeof form.elements & {
        productName: HTMLInputElement;
        productDescription: HTMLInputElement;
        productPrice: HTMLInputElement;
        productCurrency: HTMLInputElement;
        productImage: HTMLInputElement;
        productCategory: HTMLInputElement;
      };

      const newProduct: ProductType = {
        name: formData.productName.value,
        description: formData.productDescription.value,
        price: Number(formData.productPrice.value),
        currency: formData.productCurrency.value,
        image: formData.productImage.value,
        category: formData.productCategory.value,
      };

      await addNewProduct(newProduct);
      dispatch(addProduct(newProduct));

      form.reset();

      console.log('success');
    } catch (err) {
      console.log('Error submitting product', err);
    }
  };

  return (
    <form
      className="grid gap-1 grid-cols-3 items-center justify-center m-5 p-8  max-h-auto z-10 bg-zinc-200  w-56 md:w-72 lg:w-80 xl:w-96 drop-shadow-2xl"
      onSubmit={submitHandler}
    >
      <div className="flex flex-col w-56 md:w-72 lg:w-80 xl:w-96">
        <h3 className="font-bold text-#242424 text-lg md:text-3xl block">
          Add new Product
        </h3>
        <div className="grid col-span">
          <div className="flex flex-col mb-5 mt-2">
            <label htmlFor="productName" className="text-lg">
              Product name
            </label>
            <input
              id="product-name"
              type="text"
              name="productName"
              placeholder="What is the product's name?"
              className="bg-zinc-300 text-zinc-900 font-bold h-10 text-sm pl-1"
              required
            />
          </div>
          <div className="flex flex-col mb-5 mt-2">
            <label htmlFor="product-description" className="text-lg">
              Description
            </label>
            <input
              id="product-description"
              type="text"
              name="productDescription"
              placeholder="What is the product all about?"
              className="bg-zinc-300 text-zinc-900 font-bold h-10 text-sm pl-1"
            />
          </div>
          <div className="flex flex-col mb-5 mt-2">
            <label htmlFor="product-image" className="text-lg">
              Image URL
            </label>
            <input
              id="product-image"
              type="text"
              name="productImage"
              placeholder="Do you have a nice picture?"
              className="bg-zinc-300 text-zinc-900 font-bold h-10 text-sm pl-1"
            />
          </div>
        </div>
        <div className="flex flex-col mb-5 mt-2">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col">
              <label htmlFor="product-price" className="text-lg">
                Price
              </label>
              <input
                id="product-price"
                type="number"
                name="productPrice"
                placeholder="How much is it ?"
                className="bg-zinc-300 text-zinc-900 font-bold h-10 text-sm pl-1"
                required
              />
            </div>
            
          
              <div className="flex flex-col">
                
                <label htmlFor="currency" className="text-lg">
                  Currency
              
              <select
                name="productCurrency"
                className="ml-0 md:ml-3 block bg-zinc-300 text-zinc-900 font-bold h-14 text-sm pl-1"
                required
              >
                <option value="EUR">€</option>
                <option value="USD">$</option>
                <option value="GBP">£</option>
              </select>
              </label>
            
            </div>
          </div>
          <div className="flex flex-col mb-5 mt-2">
          <div className="flex flex-row">
          <label htmlFor="category" className="text-lg">
            Category
            </label>
            </div>
            <select
              name="productCategory"
              className="bg-zinc-300 text-zinc-900 font-bold h-14 text-sm pl-1"
              required
            >
              
              <option value="course">Course</option>
              <option value="therapy">Therapy</option>
              <option value="onsite-yoga-class">On-Site Yoga Class</option>
              <option value="online-yoga-class">Online Yoga Class</option>
              <option value="performance">Live Performance</option>
              <option value="online-session">Online Session</option>
              <option value="retreat">Retreat</option>
            </select>
            </div>
            <div className="mt-2 space-x-2 flex flex-end">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => dispatch(updateIsAddingNewProductState(false))}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded px-12 py-2.5 text-white text-lg hover:opacity-90 border-none"
          >
            Submit
          </button>
        </div>
 
          
        </div>
      </div>
    </form>
  );
};

export default AddProductForm;
