import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// components
import { ImageIndexIndicator } from "./Card";
import { useState } from "react";
import ColorBadge from "./ColorBadge";

// data
import { Product } from "@/data";
import Link from "next/link";

type Props = {
  product: Product;
};

const InspectProduct = ({
  product: { id, name, productImages, colors },
}: Props) => {
  // index of the current image in the carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-stretch justify-start bg-white pt-16 text-shop-text">
      <Link href={`/#${id}`} className="py-2" scroll={false}>
        <span className="px-4 text-sm">{"<"} Back to shop</span>
      </Link>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showArrows={false}
        onChange={(index) => {
          setCurrentIndex(index);
        }}
        className="shadow-inner"
      >
        {productImages &&
          productImages.map((image, index) => (
            <div
              key={index}
              className="h-full max-h-[100wv] min-h-[100wv] w-full min-w-[100wv] bg-shop-bg"
            >
              <img
                src={`/images/shoes/${id}/${image}`}
                className="h-full w-full object-cover drop-shadow-md"
              />
            </div>
          ))}
      </Carousel>
      <div className="flex flex-col items-stretch justify-center gap-y-2 p-4 px-8">
        {productImages && (
          <div className="">
            <ImageIndexIndicator
              max={productImages.length}
              current={currentIndex}
            />
          </div>
        )}
        <div className="flex flex-col justify-start">
          <span className="font-light">Gondos</span>
          <div className="flex w-full flex-row justify-between">
            <span className="inline-flex w-full gap-x-4 text-left text-2xl font-bold">
              {name}
            </span>
            <ColorBadge primary={colors.primary} secondary={colors.secondary} />
          </div>
        </div>
        <span className="mb-4 text-left text-2xl">
          899 kr <span className="text-sm font-light">incl. vat</span>
        </span>
        <div className="rounded bg-slate-200 p-2 shadow-inner">
          <select className="w-full bg-transparent" placeholder="Select size">
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
          </select>
        </div>
        <button className="flex w-full justify-center rounded bg-slate-800 px-8 py-3 text-white shadow">
          <span className="text-sm font-bold tracking-wider">Add to cart</span>
        </button>
        <span className="w-full text-center text-xs font-light">
          Can be perceived as small in sizes. If you are between sizes we advice
          you to pick the larger size.
        </span>
        <div className="mt-4 flex flex-col">
          <span className="text-base font-light">
            Handmade canvas Furlane shoes with thin rubber sole.
          </span>

          <div className="mt-4 flex flex-col">
            <span>
              <span className="font-bold">Material:</span> Canvas, rubber
            </span>
            <span>
              <span className="font-bold">Care:</span> Wipe with a damp cloth
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center p-8 ">
        <span className="w-full text-left text-xl font-normal tracking-tight">
          More from Gondos
        </span>
        <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-4">
          <div className="h-32 w-32 rounded bg-slate-200"></div>
          <div className="h-32 w-32 rounded bg-slate-200"></div>
          <div className="h-32 w-32 rounded bg-slate-200"></div>
          <div className="h-32 w-32 rounded bg-slate-200"></div>
        </div>
      </div>
    </div>
  );
};

export default InspectProduct;
