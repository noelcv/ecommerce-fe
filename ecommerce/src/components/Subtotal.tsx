import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetBasket } from '../redux/reducers/product/basketSlice';
import { resetBasketCounter } from '../redux/reducers/product/counterSlice';
import { resetSubtotal } from '../redux/reducers/product/subtotalSlice';
import { RootState } from '../redux/store';

const Subtotal: FunctionComponent = () => {
  const items = useSelector((state: RootState) => state.counter.value);
  const subtotal = useSelector((state: RootState) => state.subtotal.value);
  const products = useSelector((state: RootState) => state.basket.value);

  const dispatch = useDispatch()
  
  //TODO: make it async and add payment middleware
  const completeOrder = () => {
    try {
      
      //TODO: dispatch products to DB
      // const order = await setOrder(products, subtotal)
      // console.log("Products to order: ", products);
      // if (order) {
        
      //   dispatch(resetBasket())
      //   dispatch(resetBasketCounter())
      //   dispatch(resetSubtotal())
      //   //TODO: dispatch Success Order UI
      // }
    } catch (err) {
      console.log('❌ Error completing order', err)
    }
  }
  
  return (
    <div className="flex flex-col space-x-2 w-60 md:w-96 bg-slate-100 border-gray-200 shadow-lg border-solid p-2 rounded-sm">
      <p>Subtotal({items} items):</p>
      <strong>{subtotal} EUR</strong>
      <button
      onClick={completeOrder}
      className="bg-zinc-800">Proceed to checkout</button>
    </div>
  )
};

export default Subtotal;
