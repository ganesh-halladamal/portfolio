"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutDemo() {
  const handleResumeClick = () => {
    window.open('https://docs.google.com/document/d/1CUwpkZBSb2_eC8k3x4tAGyDmGCId88XbEq1jcS0wuDM/edit', '_blank');
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4 relative isolate">
      <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0 z-10">
        <Image 
          className="max-w-md w-full object-cover rounded-2xl aspect-square pointer-events-none"
          src="/picofme.webp"
          alt="Ganesh Halladamal"
          width={448}
          height={448}
          priority
        />
      </div>
      
      <div className="text-sm text-slate-600 dark:text-slate-300 max-w-lg relative z-20">
        <h1 className="text-xl uppercase font-semibold text-slate-700 dark:text-slate-200">Who am I?</h1>
        <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
        
        <p className="mt-8">
          I&apos;m <span className="font-semibold text-slate-800 dark:text-slate-100 relative inline-block">
            Ganesh Halladamal
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
          </span>, a passionate <span className="font-semibold text-slate-800 dark:text-slate-100 relative inline-block">
            Full Stack Developer
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
          </span> with expertise in building modern, 
          responsive web applications that deliver exceptional user experiences. Currently working as a 
          Software Development Engineer at Nighan2 Labs Pvt. Ltd. since March 2025.
        </p>
        
        <p className="mt-4">
          With a Bachelor&apos;s degree in Computer Applications and hands-on experience in technologies like 
          React, Next.js, Node.js, and MongoDB, I specialize in creating scalable solutions that solve 
          real-world problems.
        </p>
        
        <p className="mt-4">
          In my current role, I focus on developing full-stack applications, implementing responsive UI components, 
          and collaborating with cross-functional teams to deliver high-quality software solutions.
        </p>
        
        <div className="flex flex-wrap gap-4 mt-8 relative z-50">
          <button
            type="button"
            onClick={handleResumeClick}
            className="flex items-center gap-2 hover:-translate-y-0.5 transition bg-gradient-to-r from-indigo-600 to-[#8A7DFF] py-3 px-8 rounded-full text-white cursor-pointer relative z-50"
          >
            <span>Resume</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <a href="mailto:halladmalganesh@gmail.com" className="inline-block cursor-pointer relative z-50">
            <button
              type="button"
              className="flex items-center gap-2 hover:-translate-y-0.5 transition border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 py-3 px-8 rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/20 cursor-pointer"
            >
              <span>Hire Me</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
