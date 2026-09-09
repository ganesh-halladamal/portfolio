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
                    Working across data integration and quality assurance, validating end-to-end data flows
                    and automating data quality checks to keep source and target systems consistent.
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                      Key Responsibilities:
                    </h4>
                    <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      <li>
                        Analyzed business requirements, functional specs, source-to-target mapping documents,
                        and technical specs to understand data flows, transformation logic, and business rules.
                      </li>
                      <li>
                        Designed and executed functional, regression, integration, and data validation test cases
                        for application and data integration workflows, ensuring accuracy and consistency across systems.
                      </li>
                      <li>
                        Performed SQL-based source-to-target validation and data reconciliation, validating record
                        counts, field-level values, NULLs, duplicates, data types, formats, and mandatory fields.
                      </li>
                      <li>
                        Built and maintained Python automation scripts using Pandas for data profiling,
                        reconciliation, duplicate identification, and data quality validation, reducing manual
                        validation effort.
                      </li>
                      <li>
                        Validated API and database integrations and performed defect investigation by tracing data
                        across application layers, source systems, transformation logic, and target databases.
                      </li>
                      <li>
                        Logged, tracked, and retested defects in JIRA; collaborated with development teams on
                        root-cause analysis and supported regression testing after fixes.
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {[
                      "SQL",
                      "Python",
                      "Pandas",
                      "Data Validation",
                      "ETL Testing",
                      "API Testing",
                      "JIRA",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
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
