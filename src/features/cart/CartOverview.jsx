import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice, getTotalQuantity } from "./CartSlice";

function CartOverview() {
  const totalquantity = useSelector(getTotalQuantity)
  const totalprice = useSelector(getTotalPrice)
  if(!totalquantity) return null;
  return (
    <div className="bg-stone-800 text-sm md:text-base text-stone-200 uppercase px-4 py-4 sm:px-6 flex items-center justify-between">
      <p className="text-stone-300 space-x-4 sm:space-x-6">
        <span>{totalquantity} pizzas</span>
        <span>${totalprice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
