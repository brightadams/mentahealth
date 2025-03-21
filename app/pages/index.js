"use client"
import { useRouter } from "next/router";
import WelcomeScreen from "../components/WelcomeScreen";

export default function Home() {
  const router = useRouter();
  return <WelcomeScreen onNext={() => router.push("/vigor")} />;
}
