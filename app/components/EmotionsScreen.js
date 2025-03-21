"use client"

import { useState } from "react";
// import { FaRedo, FaMicrophone, FaAlignLeft } from "react-icons/fa";

export default function EmotionScreen() {
  const [selectedEmotions, setSelectedEmotions] = useState(["Sad", "Gloomy", "Drained", "Tired"]);

  const emotions = ["Sad", "Anxious", "Gloomy", "Drained", "Tired", "Stressed", "Overwhelmed"];

  const toggleEmotion = (emotion) => {
    setSelectedEmotions((prev) =>
      prev.includes(emotion) ? prev.filter((e) => e !== emotion) : [...prev, emotion]
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-6 text-center">
      <h1 className="text-2xl font-semibold">
        Sara,
      </h1>
      <p className="mt-2 text-lg text-gray-700">
        Let me <span className="font-bold">know</span> more about you so that I can be more supportive throughout your <span className="font-bold">journey at dal</span> & <i>beyond</i>
      </p>

      {/* Emotion Selection Box */}
      <div className="bg-white rounded-xl p-6 shadow-md mt-6 w-full max-w-sm">
        <p className="text-lg font-semibold">I feel..</p>
        <div className="grid grid-cols-3 gap-2 mt-4">
          {emotions.map((emotion) => (
            <button
              key={emotion}
              className={`px-3 py-2 text-sm rounded-lg ${
                selectedEmotions.includes(emotion) ? "bg-green-500 text-white" : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => toggleEmotion(emotion)}
            >
              {selectedEmotions.includes(emotion) && "✔"} {emotion}
            </button>
          ))}
        </div>
        <button className="mt-4 text-gray-500">
          {/* <FaRedo size={20} /> */}
        </button>
      </div>

      {/* Response Options */}
      <div className="bg-white rounded-xl p-6 shadow-md mt-6 w-full max-w-sm">
        <p className="text-lg font-semibold">You can add your response by</p>
        <div className="flex justify-around mt-4">
          <div className="flex flex-col items-center">
            {/* <FaMicrophone size={24} className="text-black" /> */}
            <p className="mt-1 text-sm">Speaking</p>
          </div>
          <div className="flex flex-col items-center">
            {/* <FaAlignLeft size={24} className="text-black" /> */}
            <p className="mt-1 text-sm">Writing</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between w-full max-w-sm mt-6">
        <button className="text-gray-600">Skip</button>
        <button className="bg-black text-white py-2 px-6 rounded-lg">Continue</button>
      </div>
    </div>
  );
}
