import { sql } from "@vercel/postgres";
import { Product } from "./definitions";

export async function fetchProducts(limit?: number, offset?: number) {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)
    // console.log('Fetching products data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const skip = offset || 0;

    const ProductResponsePromise = sql
      `SELECT *
        FROM public.products
        ORDER BY created_at DESC
        OFFSET ${skip}
        LIMIT NULLIF(${limit}, 0)
      `

    const totalProductsCountPromise = sql
      `SELECT COUNT(*) as total_count FROM public.products`

    const data = await Promise.all([
      ProductResponsePromise,
      totalProductsCountPromise
    ]);

    const products: Product[] = data[0].rows.map((row: any) => ({
      ...row,
      price: parseFloat(row.price)
    }));

    return {
      products,
      total_count: parseInt(data[1].rows[0].total_count)
    }
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products data.");
  }
}

export async function fetchProductById(id: string) {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)
    // console.log('Fetching product data by ID......');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await sql
    `SELECT * FROM public.products WHERE id = ${id}`;
    const product: Product = JSON.parse(JSON.stringify(response.rows[0]));
    return product;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product data.");
  }
}

