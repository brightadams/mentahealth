"use client"
import { useRouter } from 'next/navigation'
import Image from "next/image"

export default function VigorScreen({ onBack }) {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-6 text-center">
      {/* Card with Image */}
      <div className="bg-white rounded-xl p-4 shadow-md w-full max-w-sm">
        <Image src="/parrots.png" alt="Promptopia log" width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}/>
        <p className="text-gray-500 text-sm mt-2">#Fact  a little story</p>
      </div>

      {/* Carousel Dots */}
      <div className="flex space-x-1 mt-4">
        <span className="h-2 w-2 bg-black rounded-full"></span>
        <span className="h-2 w-2 bg-gray-400 rounded-full"></span>
        <span className="h-2 w-2 bg-gray-400 rounded-full"></span>
      </div>

      {/* Text Section */}
      <div className="mt-6">
        <h1 className="text-xl font-bold">
          I am <span className="text-black">Vigor!</span>
        </h1>
        <p className="text-gray-700 text-lg italic">more than an AI agent✨</p>
        <p className="mt-3 text-gray-700 text-lg">
          Consider <span className="font-bold">me</span> a friend, 🙌🏾
        </p>
        <p className="text-gray-700 text-lg">
          Designed <span className="font-bold">just</span> for <i>you</i>. 🤝
        </p>
      </div>

      {/* Button */}
      <button onClick={() => router.push("/emotions")} className="bg-white py-3 px-6 rounded-lg mt-6 shadow text-lg font-medium text-black w-full max-w-sm">
        Let me understand your feelings
      </button>

    </div>
  );
}
