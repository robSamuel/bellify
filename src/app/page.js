import ProductsList from "@/components/ProductsList";
import { relatedProducts } from '@/data/products-list';

export default function Home() {
  return (
    <main>
      <ProductsList title="Productos de la misma colección" products={relatedProducts} />
      <ProductsList title="Productos relacionados" products={relatedProducts} />
    </main>
  );
};
