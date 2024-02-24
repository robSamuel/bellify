
import Banner from '@/components/Banner';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Product from '@/components/Product';
import ProductsList from "@/components/ProductsList";
import { relatedProducts } from '@/data/products-list';

export default function Home() {
  return (
    <main>
      <Breadcrumb />
      <Product />
      <ProductsList title="Productos de la misma colección" products={relatedProducts} />
      <ProductsList title="Productos relacionados" products={relatedProducts} />
    </main>
  );
};
