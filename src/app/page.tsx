"use client";

import React, { useState, useEffect } from "react";
import {
  Github,
  Mail,
  Linkedin,
  Code,
  Database,
  Layout,
  File,
  MessageCircle,
  OctagonX,
} from "lucide-react";

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText =
    "Integration Architect | Mulesoft Certified | Full Stack Developer";
  const [showChatModal, setShowChatModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [isTyping]);

  return (
    <div className="min-h-screen bg-black text-white font-thin">
      {/* Hero Section with 3D-like parallax effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="absolute inset-0 grid grid-cols-8 gap-4 p-4">
            {[...Array(64)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-full w-2 h-2 animate-pulse"
                style={{
                  animationDelay: `${i * 100}ms`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center">
          <h1 className="text-8xl text-zinc-300 font-bold mb-6 animate-fade-in">
            Helder Paulo Santiago
          </h1>
          <p className="text-2xl text-zinc-300 mb-8 flex justify-center items-center">
            {text}
            <span className="w-1 h-8 bg-zinc-300 ml-1 animate-blink"></span>
          </p>
          <div className="flex gap-4 justify-center text-zinc-300">
            <Github className="w-8 h-8 hover:text-blue-400 transition-colors" />
            <Linkedin className="w-8 h-8 hover:text-blue-400 transition-colors" />
            <Mail className="w-8 h-8 hover:text-blue-400 transition-colors" />
            <File className="w-8 h-8 hover:text-blue-400 transition-colors" />
          </div>
        </div>
      </section>

      {/* Skills Section with floating cards */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Tech Stack</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Code className="w-8 h-8" />,
              title: "Frontend",
              skills: [
                "Angular",
                "React / NextJs",
                "TypeScript",
                "Tailwind CSS",
              ],
            },
            {
              icon: <Database className="w-8 h-8" />,
              title: "Backend",
              skills: [
                "Java / Spring Framework",
                "NestJs",
                "MySQL",
                "PostgreSQL",
              ],
            },
            {
              icon: <Layout className="w-8 h-8" />,
              title: "DevOps",
              skills: ["Docker", "Kubernetes", "AWS", "Jenkins"],
            },
          ].map((category, i) => (
            <div
              key={i}
              className="bg-zinc-900 p-6 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-zinc-100/15"
            >
              <div className="bg-blue-500/10 p-4 rounded-lg inline-block mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, j) => (
                  <li key={j} className="text-slate-300">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section with hover effects */}
      <section className="py-20 px-4 bg-zinc-900">
        <h2 className="text-4xl font-bold text-center mb-16">Projects Stack</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl bg-zinc-800 hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="aspect-video bg-black" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project {i + 1}</h3>
                <p className="text-slate-300 mb-4">
                  A brief description of the project and the technologies used.
                </p>
                <div className="flex gap-2">
                  {["React", "Node.js", "MongoDB"].map((tech, j) => (
                    <span
                      key={j}
                      className="px-4 py-1 rounded-full bg-zinc-900 text-zinc-50 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Chat Button */}
      <button
        onClick={() => setShowChatModal(!showChatModal)}
        className={`fixed z-20 bottom-8 right-8 bg-zinc-700 text-white p-4 rounded-full shadow-lg hover:bg-zinc-500 transition-all duration-500 ${
          showChatModal ? "animate-none" : "animate-bounce"
        }`}
      >
        {showChatModal && <OctagonX className="w-8 h-8" />}
        {!showChatModal && <MessageCircle className="w-8 h-8" />}
      </button>

      {/* Chat Modal */}
      {showChatModal && (
        <div className="fixed bottom-24 right-8 w-80 z-10 bg-zinc-800 rounded-lg shadow-xl p-5 duration-75 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Chat with me</h3>
          </div>
          <div className="h-64 overflow-y-auto bg-zinc-900 rounded p-2 mb-4">
            {/* Chat messages would go here */}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 bg-zinc-900 border-[0.5px] rounded px-3 py-2 text-white"
            />
            <button className="bg-zinc-900 text-white px-4 py-2 rounded hover:bg-blue-600">
              Send
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
