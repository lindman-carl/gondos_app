import { useEffect, useState } from "react";
import Link from "next/link";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// components
import ColorBadge from "@/components/Shop/ColorBadge";

// data
import { Product } from "@/data";
import { useCart } from "@/store/store";

// dev data
const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45];

const Card = ({ name, id, colors, marketingImages }: Product) => {
  const [autoPlay, setAutoPlay] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // size
  const [size, setSize] = useState(36);

  // cart
  const { addItemToCart, items, changeItemQuantity } = useCart();
  // const addItemToCart = useCart((state) => state.addItemToCart);

  // autoplay the carousel when the card is in the view
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(id);
      const rect = element?.getBoundingClientRect();
      if (rect) {
        // the card is in the view when the top of the card is above the middle of the screen
        // and the bottom of the card is below the middle of the screen
        if (
          rect.top < window.innerHeight / 2 &&
          rect.bottom > window.innerHeight / 2
        ) {
          setAutoPlay(true);
        } else {
          setAutoPlay(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // handlers
  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    // check if item is already in cart
    // if item is already in cart, increase quantity by 1
    // if item is not in cart, add it to cart
    const item = items.find(
      (item) => item.productId === id && item.size === size
    );
    if (item) {
      console.log("item already in cart");
      changeItemQuantity(item.id, item.quantity + 1);
    } else {
      addItemToCart(id, size, 1);
    }
  };

  return (
    <div
      id={id}
      className="anchor-offset my-4 flex flex-col items-center justify-center rounded-lg bg-slate-50 text-shop-text shadow-md"
    >
      <div className="relative flex h-[80vw] w-[80vw] flex-col items-center justify-center rounded-lg ">
        <Carousel
          showThumbs={false}
          className="h-[80vw] w-[80vw]"
          autoPlay={autoPlay}
          showStatus={false}
          infiniteLoop
          interval={3000}
          showIndicators={false}
          showArrows={false}
          onChange={(index) => {
            setCurrentIndex(index);
          }}
        >
          {marketingImages &&
            marketingImages.map((image, index) => (
              <div key={index} className="h-[80vw] w-[80vw]">
                <img
                  src={`images/shoes/${id}/${image}`}
                  alt={name}
                  className="h-[80vw] w-[80vw] rounded-t-lg object-cover"
                  // loading="lazy"
                />
              </div>
            ))}
        </Carousel>
      </div>
      <div className=" flex h-full w-[80vw] flex-col  items-start justify-center gap-y-4 p-4">
        {marketingImages && (
          <ImageIndexIndicator
            max={marketingImages.length}
            current={currentIndex}
          />
        )}
        <div className="flex w-full flex-row justify-between border-b-2 border-shop-text border-opacity-10  pb-2">
          <span className="inline-flex w-full gap-x-4 text-left text-2xl font-bold">
            {name}
          </span>
          <ColorBadge primary={colors.primary} secondary={colors.secondary} />
        </div>
        <div className="flex w-full flex-row items-center justify-around">
          <span className="w-20 text-right text-lg font-bold tracking-wide">
            899 kr
          </span>
          <div className="rounded bg-slate-200 p-2 shadow-inner">
            <select className="w-20 bg-transparent" onChange={handleSizeChange}>
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          className="flex w-full justify-center rounded bg-slate-800 px-8 py-3 text-white shadow"
          onClick={handleAddToCart}
        >
          <span className="text-sm font-bold tracking-wider">Add to cart</span>
        </button>
        <InspectProductButton productId={id} />
      </div>
    </div>
  );
};

export function ImageIndexIndicator({
  max,
  current,
}: {
  max: number;
  current: number;
}) {
  return (
    <div className="w-full">
      <div className="h-1 w-full rounded-full bg-slate-200">
        <div
          className="h-1 rounded-full bg-slate-800 transition-all"
          style={{
            width: `${100 / max}%`,
            marginLeft: `${(current / max) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}

function InspectProductButton({ productId }: { productId: string }) {
  return (
    <Link href={`/${productId}`} className="grid w-full grid-cols-3  py-1">
      <span className="col-span-3 col-start-1 inline-flex w-full justify-center gap-x-4 text-center text-sm font-bold tracking-wide ">
        <MagnifyingGlassSVG />
        Inspect product
      </span>
    </Link>
  );
}

function MagnifyingGlassSVG() {
  return (
    <svg viewBox="0 0 512 512" xmlSpace="preserve" className=" w-6">
      <g>
        <path d="M312.069,53.445c-71.26-71.26-187.194-71.26-258.454,0c-71.261,71.26-71.261,187.206,0,258.466   c71.26,71.26,187.194,71.26,258.454,0S383.329,124.705,312.069,53.445z M286.694,286.536   c-57.351,57.34-150.353,57.34-207.704-0.011s-57.351-150.353,0-207.693c57.351-57.351,150.342-57.351,207.693,0   S344.045,229.174,286.694,286.536z" />
        <path d="M101.911,112.531c-29.357,37.725-31.801,89.631-7.321,129.702c1.877,3.087,5.902,4.048,8.978,2.182   c3.065-1.888,4.037-5.903,2.16-8.978c-21.666-35.456-19.506-81.538,6.469-114.876c2.226-2.837,1.713-6.938-1.135-9.154   C108.227,109.193,104.125,109.695,101.911,112.531z" />
        <path d="M498.544,447.722l-132.637-129.2c-7.255-7.07-18.84-6.982-26.008,0.174l-21.033,21.033   c-7.156,7.156-7.234,18.742-0.153,25.986l129.19,132.636c14.346,17.324,35.542,18.35,51.917,1.964   C516.216,483.951,515.857,462.068,498.544,447.722z" />
      </g>
    </svg>
  );
}

export default Card;
