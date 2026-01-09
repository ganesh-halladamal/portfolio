"use client";

import React, { useState, useRef } from "react";
import type { MouseEvent } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/lib/types";
import Image from "next/image";

interface CardTransform {
  rotateX: number;
  rotateY: number;
  translateY: number;
  scale: number;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [transform, setTransform] = useState<CardTransform>({
    rotateX: 0,
    rotateY: 0,
    translateY: 0,
    scale: 1,
  });

  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>): void => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (y / rect.height) * -10;
    const rotateY = (x / rect.width) * 10;

    setTransform({
      rotateX,
      rotateY,
      translateY: -10,
      scale: 1.02,
    });
  };

  const handleMouseLeave = (): void => {
    setTransform({
      rotateX: 0,
      rotateY: 0,
      translateY: 0,
      scale: 1,
    });
  };

  const getTransformStyle = (): string => {
    return `translateY(${transform.translateY}px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`;
  };

  return (
    <div
      className="perspective-1000 group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        className="relative w-full h-full min-h-[500px] rounded-2xl cursor-pointer transition-all duration-500 transform-gpu bg-card shadow-2xl shadow-indigo-600/40 p-6"
        style={{
          transform: getTransformStyle(),
        }}
      >
        {/* Card Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Project Image */}
          <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden shadow-lg shadow-indigo-600/20">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <h3 className="text-2xl font-bold mb-3 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
            {project.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-grow">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-auto flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-indigo-600 to-[#8A7DFF] text-white rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
