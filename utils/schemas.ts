import { z, ZodSchema } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(4, {
      message: "название товара должно содержать не менее 3 букв",
    })
    .max(100, {
      message: "product name must be less then 100 chars",
    }),
  company: z.string(),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 500;
    },
    {
      message: "description must be between 10 and 50 words",
    }
  ),
  featured: z.coerce.boolean(),
  //   image: z.string(),
  price: z.coerce.number().int().min(0, {
    message: "price must be a positive number",
  }),
  //   clerkId: z.string(),
});
