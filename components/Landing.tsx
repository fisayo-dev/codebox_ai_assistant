import Image from 'next/image';

const Landing = () => {
  return (
    <div className="app-container py-12">
      <div className="flex flex-col md:flex-row items-center justify-between min-h-[70vh] gap-8">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-purple-600 text-6xl md:text-7xl font-bold leading-tight">
            The Mad Titan Has Arrived
          </h1>
          <p className="mt-4 text-lg w-full md:w-4/5 md:text-xl text-gray-400">
            Balance is not something one finds. It is something one must take.  
            The universe lies in the palm of my hand.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <Image 
            width={400} 
            height={400} 
            src="/globe.svg" 
            alt="Thanos image" 
            className="w-64 md:w-96 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
