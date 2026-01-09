"use client";

import React from "react";
import Image from "next/image";

export default function AboutComponent() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="relative max-w-5xl mx-auto">
        {/* Glow effect */}
        <div className="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-primary/20"></div>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center mx-auto">About Me</h1>
        <p className="text-sm text-gray-400 text-center mt-2 max-w-lg mx-auto">
          A passionate Full Stack Developer crafting modern web applications with cutting-edge technologies.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-16">
          <div>
            <div className="size-10 p-2 bg-primary/10 border border-primary/20 rounded">
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="mt-5 space-y-2">
              <h3 className="text-base font-medium text-white">Lightning-Fast Development</h3>
              <p className="text-sm text-gray-400">
                Building high-performance applications with React, Next.js, and modern web technologies.
              </p>
            </div>
          </div>

          <div>
            <div className="size-10 p-2 bg-primary/10 border border-primary/20 rounded">
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <div className="mt-5 space-y-2">
              <h3 className="text-base font-medium text-white">Beautiful UI/UX Design</h3>
              <p className="text-sm text-gray-400">
                Creating pixel-perfect, responsive interfaces that users love to interact with.
              </p>
            </div>
          </div>

          <div>
            <div className="size-10 p-2 bg-primary/10 border border-primary/20 rounded">
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <div className="mt-5 space-y-2">
              <h3 className="text-base font-medium text-white">Full Stack Expertise</h3>
              <p className="text-sm text-gray-400">
                End-to-end development from database design to frontend implementation.
              </p>
            </div>
          </div>

          <div>
            <div className="size-10 p-2 bg-primary/10 border border-primary/20 rounded">
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="mt-5 space-y-2">
              <h3 className="text-base font-medium text-white">Clean Code & Documentation</h3>
              <p className="text-sm text-gray-400">
                Writing maintainable, well-documented code following best practices.
              </p>
            </div>
          </div>

          <div>
            <div className="size-10 p-2 bg-primary/10 border border-primary/20 rounded">
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <div className="mt-5 space-y-2">
              <h3 className="text-base font-medium text-white">Scalable Solutions</h3>
              <p className="text-sm text-gray-400">
                Building applications that grow with your business needs and user base.
              </p>
            </div>
          </div>

          <div>
            <div className="size-10 p-2 bg-primary/10 border border-primary/20 rounded">
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="mt-5 space-y-2">
              <h3 className="text-base font-medium text-white">Security & Best Practices</h3>
              <p className="text-sm text-gray-400">
                Implementing secure coding practices and following industry standards.
              </p>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-4 md:px-0 py-20 mt-16">
          <Image
            className="max-w-sm w-full rounded-xl h-auto border border-gray-800"
            src="/images/profile.jpg"
            alt="Ganesh Halladamal"
            width={400}
            height={400}
          />
          <div>
            <h2 className="text-3xl font-semibold">My Journey</h2>
            <p className="text-sm text-gray-400 mt-2">
              From passionate learner to Full Stack Developer — building digital experiences that matter.
            </p>
            <div className="flex flex-col gap-8 mt-8">
              <div className="flex items-start gap-4">
                <div className="size-9 p-2 bg-primary/10 border border-primary/20 rounded flex-shrink-0">
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-medium text-white">Full Stack Development</h3>
                  <p className="text-sm text-gray-400">
                    Expertise in React, Node.js, MongoDB, and modern web technologies. Building scalable applications from concept to deployment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="size-9 p-2 bg-primary/10 border border-primary/20 rounded flex-shrink-0">
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-medium text-white">Continuous Learning</h3>
                  <p className="text-sm text-gray-400">
                    Always exploring new technologies and best practices. Completed BCA from KLEs SSMS College Athani in 2023.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="size-9 p-2 bg-primary/10 border border-primary/20 rounded flex-shrink-0">
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-medium text-white">Collaboration & Communication</h3>
                  <p className="text-sm text-gray-400">
                    Strong team player with excellent communication skills. Love working with diverse teams to build amazing products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
