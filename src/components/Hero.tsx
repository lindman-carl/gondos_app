import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";

const font = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type Props = {};

const Hero = ({}: Props) => {
  return (
    <div className={`h-[100vh] w-full`}>
      <Image
        src="/images/hero-bg.jpg"
        alt="Hero"
        fill
        className="-z-10 object-cover object-top "
      />
      <div className="grid h-full w-full grid-cols-1 grid-rows-3 bg-black bg-opacity-25 p-4">
        <div className="row-span-1 row-start-1 flex w-full flex-col items-center justify-start drop-shadow-lg  invert">
          <div className=" mb-8 flex w-full flex-row items-center justify-between gap-x-4 px-8 py-2 text-base font-bold tracking-wide text-black">
            <Link href="/contact">Contact</Link>
            <Link href="/about">About us</Link>
            <Link href="/heritage">Heritage</Link>
          </div>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={180}
            height={180}
            priority
          />
        </div>
        <div className="row-span-1 row-start-2 flex w-full flex-col items-center justify-center">
          <span
            className="px-8 py-8 text-center text-3xl font-semibold tracking-wider text-hero-text "
            style={{ textShadow: "0 0 20px hsla(0, 0%, 0%, 1)", ...font.style }}
          >
            {'"The original Ventian Furlane shoes handmade in Italy"'}
          </span>
        </div>
        <div className="row-span-1 row-start-3 flex h-full w-full flex-col items-center justify-center">
          <Link href="#shop_component">
            <button className="rounded-lg bg-violet-900 px-8 py-6 text-2xl font-bold tracking-wider text-hero-text drop-shadow">
              Shop Now
            </button>
          </Link>
        </div>
        <ScrollIndicator />
      </div>
    </div>
  );
};

function ScrollIndicator() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="absolute bottom-0 left-0 h-10 w-full bg-gradient-to-t from-black to-transparent opacity-50"></div>
      <div className="h-12 w-12 animate-pulse opacity-90 drop-shadow">
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M8 10L12 14L16 10"
            stroke="#e6e6e6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default Hero;
