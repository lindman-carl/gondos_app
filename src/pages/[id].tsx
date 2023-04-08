import { useRouter } from "next/router";

// components
import InspectProduct from "@/components/Shop/InspectProduct";
import AppBar from "@/components/AppBar";

// data
import { products } from "@/data";

// This is the product page
// It's used for the product details page

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((product) => product.id === id);

  if (!product) {
    return <div>ERROR: Product {id} not found</div>;
  }

  return (
    <>
      <AppBar staticBar={true} />
      <InspectProduct product={product} />
    </>
  );
};

export default ProductPage;
