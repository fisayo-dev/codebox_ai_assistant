import Faq from '@/components/Faq';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Landing from '@/components/Landing';
import Newsletter from '@/components/Newsletter';
import Pricing from '@/components/Pricing';

export default function Home() {
  return (
    <>
      <Header />
      <div className="grid ">
        <Landing />
        <Features />
        <Pricing />
        <Newsletter />
        <Faq />
        <Footer />
      </div>
    </>
  );
}
