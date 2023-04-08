import Image from "next/image";

// components
import AppBar from "@/components/AppBar";

const HeritagePage = () => {
  return (
    <>
      <AppBar staticBar />
      <div className="flex flex-col gap-y-4 bg-shop-bg bg-shop-bg-texture px-8 text-justify text-sm font-light leading-6 text-shop-text">
        <cite className="mb-4 mt-24 text-center text-xl font-normal">
          ”We honour the ancient history of the Friuli scarpet"
        </cite>
        <div className="relative h-64 w-full">
          <Image
            src="/images/heritage/hero.jpg"
            alt="heritage"
            fill
            className="object-scale-down"
          />
        </div>
        <p>
          Made for centuries, if not for millennia, in different areas of
          Friuli, the "scarpet", the characteristic fabric shoes made by women
          for the whole family, tell a long history of culture and tradition and
          perfectly interpret the philosophy of recovery and reuse.
        </p>
        <div>
          <h3 className="pb-0 font-bold">Tradition</h3>
          <p>
            Although the first written testimonies of the creation of the
            Friulian "scarpets" date back to the nineteenth century, the
            tradition linked to their production is, in all likelihood, much
            older, and has its roots in a time when every scrap of fabric and
            every material, even the poorest, was precious, with a view to
            recovery and re-use interpreted in the strictest and most literal
            sense of the terms. Women were the architects of the "miracle",
            those who were able to make shoes for the whole family with a few
            scraps of cloth and string. Every season was good to wear these
            shoes that were produced in different variations so as to keep the
            foot warm in winter, and preserve it from the hot summer
            temperatures. They were the shoes for the party, worn by brides on
            their wedding day, but they were also and above all those that were
            made using only the fabrics available and overlapping pieces of
            cloth to create more resistant soles according to an ancient
            tradition probably millenary handed down generation in generation.
            Each area boasted its own variant that differed from the others by
            an embroidery or a particular seam, rather than by a decoration or a
            different shape.
          </p>
        </div>
        <div>
          <h3 className="pb-0 font-bold">Characteristics</h3>
          <p>
            The "scarpet", sometimes also called "friulane" are presented as
            light shoes similar to slippers made of canvas, velvet or other
            fabrics available according to the season in which they are to be
            worn. They are all hand-sewn and embellished with embroidery and
            decorations generally with a floral theme. The distinctive element
            of these shoes is the sole made up of overlapping fabric scraps that
            are hand-tufted with string to reinforce them. Although the
            techniques of production and the shape of the footwear have remained
            almost unchanged over the centuries, the decorations, embroideries
            and patterns have, however, remained in step with the times and
            today, therefore, it is more and more frequent to find models that
            meet their tastes while maintaining the classic and traditional
            appearance that distinguishes them.
          </p>
        </div>
        <div>
          <h3 className="pb-0 font-bold">The territory</h3>
          <p>
            The ancient Friulian footwear, over time, have found a certain
            diffusion even in neighbouring areas such as the Belluno Dolomites
            and the Treviso pre-alps, going as far as Venice where, in the
            eighteenth century, it was not rare to see them even at the feet of
            the gondoliers. However, Friuli Venezia Giulia remains the home of
            these delightful cloth shoes.
          </p>
        </div>
        <span className="mb-16">- La Stampa 2014-04-02</span>
      </div>
    </>
  );
};

export default HeritagePage;
