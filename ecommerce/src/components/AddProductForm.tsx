import React, { FunctionComponent, useState } from 'react';
import { addNewProduct } from '../services/product';
import { ProductType } from '../types/ProductType';

const AddProductForm: FunctionComponent = () => {
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
      
      form.reset();

      console.log('success');
    } catch (err) {
      console.log('Error submitting product', err);
    }
  };

  return (
    <div className="flex tw-flex-col justify-left items-center my-0 mx-auto w-11/12">
      <form
        className="p-10 mb-10 rounded-lg bg-gray-200 
        shadow-lg flex flex-col justify-center items-center"
        onSubmit={submitHandler}
      >
        <h3 className="font-bold text-#242424 text-3xl block">
          Add new Product
        </h3>

        <label htmlFor="productName" className="font-semibold text-lg">
          Product name
          <input
            id="product-name"
            type="text"
            name="productName"
            placeholder="what is your product name?"
            className="w-60 mb-5 block text-black"
            required
          />
        </label>
        <label htmlFor="product-description" className="font-semibold text-lg">
          Description
          <input
            id="product-description"
            type="text"
            name="productDescription"
            placeholder="What is the product all about?"
            className="w-60 mb-5 block text-black"
          />
        </label>
        <label htmlFor="product-image" className="font-semibold text-lg">
          Image URL
          <input
            id="product-image"
            type="text"
            name="productImage"
            placeholder="Do you have a nice picture?"
            className="w-60 mb-5 block text-black"
          />
        </label>

        <div className="max-w-60 flex">
          <label htmlFor="product-price" className="font-semibold text-lg">
            Price
            <input
              id="product-price"
              type="number"
              name="productPrice"
              placeholder="How much is it ?"
              className="mb-5 space-x-1.5 block text-black"
              required
            />
          </label>
          <label htmlFor="currency" className="font-semibold text-lg">
            Currency
            <select
              name="productCurrency"
              className=" mb-5 ml-3 block tw-text-black"
              required
            >
              <option value="EUR">€</option>
              <option value="USD">$</option>
              <option value="GBP">£</option>
            </select>
          </label>
        </div>

        <label htmlFor="category" className="font-semibold text-lg">
          Category
          <select
            name="productCategory"
            className="mb-5 max-w-60 block text-black"
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
        </label>
        <button
          type="submit"
          className="rounded px-12 py-2.5 text-white text-lg hover:opacity-90 border-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
