import { useState } from "react";

const tabData = [
  {
    title: "Web Developer",
    cards: ["Card 1A", "Card 1B", "Card 1C"],
  },
  {
    title: "Business Manager ",
    cards: ["Card 2A", "Card 2B", "Card 2C"],
  },
  {
    title: "Tech Tutor",
    cards: ["Card 3A", "Card 3B", "Card 3C"],
  },
];

export default function TabsWithCarousel() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="flex flex-col md:flex-row items-center max-w-screen-xl px-4 mx-auto">
            <h4 className="text-6xl font-bold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-5xl text-left">
                <span className="font-bold text-white block sm:inline p-2">Work</span>
                Experience
            </h4>
            <div className="max-w-4xl mx-auto p-6 bg-white flex flex-col items-end">
                <div className="flex space-x-4 mb-6">
                    {tabData.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`px-4 py-2 rounded font-medium transition ${
                        activeTab === index
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        {tab.title}
                    </button>
                    ))}
                </div>

                <div className="overflow-x-auto">
                    <div className="flex gap-4">
                    {tabData[activeTab].cards.map((card, i) => (
                        <div
                        key={i}
                        className="min-w-[150px] bg-blue-100 p-4 rounded shadow text-center"
                        >
                        {card}
                        </div>
                    ))}
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                    Ver más
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}
