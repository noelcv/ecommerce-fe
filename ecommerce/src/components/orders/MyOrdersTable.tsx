import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMyOrders } from '../../redux/reducers/order/myOrdersSlice';
import { RootState } from '../../redux/store';
import { getMyOrders } from '../../services/product/product.service';

const MyOrdersTable: FunctionComponent = () => {
  const dispatch = useDispatch();
  const isAuthUser = useSelector((state: RootState) => state.createUser.value.id);
  const uid = useSelector((state: RootState) => state.createUser.value.uid);
  const myOrders = useSelector((state: RootState) => state.myOrders.value);
  
  console.log("myOrders inside myOrdersTable from redux store", myOrders)

  const fetchOrders = async () => {
    try {
      if (isAuthUser && uid) {
        const orders = await getMyOrders(uid);
        if (orders) {
          console.log("orders inside fetchOrders", orders);
          dispatch(setMyOrders(orders));
          //TODO: dispatch orders to redux store
        }
      }
    } catch (err) {
      console.log('Error fetching orders', err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <h2>My Orders Table</h2>
    </>
  );
};

export default MyOrdersTable;
