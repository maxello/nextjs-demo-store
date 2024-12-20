import { sql } from "@vercel/postgres";
import { Product } from "./definitions";

export async function fetchProducts(limit?: number) {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)
    // console.log('Fetching products data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const productResponse = await sql<Product>`
        SELECT *
        FROM public.products
        ORDER BY created_at DESC
        LIMIT NULLIF(${limit}, 0)
      `
    return productResponse.rows;
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

    const response = await sql<Product>
    `SELECT * FROM public.products WHERE id = ${id}`;
    const product: Product = JSON.parse(JSON.stringify(response.rows[0]));
    return product;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product data.");
  }
}

const ITEMS_PER_PAGE = 8;
export async function fetchFilteredProducts(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const productsResponse = await sql<Product>`
    SELECT *
    FROM products
    WHERE title ILIKE ${`%${query}%`} OR description ILIKE ${`%${query}%`}
    ORDER BY created_at DESC
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
    return productsResponse.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products.');
  }
}
export async function fetchProductsPages(query: string) {
  try {
    const count = await sql`SELECT COUNT(*)
    FROM products
    WHERE title ILIKE ${`%${query}%`} OR description ILIKE ${`%${query}%`}
  `;
    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of products.');
  }
}


