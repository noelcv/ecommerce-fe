import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMyOrders } from '../../redux/reducers/order/myOrdersSlice';
import { RootState } from '../../redux/store';
import { getMyOrders } from '../../services/product/product.service';
import * as dayjs from 'dayjs';

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
          
          dispatch(setMyOrders(orders));
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
    <div className="md:ml-10 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 4xl:max-w-4xl m-2.5 p-6 max-h-auto z-10">
      <h2 className="">My Orders</h2>
      <table className="-ml-7 border border-black min-w-fit max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl mb-72">
        <thead>
          <tr>
            <th className="border border-black px-1 text-left">Id</th>
            <th className="border border-black px-1 text-left">Product</th>
            <th className="border border-black px-1 text-left">Price</th>
            <th className="border border-black px-1 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {myOrders.map((order, index) => {
                      
            return (
              <tr key={order.id}>
                <td className="border border-black px-1 text-left">{index + 1}</td>
                <td className="border border-black px-1 text-left">{order.name}</td>
                <td className="border border-black px-1 text-left">{order.price}{order.currency}</td>
                <td className="border border-black px-1 inline-table text-left">{order.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrdersTable;
