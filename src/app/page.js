import Banner from '@/components/Banner';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Product from '@/components/Product';

export default function Home() {
  return (
    <main>
      <Banner />
      <Header />
      <Breadcrumb />
      <Product />
      <Footer />
    </main>
  );
};
