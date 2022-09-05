import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allProducts } from '../redux/reducers/allProductsSlice';
import { RootState } from '../redux/store';
import { deleteProduct, getAllProducts } from '../services/product';
import { ProductType } from '../types/ProductType';
import { editProduct } from '../services/product';
import { updateProduct } from '../redux/reducers/productSlice';
import { updateEditingState } from '../redux/reducers/isEditingSlice';

const EditProduct: FunctionComponent = () => {
  
  const editableProduct = useSelector((state: RootState) => state.product.value);
  const isEditing = useSelector((state: RootState) => state.isEditing.value);
  const dispatch = useDispatch();
  
  const cancelHandler = () => {
    dispatch(updateEditingState(false))    
  };
  
  console.log(editableProduct, "editableProduct before")
  
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
    
    event.preventDefault();
    //Typechecking
    const form = event.currentTarget;
    const formData = form.elements as typeof form.elements & {
      editedNameInput: HTMLInputElement;
      editedDescriptionInput: HTMLInputElement;
      editedPriceInput: HTMLInputElement;
      editedCurrencyInput: HTMLInputElement;
      editedImageInput: HTMLInputElement;
      editedCategoryInput: HTMLInputElement;
    }
 

    
    const editedProduct: ProductType = {
      id: editableProduct.id,
      name: formData.editedNameInput.value,
      description: formData.editedDescriptionInput.value,
      price: Number(formData.editedPriceInput.value),
      currency: formData.editedCurrencyInput.value,
      image: formData.editedImageInput.value,
      category: formData.editedCategoryInput.value,
    }
    
    console.log(editedProduct, 'editedProduct after experience')

      const submittedProduct = await editProduct(editedProduct);
      console.log(submittedProduct, 'submittedProduct after experience')
      console.log('success');
      
      dispatch(updateEditingState(false))
      return submittedProduct;
    
    } catch (err) {
    console.log('Error saving edited product', err);
    console.log(err);
    }
  
    
    
  }
  
  
  return (
    <form className="grid gap-1 grid-cols-3 items-center justify-center m-5 p-8  max-h-auto z-10 bg-zinc-200  w-full"
    onSubmit={submitHandler}
    >
    <div className="grid">
      <img
        src={editableProduct.image}
        alt=""
        className="flex max-h-48 min-w-min max-w-full"
      />
    </div>
    <div className="grid col-span-2">
      <div className="flex flex-col mb-5 mt-2">
        <label htmlFor="editedNameInput" className="text-lg">
          Product Name
        </label>
        <input
          className="bg-zinc-300 text-zinc-900 font-bold h-10"
          id="editableProduct-name"
          defaultValue={editableProduct.name}
          name="editedNameInput"
          />
      </div>
      <div className="flex flex-col mb-5 mt-2">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <label
              htmlFor="editedPriceInput"
              className="text-lg"
            >
              Price
            </label>
            <input
              className="bg-zinc-300 text-zinc-900 font-bold h-10"
              id="editableProduct-price"
              defaultValue={editableProduct.price.toString()}
              name="editedPriceInput"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="editedCurrencyInput" className="text-lg">
              Currency
              <select
                defaultValue={editableProduct.currency}
                className="ml-3 block bg-zinc-300 text-zinc-900 font-bold h-12"
                name="editedCurrencyInput"
              >
                <option value="EUR">€</option>
                <option value="USD">$</option>
                <option value="GBP">£</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-5 mt-2">
        <label
          htmlFor="editedDescriptionInput"
          className="text-lg"
        >
          Description
        </label>
        <input
          className="bg-zinc-300 text-zinc-900 font-bold h-10"
          id="editableProduct-description"
          defaultValue={editableProduct.description}
          name="editedDescriptionInput"
        />
      </div>
      <div className="flex flex-col mb-5 mt-2">
        <label htmlFor="editedImageInput" className="text-lg">
          Image
        </label>
        <input
          className="bg-zinc-300 text-zinc-900 font-bold h-10"
          id="editableProduct-imageUrl"
          defaultValue={editableProduct.image}
          name="editedImageInput"
        />
      </div>
      <div className="flex flex-col mb-5 mt-2">
        <div className="flex flex-row">
          <label htmlFor="editedCategoryInput" className="text-lg">
            Category
          </label>
        </div>
        <select
          defaultValue={editableProduct.category}
          className="bg-zinc-300 text-zinc-900 font-bold h-10 mr-80"
          name="editedCategoryInput"
        >
          <option value="course">Course</option>
          <option value="therapy">Therapy</option>
          <option value="onsite-yoga-class">
            On-Site Yoga Class
          </option>
          <option value="online-yoga-class">Online Yoga Class</option>
          <option value="performance">Live Performance</option>
          <option value="online-session">Online Session</option>
          <option value="retreat">Retreat</option>
        </select>
      </div>
      <div className="mt-2 space-x-2 flex flex-end">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => cancelHandler()}
        >
          Cancel
        </button>

        <button
          className="bg-zinc-900 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded mr-2"
          type="submit"
        >
          Save
        </button>
      </div>
    </div>
  </form>
  )
}

export default EditProduct;


