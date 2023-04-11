import Image from "next/image";

// state management
import { CartItem, useCart } from "@/store/store";

// data
import { products } from "@/data";

// components
import AppBar from "@/components/AppBar";
import { useState } from "react";
import Link from "next/link";

type Props = {
  item: CartItem;
};

const CartItemCard = ({ item }: Props) => {
  const removeItemFromCart = useCart((state) => state.removeItemFromCart);
  const changeItemQuantity = useCart((state) => state.changeItemQuantity);

  const [quantity, setQuantity] = useState(item.quantity);

  const quantityOptions = Array.from(Array(10).keys()).map((i) => i + 1);

  const product = products.find((product) => product.id === item.productId);
  if (!product) return null;

  return (
    <div
      key={item.id}
      className="flex w-full flex-row items-start justify-start gap-x-2 py-4"
    >
      <Image
        src={`/images/shoes/${product.id}/${product.productImages[0]}`}
        alt={product.name}
        width={128}
        height={128}
      />
      <div className="flex w-full flex-col">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-start justify-center">
            <span className="text-sm font-light">Gondos</span>
            <span className="font- inline-flex w-full gap-x-4 text-left text-lg">
              {product.name}
            </span>
          </div>
          <button
            onClick={() => removeItemFromCart(item.id)}
            aria-label="remove item from cart"
          >
            <TrashCanSVG />
          </button>
        </div>
        <span className="text-sm">Size: {item.size}</span>
        <div className="my-4 w-20 rounded bg-slate-200 p-2 shadow-inner">
          <select
            className="w-full bg-transparent"
            value={quantity}
            onChange={(e) => {
              setQuantity(Number(e.target.value));
              changeItemQuantity(item.id, Number(e.target.value));
            }}
          >
            {quantityOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <span className="font-bold">{item.price * quantity} SEK</span>
      </div>
    </div>
  );
};

const CartPage = () => {
  const cartItems = useCart((state) => state.items);

  const totalValue = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <AppBar staticBar={true} />
      <div className="flex w-full flex-col items-stretch justify-center bg-white px-4 pt-16 text-shop-text">
        <Link href="/#shop_component" className="py-2" scroll={false}>
          <span className="text-sm">{"<"} Back to shop</span>
        </Link>
        <h1 className="pb-8 text-2xl font-bold">
          Cart ({totalItems} products)
        </h1>
        <div className="flex w-full flex-col items-stretch justify-center gap-y-4 divide-y">
          {cartItems.map((item) => (
            <CartItemCard key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-8 flex w-full flex-col items-end justify-end">
          <span className="text-lg font-bold">Total: {totalValue} SEK</span>
          <button className="my-4 flex w-full justify-center rounded bg-slate-800 px-8 py-3 text-white shadow">
            <span className="text-sm font-bold tracking-wider">
              Proceed to checkout
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

function TrashCanSVG() {
  return (
    <svg fill="#444" viewBox="0 0 555.377 555.378" className="h-6 w-6">
      <g>
        <g>
          <path
            d="M409.442,226.725h-293.76v328.653h293.76V226.725z M193.712,510.497h-15.3V271.605h15.3V510.497z M270.212,510.497h-15.3
			V271.605h15.3V510.497z M346.712,510.497h-15.301V271.605h15.301V510.497z"
          />
          <path
            d="M439.696,165.521l-59.808-34.783l31.897-54.847L281.292,0l-31.897,54.844l-63.633-37.007L155.508,69.86l253.934,147.685
			L439.696,165.521z M292.36,41.836l77.59,45.125l-16.515,28.394L275.842,70.23L292.36,41.836z"
          />
        </g>
      </g>
    </svg>
  );
}

export default CartPage;
