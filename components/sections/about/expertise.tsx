"use client";

import React from "react";
import { Database, GitMerge, ShieldCheck, CloudCog, BarChart2, Lightbulb } from "lucide-react";

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
        A focused skill set in Data Engineering, ETL development, and building reliable data pipelines that power business decisions.
      </p>
      <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-8 md:px-0 pt-16">
        <div className="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1] dark:bg-[#1a1a2e]"></div>
        
        <div>
          <div className="size-10 p-2 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 rounded flex items-center justify-center">
            <GitMerge className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-600 dark:text-slate-300">ETL Pipeline Development</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Designing and building robust Extract, Transform, Load pipelines using Informatica PowerCenter, PySpark, and Python for large-scale data integration.</p>
          </div>
        </div>

        <div>
          <div className="size-10 p-2 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 rounded flex items-center justify-center">
            <Database className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-600 dark:text-slate-300">Data Warehousing</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Architecting and optimizing data warehouse solutions on Snowflake and Databricks, including dimensional modelling and SCD Type 1 & 2 implementations.</p>
          </div>
        </div>

        <div>
          <div className="size-10 p-2 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 rounded flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-600 dark:text-slate-300">Data Quality & Validation</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Implementing data validation frameworks, reconciliation checks, and source-to-target mapping to ensure accurate, trustworthy data for business intelligence.</p>
          </div>
        </div>

        <div>
          <div className="size-10 p-2 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 rounded flex items-center justify-center">
            <CloudCog className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-600 dark:text-slate-300">Cloud Data Platforms</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Hands-on experience with cloud-based data platforms including AWS, Snowflake, and Databricks to build scalable and cost-efficient data solutions.</p>
          </div>
        </div>

        <div>
          <div className="size-10 p-2 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 rounded flex items-center justify-center">
            <BarChart2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-600 dark:text-slate-300">Analytics Engineering</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Transforming raw data into clean, analytics-ready datasets using dbt and SQL, enabling teams to build reliable reports and dashboards in Tableau.</p>
          </div>
        </div>

        <div>
          <div className="size-10 p-2 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 rounded flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-600 dark:text-slate-300">SQL & Data Modelling</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Expert-level SQL across PostgreSQL, MySQL, Oracle, and Snowflake — writing complex queries, optimising performance, and designing efficient data models.</p>
          </div>
        </div>
      </div>
    </>
  );
}
