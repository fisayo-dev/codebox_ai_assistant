import {
    BrainCircuit,
    TerminalSquare,
    Lightbulb,
    SearchCode,
    Sparkles,
    Bot
  } from "lucide-react";
  
  const features = [
    {
      icon: <BrainCircuit className="w-20 h-20 text-yellow" />,
      title: "AI-Powered Suggestions",
      desc: "Get intelligent code suggestions in real-time while you type.",
    },
    {
      icon: <TerminalSquare className="w-20 h-20 text-yellow" />,
      title: "Multi-Language Support",
      desc: "Supports a wide range of programming languages and frameworks.",
    },
    {
      icon: <Lightbulb className="w-20 h-20 text-yellow" />,
      title: "Smart Error Detection",
      desc: "Spot bugs and fix them before running your code.",
    },
    {
      icon: <SearchCode className="w-20 h-20 text-yellow" />,
      title: "Code Search",
      desc: "Search and navigate your codebase effortlessly.",
    },
    {
      icon: <Sparkles className="w-20 h-20 text-yellow" />,
      title: "Auto-Formatting",
      desc: "Consistently formatted code at the click of a button.",
    },
    {
      icon: <Bot className="w-20 h-20 text-yellow" />,
      title: "Chat with AI",
      desc: "Ask coding questions and get answers instantly from CodeBox AI.",
    },
  ];
  
  const Features = () => {
    return (
      <section id="features" className="section bg-black text-white app-container py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow mb-4">
            Our Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Boost your development workflow with CodeBox – your intelligent AI coding assistant built to supercharge your productivity.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/30 border-[0.1rem] border-gray-500/20 hover:border-gray-500/40 p-6 rounded-2xl shadow-md hover:shadow-yellow transition-shadow cursor-pointer"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-yellow mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  