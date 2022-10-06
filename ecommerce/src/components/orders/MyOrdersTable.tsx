import { FunctionComponent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getMyOrders } from '../../services/product/product.service';

const MyOrdersTable: FunctionComponent = () => {
  const isAuthUser = useSelector(
    (state: RootState) => state.createUser.value.id
  );
  const uid = useSelector((state: RootState) => state.createUser.value.uid);

  const fetchOrders = async () => {
    try {
      if (isAuthUser && uid) {
        const orders = await getMyOrders(uid);
        if (orders) {
          console.log("orders inside fetchOrders", orders);
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
