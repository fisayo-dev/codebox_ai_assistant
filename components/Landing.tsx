import Image from 'next/image';

const Landing = () => {
  return (
    <div id="home" className="section app-container py-12">
      <div className="flex flex-col md:flex-row items-center justify-between min-h-[70vh] gap-8">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-blue-600 text-4xl md:text-5xl font-bold">
            CodeBox: Simplifying the Coding Process
          </h1>
          <p className="mt-4 text-sm w-full md:w-4/5 md:text-xl text-gray-400">
            Say goodbye to complexity and hello to simplicity. CodeBox is an AI-powered tool designed to assist developers by streamlining the coding process, making your workflow faster and more efficient.
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <button className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            width={400}
            height={400}
            src="/ai-coding.svg"  // Use a relevant image to showcase AI or coding.
            alt="CodeBox AI Image"
            className="w-64 md:w-96 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
