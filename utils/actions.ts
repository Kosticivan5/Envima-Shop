"use server";

import db from "./db";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { productSchema } from "./schemas";

// helper functions

const getAuthUser = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }
  return user;
};

const renderError = (error: unknown): { message: string } => {
  return {
    message: error instanceof Error ? error.message : "failed creating...",
  };
};

// server

export const fetchFeaturedProducts = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export const fetchAllProducts = ({ search }: { search?: string }) => {
  return db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const fetchSingleProduct = async (productId: string) => {
  const singleProduct = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!singleProduct) {
    redirect("/products");
  }
  return singleProduct;
};

export const createProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  "use server";
  // const name = FormData.get("name");
  const user = await getAuthUser();
  try {
    const rawData = Object.fromEntries(formData);
    const validateFields = productSchema.safeParse(rawData);

    if (!validateFields.success) {
      const errors = validateFields.error.errors.map((error) => {
        return error.message;
      });
      throw new Error(errors.join(", "));
    }

    // const name = result.name as string;
    // const company = result.company as string;
    // const description = result.description as string;
    // const price = Number(result.price as string);
    // const featured = Boolean(result.featured);
    // const image = result.image as File;

    // await db.product.create({
    //   data: {
    //     name: name,
    //     company: company,
    //     description: description,
    //     featured: featured,
    //     image: "/images/hero.webp",
    //     price: price,
    //     clerkId: user.id,
    //   },
    // });

    return { message: "product created" };
  } catch (error) {
    return renderError(error);
  }
};
