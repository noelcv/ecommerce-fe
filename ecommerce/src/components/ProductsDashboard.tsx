import { FunctionComponent, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allProducts } from '../redux/reducers/allProductsSlice';
import { RootState } from '../redux/store';
import { deleteProduct, getAllProducts } from '../services/product';
import { ProductType } from '../types/ProductType';
import ProductComponent from './ProductComponent';
import { editProduct } from '../services/product';

const ProductsDashboard: FunctionComponent = () => {
  const products = useSelector((state: RootState) => state.allProducts.value);
  const dispatch = useDispatch();
  //TODO: create edit button / service /reducer
  const [isEditing, setIsEditing] = useState(false);
  const [editableProduct, setEditableProduct] = useState<ProductType>();
  const [editedProductName, setEditedProductName] = useState<string>(
    editableProduct?.name || ''
  );
  const [editedDescription, setEditedDescription] = useState<string>(
    editableProduct?.description || ''
  );
  const [editedImageURL, setEditedImageURL] = useState<string>(
    editableProduct?.image || ''
  );
  const [editedPrice, setEditedPrice] = useState<number>(
    editableProduct?.price || 0
  );
  const [editedCurrency, setEditedCurrency] = useState<string>(
    editableProduct?.currency || ''
  );
  const [editedCategory, setEditedCategory] = useState<string>(
    editableProduct?.category || ''
  );

  const getProductsList = async () => {
    try {
      const products = await getAllProducts();
      dispatch(allProducts(products));
    } catch (err) {
      console.log('Error getting Products List', err);
    }
  };

  const editHandler = (product: ProductType) => {
    setIsEditing(!isEditing);
    setEditableProduct(product);

  };

  const saveHandler = async () => {
    try {
      console.log("we're in saveHandler");
      console.log("yeah")
      let selectedName;
      let selectedDescription;
      let selectedImageURL;
      let selectedPrice;
      let selectedCurrency;
      let selectedCategory;
      console.log("selectedName before", selectedName);
      console.log("selectedDescription before", selectedDescription);
      console.log("selectedImageURL before", selectedImageURL);
      console.log("selectedPrice before", selectedPrice);
      console.log("selectedCurrency before", selectedCurrency);
      console.log("selectedCategory before", selectedCategory);
      
      console.log("yeah")

      if (editedProductName && editedProductName.length === 0) {
        selectedName = editableProduct?.name;
      } else {
        selectedName = editedProductName;
      }

      if (editedDescription.length === 0) {
        selectedDescription = editableProduct?.description;
      } else {
        selectedDescription = editedDescription;
      }
      
      if (editedImageURL.length === 0) {
        selectedImageURL = editableProduct?.image;
      } else {
        selectedImageURL = editedImageURL;
      }

      if (editedPrice === 0) {
        selectedPrice = editableProduct?.price;
      } else {
        selectedPrice = editedPrice;
      }

      if (editedCurrency === '') {
        selectedCurrency = editableProduct?.currency;
      } else {
        selectedCurrency = editedCurrency;
      }

      if (editedCategory === '') {
        selectedCategory = editableProduct?.category;
      } else {
        selectedCategory = editedCategory;
      }
      console.log("selectedName after", selectedName);
      console.log("selectedDescription after", selectedDescription);
      console.log("selectedImageURL after", selectedImageURL);
      console.log("selectedPrice after", selectedPrice);
      console.log("selectedCurrency after", selectedCurrency);
      console.log("selectedCategory after", selectedCategory);
    //TODO: the problem is here ll-104
      if (
        selectedName &&
        selectedDescription &&
        selectedImageURL &&
        selectedPrice &&
        selectedCurrency &&
        selectedCategory
      ) {
        const editedProduct: ProductType = {
          id: editableProduct?.id,
          name: selectedName,
          description: selectedDescription,
          image: selectedImageURL,
          price: selectedPrice,
          currency: selectedCurrency,
          category: selectedCategory,
        };
        
        console.log(editedProduct, 'editedProduct at saveHandler');
     
        if (editedProduct) {
          const submittedProduct = await editProduct(editedProduct);
          console.log(submittedProduct);
          return submittedProduct;
        }
        console.log('success');
      } else {
        console.log('the problem is is in this assembling block')
      }
      
      setEditedProductName('');
      setEditedDescription('');
      setEditedImageURL('');
      setEditedPrice(0);
      setEditedCurrency('');
      setEditedCategory('');
      setIsEditing(!isEditing);
      
    } catch (err) {
      console.log('Error saving edited product', err);
      console.log(err);
    }
  };

  const cancelHandler = () => {
    setIsEditing(!isEditing);
  };

  const deleteHandler = async (product: ProductType) => {
    try {
      console.log(product, 'product to delete');
      const deleted = await deleteProduct(product);
      if (deleted) {
        console.log('deleted successfully', deleted);
      }
    } catch (err) {
      console.log('Error at deleteHandler: ', err);
    }
  };

  useEffect(() => {
    if (products) {
      getProductsList();
      console.log('products', products);
    }
  }, []);

  return (
    <div className="flex justify-center mx-auto -mt-5 max-w-screen min-w-sm">
      <div className="max-w-screen min-w-sm">
        <div className="grid grid-cols-2 max-w-screen min-w-sm mx-px w-full">
          {!isEditing &&
            products.map((product, index) => {
              return (
                <div
                  className="grid gap-1 grid-cols-2 items-center justify-center m-5 p-8 max-h-auto z-10 bg-zinc-200 hover:bg-zinc-300  min-w-min max-w-prose"
                  key={index}
                >
                  <img
                    src={product.image}
                    alt=""
                    className="flex max-h-48 min-w-min max-w-full"
                  />
                  <div className="product-info-result">
                    <div className="img-wrapper"></div>
                    <div className="product-result-details">
                      <h3 className="product-name-result">{product.name}</h3>
                      <div className="product-rating">
                        {Array(product.rating)
                          .fill(0)
                          .map((_, i) => {
                            return <p key={i}>⭐</p>;
                          })}
                      </div>
                      <div className="product-price">
                        <small>{product.currency}</small>
                        <strong>{product.price}</strong>
                      </div>

                      <button
                        className="bg-zinc-900 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={() => editHandler(product)}
                      >
                        Edit
                      </button>

                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => deleteHandler(product)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          {isEditing && editableProduct && (
            <form className="grid gap-1 grid-cols-3 items-center justify-center m-5 p-8  max-h-auto z-10 bg-zinc-200  w-full">
              <div className="grid">
                <img
                  src={editableProduct.image}
                  alt=""
                  className="flex max-h-48 min-w-min max-w-full"
                />
              </div>
              <div className="grid col-span-2">
                <div className="flex flex-col mb-5 mt-2">
                  <label htmlFor="editableProduct-name" className="text-lg">
                    Product Name
                  </label>
                  <input
                    className="bg-zinc-300 text-zinc-900 font-bold h-10"
                    id="editableProduct-name"
                    defaultValue={editableProduct.name}
                    onChange={(e) => setEditedProductName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col mb-5 mt-2">
                  <div className="flex flex-row">
                    <div className="flex flex-col">
                      <label
                        htmlFor="editableProduct-price"
                        className="text-lg"
                      >
                        Price
                      </label>
                      <input
                        className="bg-zinc-300 text-zinc-900 font-bold h-10"
                        id="editableProduct-price"
                        defaultValue={editableProduct.price.toString()}
                        onChange={(e) => setEditedPrice(Number(e.target.value))}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="currency" className="text-lg">
                        Currency
                        <select
                          defaultValue={editableProduct.currency}
                          className="ml-3 block bg-zinc-300 text-zinc-900 font-bold h-12"
                          onChange={(e) => setEditedCurrency(e.target.value)}
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
                    htmlFor="editableProduct-description"
                    className="text-lg"
                  >
                    Description
                  </label>
                  <input
                    className="bg-zinc-300 text-zinc-900 font-bold h-10"
                    id="editableProduct-description"
                    defaultValue={editableProduct.description}
                    onChange={(e) => setEditedDescription(e.target.value)}
                  />
                </div>
                <div className="flex flex-col mb-5 mt-2">
                  <label htmlFor="editableProduct-imageUrl" className="text-lg">
                    Image
                  </label>
                  <input
                    className="bg-zinc-300 text-zinc-900 font-bold h-10"
                    id="editableProduct-imageUrl"
                    defaultValue={editableProduct.image}
                    onChange={(e) => setEditedImageURL(e.target.value)}
                  />
                </div>
                <div className="flex flex-col mb-5 mt-2">
                  <div className="flex flex-row">
                    <label htmlFor="category" className="text-lg">
                      Category
                    </label>
                  </div>
                  <select
                    defaultValue={editableProduct.category}
                    className="bg-zinc-300 text-zinc-900 font-bold h-10 mr-80"
                    onChange={(e) => setEditedCategory(e.target.value)}
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
                    onClick={saveHandler}
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsDashboard;
