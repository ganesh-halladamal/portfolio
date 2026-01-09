"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutDemo() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4">
        <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
          <img 
            className="max-w-md w-full object-cover rounded-2xl aspect-square"
            src="/picofme.webp"
            alt="Ganesh Halladamal" 
          />
        </div>
        
        <div className="text-sm text-slate-600 dark:text-slate-300 max-w-lg">
          <h1 className="text-xl uppercase font-semibold text-slate-700 dark:text-slate-200">Who am I?</h1>
          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
          
          <p className="mt-8">
            I'm Ganesh Halladamal, a passionate Full Stack Developer with expertise in building modern, 
            responsive web applications that deliver exceptional user experiences. Currently working as a 
            Software Development Engineer at Nighan2 Labs Pvt. Ltd. since March 2025.
          </p>
          
          <p className="mt-4">
            With a Bachelor's degree in Computer Applications and hands-on experience in technologies like 
            React, Next.js, Node.js, and MongoDB, I specialize in creating scalable solutions that solve 
            real-world problems.
          </p>
          
          <p className="mt-4">
            In my current role, I focus on developing full-stack applications, implementing responsive UI components, 
            and collaborating with cross-functional teams to deliver high-quality software solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="https://docs.google.com/document/d/1CUwpkZBSb2_eC8k3x4tAGyDmGCId88XbEq1jcS0wuDM/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button
                className="flex items-center gap-2 hover:-translate-y-0.5 transition bg-gradient-to-r from-indigo-600 to-[#8A7DFF] py-3 px-8 rounded-full text-white"
              >
                <span>Resume</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
            
            <a href="mailto:halladmalganesh@gmail.com" className="inline-block">
              <button
                className="flex items-center gap-2 hover:-translate-y-0.5 transition border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 py-3 px-8 rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
              >
                <span>Hire Me</span>
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
