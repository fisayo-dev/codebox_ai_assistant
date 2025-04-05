"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add your subscribe logic here (e.g., call API or show toast)
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <section className="app-container bg-black text-white py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Sparkles className="w-10 h-10 text-yellow" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-yellow mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-gray-400 mb-8">
          Get the latest updates, coding tips, and exclusive offers straight to your inbox.
        </p>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="max-w-md bg-gray-800 border-gray-600 text-white"
            required
          />
          <Button
            type="submit"
            className="bg-yellow text-black hover:bg-yellow-500 rounded-full font-semibold px-6"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
