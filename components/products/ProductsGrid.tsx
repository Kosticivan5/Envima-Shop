import { formatCurrency } from "@/utils/format";
import { Product } from "@prisma/client";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";

const ProductsGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12 ">
      {products.map((product) => {
        const { id: productId, company, name, price, image } = product;
        const priceFormat = formatCurrency(price);

        return (
          <article key={productId} className="group relative">
            <Link href={`/products/${productId}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500 bg-gradient-to-br from-grey-50 to-white dark:bg-[#0F2933] ">
                {/* <Card className="transform group-hover:shadow-xl transition-shadow duration-500 bg-gradient-to-br from-grey-50 to-white dark:bg-gradient-to-br dark:from-[#121212] dark:to-zinc-950 "> */}
                <CardContent className="p-3">
                  <div className="relative h-64 md:h-48 overflow-hidden ">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                      priority
                      className="rounded-t-md w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4">
                    <h4 className="font-workSans text-sm text-main">
                      {company}
                    </h4>
                    <h2 className="text-xl  capitalize font-playfair font-bold tracking-wide">
                      {name}
                    </h2>
                    <p className="font-workSans text-sm dark:font-light mt-2 ">
                      {priceFormat}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute top-5 right-5 z-5">
              <FavoriteToggleButton />
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
