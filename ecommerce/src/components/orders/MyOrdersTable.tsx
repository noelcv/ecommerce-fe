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
  }, [myOrders]);

  return (
    <div className="md:ml-10 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 4xl:max-w-4xl m-2.5 p-6 max-h-auto z-50">
      <h2 className="">My Orders</h2>
      <table className="table-auto md:table-fixed shadow-lg border-collapse border-spacing-y-2">
        <thead className="">
          <tr>
            <th className="overflow-hidden indent-1 whitespace-nowrap border border-slate-600 bg-zinc-200 px-2 py-2 text-left">#</th>
            <th className="overflow-hidden indent-1 whitespace-nowrap border border-slate-600 bg-zinc-200 px-2 py-2 text-left">Product</th>
            <th className="overflow-hidden indent-1 whitespace-nowrap border border-slate-600 bg-zinc-200 px-2 py-2 text-left">Price</th>
            <th className="overflow-hidden indent-1 whitespace-nowrap border border-slate-600 bg-zinc-200 px-2 py-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {myOrders.map((order, index) => {
                      
            return (
              <tr key={order.id} className="hover:bg-zinc-600 hover:text-zinc-200 border-l-0 border-r-0 border-b-2 border-solid border-zinc-300">
                <td className="z-50 text-sm md:text-md lg:text-lg xl:text-xl align-middle px-3 mt-2 text-left">{index + 1}</td>
                <td className="z-50 text-sm md:text-md lg:text-lg xl:text-xl align-middle px-3 mt-2 text-left font-medium">{order.name}</td>
                <td className="z-50 text-sm md:text-md lg:text-lg xl:text-xl align-middle px-3 mt-2 text-left">{order.price}{order.currency}</td>
                <td className="z-50 text-sm md:text-md lg:text-lg xl:text-xl align-middle px-3 mt-2 text-left">{order.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrdersTable;
