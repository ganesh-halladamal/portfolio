"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function AboutIntro() {
  const handleResumeClick = () => {
    window.open('https://docs.google.com/document/d/1CUwpkZBSb2_eC8k3x4tAGyDmGCId88XbEq1jcS0wuDM/edit', '_blank');
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4">
      <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
        <Image 
          className="max-w-md w-full object-cover rounded-2xl aspect-square pointer-events-none"
          src="/picofme.webp"
          alt="Ganesh Halladamal"
          width={448}
          height={448}
          priority
        />
      </div>
      
      <div className="text-sm text-slate-600 dark:text-slate-300 max-w-lg">
        <h1 className="text-xl uppercase font-semibold text-slate-700 dark:text-slate-200">Who am I?</h1>
        <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
        
        <p className="mt-8">
          I&apos;m <span className="font-semibold text-slate-800 dark:text-slate-100 relative inline-block">
            Ganesh Halladamal
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
          </span>, an <span className="font-semibold text-slate-800 dark:text-slate-100 relative inline-block">
            ETL Engineer
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
          </span> and Data Engineering enthusiast passionate about building scalable data pipelines, 
          transforming raw data into meaningful insights, and ensuring high-quality, reliable data for business intelligence. 
          I enjoy working with large datasets and solving complex data integration challenges through efficient ETL workflows.
        </p>
        
        <p className="mt-4">
          My expertise includes SQL, Python, PySpark, Pandas, Data Warehousing, ETL Development, Source-to-Target Mapping, 
          Data Validation, Data Reconciliation, and SCD Type 1 & Type 2 implementations. I have hands-on experience with 
          modern data platforms and tools such as Snowflake, Databricks, and Informatica PowerCenter.
        </p>
        
        <p className="mt-4">
          I focus on building scalable ETL pipelines, improving data quality, and delivering trusted data that empowers 
          organizations to make informed, data-driven decisions while continuously expanding my knowledge of cloud data technologies.
        </p>
        
        <div className="flex flex-wrap gap-4 mt-8 relative" style={{ zIndex: 9999 }}>
          <button
            type="button"
            onClick={handleResumeClick}
            style={{ position: 'relative', zIndex: 9999 }}
            className="flex items-center justify-center gap-2 hover:-translate-y-0.5 transition bg-gradient-to-r from-indigo-600 to-[#8A7DFF] py-3 px-8 rounded-full text-white cursor-pointer"
          >
            <span className="pointer-events-none">Resume</span>
            <ArrowRight className="w-4 h-4 pointer-events-none" />
          </button>
          
          <a 
            href="mailto:halladmalganesh@gmail.com"
            style={{ position: 'relative', zIndex: 9999 }}
            className="flex items-center justify-center gap-2 hover:-translate-y-0.5 transition border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 py-3 px-8 rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/20 cursor-pointer"
          >
            <span className="pointer-events-none">Hire Me</span>
          </a>
        </div>
      </div>
    </section>
  );
}
