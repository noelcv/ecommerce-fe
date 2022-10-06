import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetBasket } from '../redux/reducers/product/basketSlice';
import { resetBasketCounter } from '../redux/reducers/product/counterSlice';
import { resetSubtotal } from '../redux/reducers/product/subtotalSlice';
import { RootState } from '../redux/store';
import { setOrder } from '../services/product/product.service';

const Subtotal: FunctionComponent = () => {
  const items = useSelector((state: RootState) => state.counter.value);
  const subtotal = useSelector((state: RootState) => state.subtotal.value);
  const products = useSelector((state: RootState) => state.basket.value);
  const isAuthUser = useSelector((state: RootState) => state.createUser.value.id);

  const dispatch = useDispatch()
  
  //TODO: make it async and add payment middleware
  const completeOrder = async () => {
    try {
      
      //TODO: get uid from auth
      //TODO: dispatch products to DB 
      if (isAuthUser){

        console.log('products before hitting graphql', products)
        const order = await setOrder(isAuthUser, products)
        console.log("order inside Subtotal action:",order)
        if (order) {
          
          dispatch(resetBasket())
          dispatch(resetBasketCounter())
          dispatch(resetSubtotal())
          //TODO: dispatch Success Order UI
        }
      }
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
