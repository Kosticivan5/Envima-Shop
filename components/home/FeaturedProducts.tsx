import { fetchFeaturedProducts } from "@/utils/actions";
import ProductsGrid from "../products/ProductsGrid";
import EmptyList from "../global/EmptyList";

const FeaturedProducts = async () => {
  const products = await fetchFeaturedProducts();
  if (products.length === 0) return <EmptyList />;
  return <ProductsGrid products={products} />;
};
export default FeaturedProducts;
