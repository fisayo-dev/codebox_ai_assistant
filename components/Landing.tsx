import Image from 'next/image';
import { Button } from './ui/button';

const Landing = () => {
  return (
    <div id="home" className="section app-container py-12">
      <div className="flex flex-col md:flex-row items-center justify-between min-h-[70vh] gap-8">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-yellow text-4xl md:text-5xl font-bold">
            Your all-in-one AI coding assistant.
          </h1>
          <p className="mt-4 text-sm w-full md:w-4/5 md:text-[1rem] text-gray-200">
            Say goodbye to complexity and hello to simplicity. CodeBox is an AI-powered tool designed to assist developers by streamlining the coding process, making your workflow faster and more efficient.
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <Button className="cursor-pointer bg-yellow px-4 py-3 rounded-full text-lg text-black shadow-md font-semibold hover:bg-yellow-400 transition duration-300">
              Get Started
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            width={700}
            height={700}
            src="/assets/ai-coding.svg"  // Use a relevant image to showcase AI or coding.
            alt="CodeBox AI Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
