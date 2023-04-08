import Image from "next/image";

// components
import AppBar from "@/components/AppBar";

const AboutPage = () => {
  return (
    <>
      <AppBar staticBar />
      <div className="flex flex-col gap-y-4 bg-shop-bg bg-shop-bg-texture px-8 text-justify text-sm font-light leading-6 text-shop-text">
        <h1 className="mb-4 mt-24 text-center text-4xl font-bold">About us</h1>
        <p>
          Ancient Italian traditions as well as personal lifestyles and stories
          are all mixed in Gondos Shoes. The name is inspired by the Gondoliers
          of Venice who once wore the shoe type not only because of their
          elegance and comfort but also due to the thin rubber sole that was
          gentle to the fragile Mahogny hull.
        </p>
        <p>
          The shoe model called friulane in Italy, is worn by international
          icons such as Giorgio Armani and Kate Moss, but is equally popular
          among greengrocers at the local piazza and students at the aperitivo
          hangout. The fact that you can wear them with your favourite pair of
          worn-out jeans, and the next time at a dinner party feeling elegant
          makes them the perfect all-occasion shoe.
        </p>
        <p>
          Swedish born Amelie Franchin is married to an Italian and has spent
          half her life in Italy. When she first came across the Friulane
          slippers she immediately fell in love. The simple but striking
          elegance, the handcraft involving history, culture and tradition,
          their adaptability to various tastes and circumstances, and finally
          their timeless design represents the essence of Italy and Italians.
          Amelie felt an urge to promote this wonderful piece of craft to the
          rest of the world. She contacted her friend and entrepreneur from
          Sweden P A Tamm and in spring 2018 they founded the company Gondos
          Shoes. They are now out for a long walk around the world!
        </p>
        <div className="my-8 flex flex-row items-center justify-evenly drop-shadow">
          <div className="relative h-32 w-32 overflow-hidden rounded-full">
            <Image
              src="/images/about/franchin.webp"
              alt="amelie franchin"
              fill
            />
          </div>
          <div className="relative h-32 w-32 overflow-hidden rounded-full">
            <Image
              src="/images/about/tamm.webp"
              alt="p a tamm"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="mb-16 flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="gondos logo"
            width={160}
            height={160}
          />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
