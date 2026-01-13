import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  invertDark?: boolean;
};

type SkillsGridProps = React.ComponentProps<"div">;

export function AboutSkills({ className, ...props }: SkillsGridProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x md:grid-cols-4 lg:grid-cols-6",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />
      
      {/* Row 1 */}
      <SkillCard
        className="relative border-r border-b bg-secondary dark:bg-secondary/30"
        logo={{ src: "/icons/tech/react-2.svg", alt: "React" }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6" strokeWidth={1} />
      </SkillCard>
      
      <SkillCard
        className="border-b border-r md:border-r"
        logo={{ src: "/icons/tech/next-js.svg", alt: "Next.js", invertDark: true }}
      />
      
      <SkillCard
        className="relative border-r border-b md:bg-secondary dark:md:bg-secondary/30"
        logo={{ src: "/icons/tech/typescript.svg", alt: "TypeScript" }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 md:hidden lg:block" strokeWidth={1} />
        <PlusIcon className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block" strokeWidth={1} />
      </SkillCard>
      
      <SkillCard
        className="relative border-b bg-secondary md:bg-background lg:border-r dark:bg-secondary/30 md:dark:bg-background"
        logo={{ src: "/icons/tech/javascript-1.svg", alt: "JavaScript" }}
      />
      
      <SkillCard
        className="relative border-r border-b bg-background md:bg-secondary lg:bg-background dark:md:bg-secondary/30 lg:dark:bg-background"
        logo={{ src: "/icons/tech/tailwind-css-2.svg", alt: "Tailwind CSS" }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 md:hidden" strokeWidth={1} />
      </SkillCard>
      
      <SkillCard
        className="border-b md:border-r lg:bg-secondary dark:lg:bg-secondary/30"
        logo={{ src: "/icons/tech/nodejs-icon.svg", alt: "Node.js" }}
      />
      
      {/* Row 2 */}
      <SkillCard
        className="relative border-r border-b bg-secondary md:bg-background lg:bg-secondary dark:bg-secondary/30 md:dark:bg-background lg:dark:bg-secondary/30"
        logo={{ src: "/icons/tech/mongodb-icon-1.svg", alt: "MongoDB" }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 lg:hidden" strokeWidth={1} />
      </SkillCard>
      
      <SkillCard
        className="border-b md:border-r"
        logo={{ src: "/icons/tech/postgresql.svg", alt: "PostgreSQL" }}
      />
      
      <SkillCard
        className="relative border-r border-b md:bg-secondary dark:md:bg-secondary/30"
        logo={{ src: "/icons/tech/mysql-ar21.svg", alt: "MySQL" }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 md:hidden lg:block" strokeWidth={1} />
        <PlusIcon className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block" strokeWidth={1} />
      </SkillCard>
      
      <SkillCard
        className="relative border-b bg-secondary md:bg-background lg:border-r dark:bg-secondary/30 md:dark:bg-background"
        logo={{ src: "/icons/tech/docker-3.svg", alt: "Docker" }}
      />
      
      <SkillCard
        className="relative border-r border-b bg-background md:bg-secondary lg:bg-background dark:md:bg-secondary/30 lg:dark:bg-background"
        logo={{ src: "/icons/tech/kubernets.svg", alt: "Kubernetes" }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 md:hidden" strokeWidth={1} />
      </SkillCard>
      
      <SkillCard
        className="border-b md:border-r lg:bg-secondary dark:lg:bg-secondary/30"
        logo={{ src: "/icons/tech/aws-2.svg", alt: "AWS", invertDark: true }}
      />
      
      {/* Row 3 */}
      <SkillCard
        className="relative border-r border-b bg-secondary md:bg-background lg:bg-secondary dark:bg-secondary/30 md:dark:bg-background lg:dark:bg-secondary/30"
        logo={{ src: "/icons/tech/git.svg", alt: "Git", invertDark: true }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 lg:hidden" strokeWidth={1} />
      </SkillCard>
      
      <SkillCard
        className="border-b md:border-r"
        logo={{ src: "/icons/tech/python-5.svg", alt: "Python" }}
      />
      
      <SkillCard
        className="relative border-r border-b md:bg-secondary dark:md:bg-secondary/30"
        logo={{ src: "/icons/tech/php-ar21.svg", alt: "PHP" }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 md:hidden lg:block" strokeWidth={1} />
        <PlusIcon className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block" strokeWidth={1} />
      </SkillCard>
      
      <SkillCard
        className="relative border-b bg-secondary md:bg-background lg:border-r dark:bg-secondary/30 md:dark:bg-background"
        logo={{ src: "/icons/tech/java-14.svg", alt: "Java" }}
      />
      
      <SkillCard
        className="relative border-r border-b bg-background md:bg-secondary lg:bg-background dark:md:bg-secondary/30 lg:dark:bg-background"
        logo={{ src: "/icons/tech/c-1.svg", alt: "C" }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 md:hidden" strokeWidth={1} />
      </SkillCard>
      
      <SkillCard
        className="border-b md:border-r lg:bg-secondary dark:lg:bg-secondary/30"
        logo={{ src: "/icons/tech/html-1.svg", alt: "HTML" }}
      />
      
      {/* Row 4 */}
      <SkillCard
        className="relative border-r bg-secondary md:bg-background lg:bg-secondary dark:bg-secondary/30 md:dark:bg-background lg:dark:bg-secondary/30"
        logo={{ src: "/icons/tech/css-3.svg", alt: "CSS" }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 lg:hidden" strokeWidth={1} />
      </SkillCard>
      
      <SkillCard
        className="md:border-r"
        logo={{ src: "/icons/tech/sass-1.svg", alt: "SASS" }}
      />
      
      <SkillCard
        className="relative border-r md:bg-secondary dark:md:bg-secondary/30"
        logo={{ src: "/icons/tech/flutter.svg", alt: "Flutter" }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 md:hidden lg:block" strokeWidth={1} />
        <PlusIcon className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block" strokeWidth={1} />
      </SkillCard>
      
      <SkillCard
        className="relative bg-secondary md:bg-background lg:border-r dark:bg-secondary/30 md:dark:bg-background"
        logo={{ src: "/icons/tech/bootstrap-4.svg", alt: "Bootstrap" }}
      />
      
      <SkillCard
        className="relative border-r bg-background md:bg-secondary lg:bg-background dark:md:bg-secondary/30 lg:dark:bg-background"
        logo={{ src: "/icons/tech/nginx-1.svg", alt: "Nginx" }}
      />
      
      <SkillCard
        className="md:border-r lg:bg-secondary dark:lg:bg-secondary/30"
        logo={{ src: "/icons/tech/postman.svg", alt: "Postman" }}
      />
      
      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
    </div>
  );
}

type SkillCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function SkillCard({ logo, className, children, ...props }: SkillCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-background px-4 py-8 md:p-8",
        className
      )}
      {...props}
    >
      <Image
        alt={logo.alt}
        className={cn(
          "pointer-events-none h-8 select-none md:h-10 object-contain",
          logo.invertDark && "dark:brightness-0 dark:invert"
        )}
        height={logo.height || 40}
        src={logo.src}
        width={logo.width || 40}
      />
      {children}
    </div>
  );
}
