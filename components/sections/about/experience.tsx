"use client";

import { Briefcase, Calendar } from "lucide-react";

export function AboutExperience() {
  return (
    <div className="w-full py-8">
      <h2 className="text-3xl font-semibold text-center mb-12 text-slate-700 dark:text-slate-200">
        Professional Experience
      </h2>
      
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative border-l-2 border-indigo-600 dark:border-indigo-400 pl-8 pb-8">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400 border-4 border-background"></div>
          
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-1">
                  Software Development Engineer
                </h3>
                
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                  Nighan2 Labs Pvt. Ltd.
                </p>
                
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">March 2025 - Present</span>
                </div>
                
                <div className="space-y-3">
                  <p className="text-slate-700 dark:text-slate-300">
                    Currently working as a Software Development Engineer, focusing on building scalable web applications 
                    and implementing modern development practices.
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                      Key Responsibilities:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li>Developing and maintaining full-stack web applications</li>
                      <li>Implementing responsive UI components with React and Next.js</li>
                      <li>Building RESTful APIs and integrating with databases</li>
                      <li>Collaborating with cross-functional teams in agile environment</li>
                      <li>Writing clean, maintainable, and well-documented code</li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium">
                      React
                    </span>
                    <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium">
                      Node.js
                    </span>
                    <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium">
                      MongoDB
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
