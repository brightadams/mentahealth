'use client'
 
import { useRouter } from 'next/navigation'
import Image from "next/image"

export default function WelcomeScreen({ onNext }) {
  const router = useRouter();
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-6">
        {/* Profile Image */}
        <Image src="/girlphoto.png" alt="Promptopia log" width={120} height={120} className="object-contain"/>
  
        {/* Welcome Message */}
        <h1 className="text-2xl font-semibold text-black flex items-center pt-16">
          Sara! <span className="ml-2">👋</span>
        </h1>
  
        <p className="text-center text-gray-700 text-lg mt-2">
          Dal appreciates your first step towards taking care of your wholistic health! ✨
        </p>
  
        {/* Continue Button */}
        <button onClick={() => router.push("/vigor")} className="bg-white py-3 px-8 rounded-lg mt-6 shadow text-lg font-medium text-black">
          Continue
        </button>
      </div>
    );
  }
  