import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/store/store";

type Props = {
  staticBar: boolean;
};

const AppBar = ({ staticBar }: Props) => {
  const cartItems = useCart((state) => state.items);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    // handle scroll event
    // set bar to fixed when scrolled past 100vh
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const appBar = document.querySelector("#app-bar");
      if (scrollY > window.innerHeight * 1) {
        appBar?.classList.add("fixed");
        appBar?.classList.remove("absolute");
      } else {
        appBar?.classList.add("absolute");
        appBar?.classList.remove("fixed");
      }
    };

    // set bar to absolute if staticBar is true
    // when staticBar is true, the bar should start from the top of the page
    // else the bar will start from the top of the shop component
    // and will be fixed when scrolled past 100vh
    const appBar = document.querySelector("#app-bar");
    if (!staticBar) {
      window.addEventListener("scroll", handleScroll);
      appBar?.classList.add("absolute");
    } else {
      appBar?.classList.add("fixed");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [staticBar]);

  return (
    <div
      id="app-bar"
      className="top-0 z-40 grid h-16 w-full grid-cols-3 bg-slate-100 bg-opacity-25 px-4 text-shop-text shadow backdrop-blur-md"
    >
      <div className="flex items-center justify-start">
        <HamburgerMenu />
      </div>
      <div className="flex items-center justify-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="gondos logo"
            width={80}
            height={80}
            className="drop-shadow"
            priority
          />
        </Link>
      </div>
      <div className="flex items-center justify-end">
        <Link
          href="/cart"
          className="relative flex min-w-min items-center justify-center pr-4"
        >
          <div className="absolute">
            <CartSVG />
          </div>
          <span className="absolute z-50 pt-1 text-sm font-bold text-white">
            {totalItems > 0 && totalItems}
          </span>
        </Link>
      </div>
    </div>
  );
};

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleToggle}>
        {isOpen ? <CloseSVG /> : <HamburgerSVG />}
      </button>
      {isOpen && (
        <>
          <div
            className="fixed left-0 top-16 z-30 h-screen w-full bg-slate-700 bg-opacity-25 backdrop-blur-md"
            onClick={handleToggle}
          ></div>
          <div className="fixed left-0 top-16 z-50 flex h-32 w-full flex-col items-start justify-start bg-white px-8 py-2 text-xl font-bold">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <span className="w-full text-center text-shop-text">Home</span>
            </Link>
            <Link href="/#shop_component" onClick={() => setIsOpen(false)}>
              <span className="w-full text-center text-shop-text">Shop</span>
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              <span className="w-full text-center text-shop-text">About</span>
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <span className="w-full text-center text-shop-text">Contact</span>
            </Link>
          </div>
        </>
      )}
    </>
  );
}

function HamburgerSVG() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 drop-shadow">
      <path
        d="M5 17H19M5 12H19M5 7H19"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseSVG() {
  return (
    <svg viewBox="0 0 1024 1024" className="h-8 w-8 drop-shadow">
      <path
        fill="#000000"
        d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
      />
    </svg>
  );
}

function CartSVG() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8 drop-shadow">
      <path d="M0 0h48v48H0z" fill="none" />

      <path
        d="M4,40c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4l0-26h-8.18C34.863,8.334,29.934,4,24,4S13.137,8.334,12.181,14H4L4,40z M24,8
c3.719,0,6.845,2.555,7.737,6H16.263C17.155,10.555,20.281,8,24,8z"
      />
    </svg>
  );
}

export default AppBar;
