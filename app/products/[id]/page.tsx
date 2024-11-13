import { formatCurrency } from "@/utils/format";
import { fetchSingleProduct } from "@/utils/actions";
import Container from "@/components/global/Container";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
// import ProductRating from "@/components/single-product/ProductRating";
// import AddToCart from "@/components/single-product/AddToCart";
import Image from "next/image";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";

const SingleProduct = async ({ params }: { params: { id: string } }) => {
  const { id: productId } = params;
  const product = await fetchSingleProduct(productId);

  const { name, company, description, image, price } = product;
  const dollarsAmount = formatCurrency(price);
  return (
    <Container className="flex items-center justify-center pt-12 pb-6">
      <article className="flex flex-col items-start gap-7">
        <BreadCrumbs name={name} />
        <div className="mt-6 grid m-auto gap-y-8 lg:grid-cols-2 lg:gap-x-24">
          {/* IMAGE FIRST COL */}
          <div className="relative h-full  max-w-lg ">
            <div className="absolute h-[80%] w-full top-12 left-8 bg-main -z-10"></div>
            <div className="absolute h-[80%] w-full -top-6 -left-8 bg-gray-300 dark:bg-[#D9D9D9] -z-10"></div>

            <Image
              src={image}
              alt={name}
              width={300}
              height={500}
              // sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
              priority
              className="w-full rounded-sm object-cover border border-main"
            />
          </div>
          {/* PRODUCT INFO SECOND COL */}
          <div className="max-w-xl">
            <div className="flex gap-x-5 items-center">
              <h1 className="capitalize text-3xl sm:text-4xl font-bold font-playfair">
                {name}
              </h1>
              <FavoriteToggleButton />
            </div>
            {/* <ProductRating productId={params.id} /> */}
            <h4 className="text-lg mt-2 text-main">{company}</h4>
            <p className="mt-3 text-md  inline-block p-2 rounded-sm">
              {dollarsAmount}
            </p>
            <p className="mt-6 leading-8 font-light">{description}</p>
            {/* <AddToCart productId={params.id} /> */}
          </div>
        </div>
      </article>
    </Container>
  );
};
export default SingleProduct;
