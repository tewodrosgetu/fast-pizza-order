import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { clearCart, getCart, getTotalPrice } from "../cart/CartSlice";
import EmptyCart from "../cart/EmptyCart"
import Store from "../../Store"
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );


function CreateOrder() {
  const navigation = useNavigation();
  const [withPriority, setWithPriority] = useState(false);
  const isSubmmiting = navigation.state === "submitting";
   const username=useSelector(state=>state.user.username)
  const formError = useActionData();
  const totalcartprice=useSelector(getTotalPrice)
  const priorityPrice=withPriority?totalcartprice*0.2:0;
  const totalPrice=totalcartprice+priorityPrice;

  
  const cart = useSelector(getCart)
 if(!cart)return <EmptyCart/>
  return (
    <div className="px-6 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col  gap-1 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input type="text" name="customer"  required  className="input  grow" defaultValue={username}/>
        </div>

        <div  className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {formError?.phone && <p className="mt-2 rounded-md bg-red-100 text-xs p-2 text-red-700">{formError.phone}</p>}
          </div>
          
        </div>

        <div  className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input type="text" name="address" required className="input w-full" />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
          className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <div>
          <Button disabled={isSubmmiting} type="primary" >
            {isSubmmiting ? "packing now..." : `Order now $${totalPrice}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  const error = {};
  if (!isValidPhone(order.phone))
    error.phone =
      "please give us your correct number .we need it to contact you.";
  if (Object.keys(error).length > 0) return error;
  const newOrder = await createOrder(order);
  Store.dispatch(clearCart())
  return redirect(`/order/${newOrder.id}`);
}
export default CreateOrder;
