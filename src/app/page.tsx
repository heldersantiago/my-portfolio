'use client';

import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, Code, Database, Layout } from 'lucide-react';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section with 3D-like parallax effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="absolute inset-0 grid grid-cols-8 gap-4 p-4">
            {[...Array(64)].map((_, i) => (
              <div
                key={i}
                className="bg-blue-500 rounded-full w-2 h-2 animate-pulse"
                style={{
                  animationDelay: `${i * 100}ms`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">
            Helder Paulo Santiago
          </h1>
          <p className="text-2xl text-blue-400 mb-8">
            Full Stack Developer
          </p>
          <div className="flex gap-4 justify-center">
            <Github className="w-8 h-8 hover:text-blue-400 transition-colors" />
            <Linkedin className="w-8 h-8 hover:text-blue-400 transition-colors" />
            <Mail className="w-8 h-8 hover:text-blue-400 transition-colors" />
          </div>
        </div>
      </section>

      {/* Skills Section with floating cards */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Tech Stack</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Code className="w-8 h-8" />,
              title: "Frontend",
              skills: ["React", "TypeScript", "Tailwind CSS"]
            },
            {
              icon: <Database className="w-8 h-8" />,
              title: "Backend",
              skills: ["Node.js", "Python", "PostgreSQL"]
            },
            {
              icon: <Layout className="w-8 h-8" />,
              title: "DevOps",
              skills: ["Docker", "AWS", "CI/CD"]
            }
          ].map((category, i) => (
            <div
              key={i}
              className="bg-slate-800 p-6 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <div className="bg-blue-500/10 p-4 rounded-lg inline-block mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, j) => (
                  <li key={j} className="text-slate-300">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section with hover effects */}
      <section className="py-20 px-4 bg-slate-800">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl bg-slate-700 hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="aspect-video bg-slate-600" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project {i + 1}</h3>
                <p className="text-slate-300 mb-4">
                  A brief description of the project and the technologies used.
                </p>
                <div className="flex gap-2">
                  {['React', 'Node.js', 'MongoDB'].map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm"
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
    </div>
  );
};

export default Portfolio;