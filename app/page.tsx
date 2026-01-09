import { ParticleTextEffect } from "@/components/ui/particle-text-effect";

export default function Home() {
  const words = [
    "HELLO",
    "I'M GANESH",
    "A FRONTEND",
    "DEVELOPER",
    "A BACKEND",
    "DEVELOPER",
    "FULL STACK",
    "ENGINEER",
    "A DEVOPS",
    "ENTHUSIAST",
    "TRAVELLER",
    "PROBLEM",
    "SOLVER",
    "TECH LOVER",
    "INNOVATOR",
  ];

  return <ParticleTextEffect words={words} />;
}
