"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { withBasePath } from "../utils/basePath";

interface Speaker {
  name: string;
  role: string;
  company: string;
  image: string;
}

export default function Speakers() {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSpeakers = async () => {
      try {
        const response = await fetch(withBasePath("/speakers.json"));
        const data = await response.json();
        setSpeakers(data);
      } catch (error) {
        console.error("Error loading speakers data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadSpeakers();
  }, []);

  if (loading) {
    return (
      <section id="speakers" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-700 rounded w-32 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-64 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="speakers" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Speakers
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Conoce a los expertos que compartirán su conocimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {speakers.map((speaker, index) => (
            <div key={index} className="group text-center">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Image
                  src={withBasePath(speaker.image)}
                  alt={speaker.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white">
                {speaker.name}
              </h3>
              <p className="text-[#4285F4] font-medium">{speaker.role}</p>
              <p className="text-gray-400 text-sm">
                {speaker.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
