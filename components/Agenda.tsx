'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { withBasePath } from '../utils/basePath';

interface ScheduleItem {
  time: string;
  title: string;
  type: string;
  speaker: string;
}

interface Speaker {
  name: string;
  role: string;
  company: string;
  image: string;
}

export default function Agenda() {
  const [activeTab, setActiveTab] = useState<'talks' | 'workshops'>('talks');
  const [talksSchedule, setTalksSchedule] = useState<ScheduleItem[]>([]);
  const [workshopsSchedule, setWorkshopsSchedule] = useState<ScheduleItem[]>([]);
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [talksResponse, workshopsResponse, speakersResponse] = await Promise.all([
          fetch(withBasePath('/talks.json')),
          fetch(withBasePath('/workshops.json')),
          fetch(withBasePath('/speakers.json'))
        ]);
        
        const talksData = await talksResponse.json();
        const workshopsData = await workshopsResponse.json();
        const speakersData = await speakersResponse.json();
        
        setTalksSchedule(talksData);
        setWorkshopsSchedule(workshopsData);
        setSpeakers(speakersData);
      } catch (error) {
        console.error('Error loading schedule data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const currentSchedule = activeTab === 'talks' ? talksSchedule : workshopsSchedule;

  const getSpeakerImage = (speakerName: string) => {
    if (speakerName.trim() === "Equipo") {
      return withBasePath("/mini_logo.jpg");
    }
    const speaker = speakers.find(s => s.name === speakerName);
    return speaker ? withBasePath(speaker.image) : null;
  };

  if (loading) {
    return (
      <section id="agenda" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-700 rounded w-48 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="agenda" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Agenda
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Explora nuestros tracks de conferencias y talleres prácticos.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 p-1 rounded-xl shadow-sm inline-flex">
            <button
              onClick={() => setActiveTab('talks')}
              className={`w-32 cursor-pointer px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'talks'
                  ? 'bg-[#4285F4] text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Talks
            </button>
            <button
              onClick={() => setActiveTab('workshops')}
              className={`w-32 cursor-pointer px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'workshops'
                  ? 'bg-[#EA4335] text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Workshops
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {currentSchedule.map((item, index) => (
            <div key={index} className="relative flex group">
              {/* Time Column */}
              <div className="shrink-0 w-20 sm:w-24 text-right mr-6 pt-6 sm:pt-8">
                <span className="text-lg sm:text-xl font-bold text-white font-mono">
                  {item.time}
                </span>
              </div>

              {/* Content Card */}
              <div className={`grow p-6 rounded-2xl border transition-all duration-200 
                ${item.type === 'break' || item.type === 'general' 
                  ? 'bg-gray-800/50 border-transparent' 
                  : 'bg-gray-800 border-gray-700 shadow-sm hover:shadow-md'
                }
              `}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className={`text-lg sm:text-xl font-bold ${
                      item.type === 'break' ? 'text-gray-400' : 'text-white'
                    }`}>
                      {item.title}
                    </h3>
                    {item.speaker && (
                      <div className="mt-2 flex items-center text-gray-300">
                        <div className="flex -space-x-2 mr-3">
                          {item.speaker.split('/').map((speakerName, idx) => {
                            const trimmedName = speakerName.trim();
                            const speakerImage = getSpeakerImage(trimmedName);
                            return speakerImage ? (
                              <div key={idx} className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-800">
                                <Image
                                  src={speakerImage}
                                  alt={trimmedName}
                                  width={32}
                                  height={32}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ) : (
                              <div key={idx} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-gray-800
                                ${activeTab === 'talks' ? 'bg-[#4285F4]' : 'bg-[#EA4335]'}
                              `}>
                                {trimmedName.charAt(0)}
                              </div>
                            );
                          })}
                        </div>
                        <span className="font-medium">{item.speaker.replace(/\//g, ' & ')}</span>
                      </div>
                    )}
                  </div>
                  
                  <span className={`self-start sm:self-center px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wide
                    ${item.type === 'keynote' ? 'bg-yellow-900/30 text-yellow-300' :
                      item.type === 'workshop' ? 'bg-red-900/30 text-red-300' :
                      item.type === 'talk' ? 'bg-blue-900/30 text-blue-300' :
                      'bg-gray-900/30 text-gray-300'}
                  `}>
                    {item.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
