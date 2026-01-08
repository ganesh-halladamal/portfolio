import { ParticleTextEffect } from "@/components/ui/particle-text-effect";

export default function Home() {
  const words = [
    "HELLO",
    "I'M GANESH",
    "HALLADAMAL",
    "FRONTEND",
    "DEVELOPER",
    "BACKEND",
    "DEVELOPER",
    "FULL STACK",
    "ENGINEER",
    "DEVOPS",
    "ENTHUSIAST",
    "TRAVELLER",
    "PROBLEM",
    "SOLVER",
    "TECH LOVER",
    "INNOVATOR",
  ];

  return <ParticleTextEffect words={words} />;
}
