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
        logo={{ src: "/icons/tech/python-5.svg", alt: "Python", width: 48, height: 48 }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6" strokeWidth={1} />
      </SkillCard>
      
      <SkillCard
        className="border-b border-r md:border-r"
        logo={{ src: "/icons/tech/Apache_Spark_logo.svg", alt: "Apache Spark", width: 110, height: 64 }}
      />
      
      <SkillCard
        className="relative border-r border-b md:bg-secondary dark:md:bg-secondary/30"
        logo={{ src: "/icons/tech/Pandas_logo.svg", alt: "Pandas", width: 120, height: 64 }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 md:hidden lg:block" strokeWidth={1} />
        <PlusIcon className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block" strokeWidth={1} />
      </SkillCard>
      
      <SkillCard
        className="relative border-b bg-secondary md:bg-background lg:border-r dark:bg-secondary/30 md:dark:bg-background"
        logo={{ src: "/icons/tech/Snowflake_Logo.webp", alt: "Snowflake", width: 120, height: 64 }}
      />
      
      <SkillCard
        className="relative border-r border-b bg-background md:bg-secondary lg:bg-background dark:md:bg-secondary/30 lg:dark:bg-background"
        logo={{ src: "/icons/tech/Databricks-logo.svg", alt: "Databricks", width: 110, height: 64, invertDark: true }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 md:hidden" strokeWidth={1} />
      </SkillCard>
      
      <SkillCard
        className="border-b md:border-r lg:bg-secondary dark:lg:bg-secondary/30"
        logo={{ src: "/icons/tech/AirflowLogo.svg", alt: "Apache Airflow", width: 110, height: 64 }}
      />
      
      {/* Row 2 */}
      <SkillCard
        className="relative border-r border-b bg-secondary md:bg-background lg:bg-secondary dark:bg-secondary/30 md:dark:bg-background lg:dark:bg-secondary/30"
        logo={{ src: "/icons/tech/Dbt-logo.svg", alt: "dbt", width: 72, height: 64, invertDark: true }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 lg:hidden" strokeWidth={1} />
      </SkillCard>
      
      <SkillCard
        className="border-b md:border-r"
        logo={{ src: "/icons/tech/kafka.svg", alt: "Apache Kafka", width: 80, height: 80, invertDark: true }}
      />
      
      <SkillCard
        className="relative border-r border-b md:bg-secondary dark:md:bg-secondary/30"
        logo={{ src: "/icons/tech/postgresql.svg", alt: "PostgreSQL", width: 48, height: 48 }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 md:hidden lg:block" strokeWidth={1} />
        <PlusIcon className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block" strokeWidth={1} />
      </SkillCard>
      
      <SkillCard
        className="relative border-b bg-secondary md:bg-background lg:border-r dark:bg-secondary/30 md:dark:bg-background"
        logo={{ src: "/icons/tech/mysql-ar21.svg", alt: "MySQL", width: 120, height: 72 }}
      />
      
      <SkillCard
        className="relative border-r border-b bg-background md:bg-secondary lg:bg-background dark:md:bg-secondary/30 lg:dark:bg-background"
        logo={{ src: "/icons/tech/mongodb-icon-1.svg", alt: "MongoDB", width: 72, height: 72 }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 md:hidden" strokeWidth={1} />
      </SkillCard>
      
      <SkillCard
        className="border-b md:border-r lg:bg-secondary dark:lg:bg-secondary/30"
        logo={{ src: "/icons/tech/Oracle_logo.svg", alt: "Oracle", width: 130, height: 72 }}
      />
      
      {/* Row 3 */}
      <SkillCard
        className="relative border-r border-b bg-secondary md:bg-background lg:bg-secondary dark:bg-secondary/30 md:dark:bg-background lg:dark:bg-secondary/30"
        logo={{ src: "/icons/tech/aws-2.svg", alt: "AWS", width: 64, height: 48, invertDark: true }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 lg:hidden" strokeWidth={1} />
      </SkillCard>
      
      <SkillCard
        className="border-b md:border-r"
        logo={{ src: "/icons/tech/docker-3.svg", alt: "Docker", width: 90, height: 72 }}
      />
      
      <SkillCard
        className="relative border-r border-b md:bg-secondary dark:md:bg-secondary/30"
        logo={{ src: "/icons/tech/git.svg", alt: "Git", width: 72, height: 72, invertDark: true }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 md:hidden lg:block" strokeWidth={1} />
        <PlusIcon className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block" strokeWidth={1} />
      </SkillCard>
      
      <SkillCard
        className="relative border-b bg-secondary md:bg-background lg:border-r dark:bg-secondary/30 md:dark:bg-background"
        logo={{ src: "/icons/tech/Tableau.svg", alt: "Tableau", width: 130, height: 72 }}
      />
      
      <SkillCard
        className="relative border-r border-b bg-background md:bg-secondary lg:bg-background dark:md:bg-secondary/30 lg:dark:bg-background"
        logo={{ src: "/icons/tech/Jupyter.svg", alt: "Jupyter", width: 72, height: 72 }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 md:hidden" strokeWidth={1} />
      </SkillCard>
      
      <SkillCard
        className="border-b md:border-r lg:bg-secondary dark:lg:bg-secondary/30"
        logo={{ src: "/icons/tech/html-1.svg", alt: "HTML", width: 48, height: 48 }}
      />
      
      {/* Row 4 */}
      <SkillCard
        className="relative border-r bg-secondary md:bg-background lg:bg-secondary dark:bg-secondary/30 md:dark:bg-background lg:dark:bg-secondary/30"
        logo={{ src: "/icons/tech/css-3.svg", alt: "CSS", width: 48, height: 48 }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 lg:hidden" strokeWidth={1} />
      </SkillCard>
      
      <SkillCard
        className="md:border-r"
        logo={{ src: "/icons/tech/javascript-1.svg", alt: "JavaScript", width: 48, height: 48 }}
      />
      
      <SkillCard
        className="relative border-r md:bg-secondary dark:md:bg-secondary/30"
        logo={{ src: "/icons/tech/react-2.svg", alt: "React", width: 48, height: 48 }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 md:hidden lg:block" strokeWidth={1} />
        <PlusIcon className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block" strokeWidth={1} />
      </SkillCard>
      
      <SkillCard
        className="relative bg-secondary md:bg-background lg:border-r dark:bg-secondary/30 md:dark:bg-background"
        logo={{ src: "/icons/tech/tailwind-css-2.svg", alt: "Tailwind CSS", width: 64, height: 48 }}
      />
      
      <SkillCard
        className="relative border-r bg-background md:bg-secondary lg:bg-background dark:md:bg-secondary/30 lg:dark:bg-background"
        logo={{ src: "/icons/tech/bootstrap-4.svg", alt: "Bootstrap", width: 48, height: 48 }}
      />
      
      <SkillCard
        className="md:border-r lg:bg-secondary dark:lg:bg-secondary/30"
        logo={{ src: "/icons/tech/sass-1.svg", alt: "SASS", width: 72, height: 72 }}
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
          "pointer-events-none select-none object-contain w-full h-full",
          logo.invertDark && "dark:brightness-0 dark:invert"
        )}
        height={logo.height || 80}
        src={logo.src}
        width={logo.width || 80}
        style={{ maxWidth: logo.width || 80, maxHeight: logo.height || 80 }}
      />
      {children}
    </div>
  );
}
