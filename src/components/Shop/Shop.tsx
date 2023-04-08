// components
import Card from "@/components/Shop/Card";
import AppBar from "@/components/AppBar";

// data
import { products } from "@/data";

const Shop = () => {
  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };
  return (
    <Container>
      <AppBar staticBar={false} />
      <ProductDescription />
      <OrderBy handleChange={handleOrderChange} />
      <CardGrid>
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </CardGrid>
    </Container>
  );
};

function OrderBy({
  handleChange,
}: {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="w-full max-w-[80vw] px-2 text-left text-sm text-shop-text">
        Order by
      </span>
      <div className="w-full max-w-[80vw] rounded bg-slate-300 px-2 py-2 text-sm font-bold tracking-widest shadow-inner">
        <select
          className="w-full bg-transparent text-shop-text"
          onChange={handleChange}
        >
          <option value="popularity">Popularity</option>
          <option value="price">Price</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
    </div>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-shop-bg shadow-inner">
      {children}
    </div>
  );
}

function CardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center py-4">
      {children}
    </div>
  );
}

function ProductDescription() {
  return (
    <div className="flex flex-col items-stretch justify-center p-8 pt-32">
      <span
        id="shop_component"
        className="mb-2 text-center text-3xl font-bold tracking-tight text-shop-text drop-shadow"
      >
        Original Friulane Shoe
      </span>
      <span className="px-6 text-center text-base font-light text-shop-text">
        Handmade velvet Furlane shoe with a thin rubber sole. Available in
        multiple different colors for all kinds of occasions. The doge of Venice
        would be collecting them all, just like taxes.
      </span>
      <a className="mt-4 w-full text-center text-shop-text">
        <span>Learn more about the Friulane shoe</span>
      </a>
    </div>
  );
}

export default Shop;
