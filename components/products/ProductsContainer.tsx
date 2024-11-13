import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import Link from "next/link";
import { Button } from "../ui/button";
import { FaList } from "react-icons/fa6";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { Separator } from "../ui/separator";
import Container from "../global/Container";
import { fetchAllProducts } from "@/utils/actions";
import EmptyList from "../global/EmptyList";

const ProductsContainer = async ({
  searchParams,
}: {
  searchParams: { search?: string; layout?: string };
}) => {
  const search = searchParams?.search || "";
  const layout = searchParams?.layout || "grid";
  const products = await fetchAllProducts({ search });

  const amountOfProducts = products.length;
  const searchTherm = search ? `&search=${search}` : "";
  console.log(searchTherm);

  return (
    <Container className="mt-12">
      {/* HEADER */}
      <article className="flex items-center justify-between mb-2">
        <h4 className="font-medium font-workSans">
          {amountOfProducts} product{amountOfProducts > 1 && "s"}
        </h4>
        <div className="hidden md:flex items-center gap-2">
          <Button
            asChild
            className="bg-none"
            size={"icon"}
            variant={`${layout === "grid" ? "default" : "ghost"}`}
          >
            <Link href={`/products?layout=grid${searchTherm}`}>
              <BsFillGrid3X3GapFill />
            </Link>
          </Button>
          <Button
            asChild
            size={"icon"}
            variant={`${layout === "list" ? "default" : "ghost"}`}
          >
            <Link href={`/products?layout=list${searchTherm}`}>
              <FaList />
            </Link>
          </Button>
        </div>
      </article>
      <Separator />
      {/* PRODUCTS */}

      {products.length === 0 ? (
        <EmptyList text="sorry couldn't find anything" />
      ) : layout === "grid" ? (
        <ProductsGrid products={products} />
      ) : (
        <ProductsList products={products} />
      )}
    </Container>
  );
};
export default ProductsContainer;
