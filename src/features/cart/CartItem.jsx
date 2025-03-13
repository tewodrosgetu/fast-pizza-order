import { formatCurrency } from "../../utils/helpers";
import {  useSelector } from "react-redux";
import DeleteItem from "./DeleteItem";
import UpdateCart from "./UpdateCart"
import { getCurrentQuantityById } from "./CartSlice";
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity=useSelector(getCurrentQuantityById(pizzaId))
  return (
    <li className="py-2 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:gap-6">
        <p className="font-bold text-sm">{formatCurrency(totalPrice)}</p>
        <UpdateCart pizzaId={pizzaId} currentQuantity={currentQuantity} />
       <DeleteItem pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
