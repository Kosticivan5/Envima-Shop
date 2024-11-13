import { Product } from "@prisma/client";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "./FavoriteToggleButton";

const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { name, price, image, company } = product;
        const productId = product.id;
        const priceFormat = formatCurrency(price);

        return (
          <article key={productId} className="group relative">
            <Link href={`products/${productId}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500 dark:bg-[#0F2933]">
                <CardContent className="p-8 gap-y-4 grid md:grid-cols-3">
                  <div className="relative h-64  md:h-24 md:w-48">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                      priority
                      className="w-full rounded-md object-cover"
                    />
                  </div>

                  <div>
                    <h2 className="text-xl  capitalize font-playfair font-bold tracking-wide">
                      {name}
                    </h2>
                    <h4 className="font-workSans text-sm text-main">
                      {company}
                    </h4>
                  </div>
                  <p className="font-workSans text-sm dark:font-light mt-2 ">
                    {priceFormat}
                  </p>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute bottom-8 md:top-7 right-8 z-5">
              <FavoriteToggleButton />
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default ProductsList;