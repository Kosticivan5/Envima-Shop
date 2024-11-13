import ProductsContainer from "@/components/products/ProductsContainer";

const ProductsPage = ({
  searchParams,
}: {
  searchParams: { search?: string; layout?: string };
}) => {
  return <ProductsContainer searchParams={searchParams} />;
};
export default ProductsPage;
