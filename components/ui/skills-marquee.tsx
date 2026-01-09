"use client";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const SkillBadge = ({ name, iconPath }: { name: string; iconPath: string }) => (
  <div className="flex items-center gap-3 px-5 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <div className="w-8 h-8 flex items-center justify-center relative">
      <Image 
        src={iconPath} 
        alt={`${name} icon`} 
        width={32} 
        height={32}
        className="object-contain"
      />
    </div>
    <span className="font-semibold text-slate-700 dark:text-slate-200 whitespace-nowrap">
      {name}
    </span>
  </div>
);

export function SkillsMarquee() {
  const skills = [
    { name: "React", icon: "/icons/tech/react-2.svg" },
    { name: "Next.js", icon: "/icons/tech/next-js.svg" },
    { name: "TypeScript", icon: "/icons/tech/typescript.svg" },
    { name: "JavaScript", icon: "/icons/tech/javascript-1.svg" },
    { name: "Tailwind CSS", icon: "/icons/tech/tailwind-css-2.svg" },
    { name: "Node.js", icon: "/icons/tech/nodejs-icon.svg" },
    { name: "MongoDB", icon: "/icons/tech/mongodb-icon-1.svg" },
    { name: "PostgreSQL", icon: "/icons/tech/postgresql.svg" },
    { name: "MySQL", icon: "/icons/tech/mysql-3.svg" },
    { name: "Docker", icon: "/icons/tech/docker-3.svg" },
    { name: "Kubernetes", icon: "/icons/tech/kubernets.svg" },
    { name: "AWS", icon: "/icons/tech/aws-2.svg" },
    { name: "Git", icon: "/icons/tech/git.svg" },
    { name: "Python", icon: "/icons/tech/python-5.svg" },
    { name: "PHP", icon: "/icons/tech/php-6.svg" },
    { name: "Java", icon: "/icons/tech/java-14.svg" },
    { name: "C", icon: "/icons/tech/c-1.svg" },
    { name: "HTML", icon: "/icons/tech/html-1.svg" },
    { name: "CSS", icon: "/icons/tech/css-3.svg" },
    { name: "SASS", icon: "/icons/tech/sass-1.svg" },
    { name: "Flutter", icon: "/icons/tech/flutter.svg" },
    { name: "Bootstrap", icon: "/icons/tech/bootstrap-4.svg" },
  ];

  return (
    <div className="w-full py-8">
      <h2 className="text-3xl font-semibold text-center mb-8 text-slate-700 dark:text-slate-200">
        Tech Stack & Skills
      </h2>
      <Marquee pauseOnHover speed={50} className="mt-0">
        {skills.map((skill, index) => (
          <div key={index} className="mx-3">
            <SkillBadge name={skill.name} iconPath={skill.icon} />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
