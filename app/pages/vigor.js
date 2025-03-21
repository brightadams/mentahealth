import { useRouter } from "next/router";
import VigorScreen from "../components/VigorScreen";

export default function Vigor() {
  const router = useRouter();
  return <VigorScreen onBack={() => router.push("/emotions")} />;
}
