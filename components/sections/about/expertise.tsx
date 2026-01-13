"use client";

import React from "react";
import { Zap, Palette, Database, FileCode, Lightbulb, GraduationCap } from "lucide-react";

export function AboutExpertise() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
      <h1 className="text-3xl font-semibold text-center mx-auto text-slate-700 dark:text-slate-200">My Expertise</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 text-center mt-2 max-w-lg mx-auto">
        A comprehensive skill set focused on building modern, scalable, and user-friendly web applications.
      </p>
      <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-8 md:px-0 pt-16">
        <div className="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1] dark:bg-[#1a1a2e]"></div>
        
        <div>
          <div className="size-10 p-2 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 rounded flex items-center justify-center">
            <Zap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-600 dark:text-slate-300">Full Stack Development</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Expert in React, Next.js, Node.js, and MongoDB for building complete web solutions.</p>
          </div>
        </div>

        <div>
          <div className="size-10 p-2 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 rounded flex items-center justify-center">
            <Palette className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-600 dark:text-slate-300">Responsive Design</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Creating pixel-perfect, mobile-first designs with Tailwind CSS and Bootstrap.</p>
          </div>
        </div>

        <div>
          <div className="size-10 p-2 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 rounded flex items-center justify-center">
            <Database className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-600 dark:text-slate-300">Database Management</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Proficient in SQL and MongoDB for efficient data storage and retrieval.</p>
          </div>
        </div>

        <div>
          <div className="size-10 p-2 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 rounded flex items-center justify-center">
            <FileCode className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-600 dark:text-slate-300">Clean Code Practices</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Writing maintainable, well-documented code following industry best practices.</p>
          </div>
        </div>

        <div>
          <div className="size-10 p-2 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 rounded flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-600 dark:text-slate-300">Problem Solving</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Analytical approach to solving complex technical challenges efficiently.</p>
          </div>
        </div>

        <div>
          <div className="size-10 p-2 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 rounded flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-600 dark:text-slate-300">Continuous Learning</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Always exploring new technologies and staying updated with industry trends.</p>
          </div>
        </div>
      </div>
    </>
  );
}
