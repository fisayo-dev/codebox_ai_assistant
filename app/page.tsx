import Header from '@/components/Header';
import Landing from '@/components/Landing';

export default function Home() {
  return (
    <>
      <Header />
      <div className='pt-20'>
        <Landing />
      </div>
    </>
  );
}
