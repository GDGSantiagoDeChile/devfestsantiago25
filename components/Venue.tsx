'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { withBasePath } from '../utils/basePath';

interface Venue {
  name: string;
  address: string;
  date: string;
  time: string;
  description: string;
  mapUrl: string;
}

export default function Venue() {
  const [venue, setVenue] = useState<Venue | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVenue = async () => {
      try {
        const response = await fetch(withBasePath('/venue.json'));
        const data = await response.json();
        setVenue(data);
      } catch (error) {
        console.error('Error loading venue data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadVenue();
  }, []);

  if (loading) {
    return (
      <section id="venue" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-700 rounded w-24 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-80 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!venue) return null;
  return (
    <section id="venue" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Venue
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              {venue.description}
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-[#EA4335]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div className="ml-3 text-base text-gray-300">
                  <p>{venue.name}</p>
                  <p>{venue.address}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-[#FBBC05]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="ml-3 text-base text-gray-300">
                  <p>{venue.date}</p>
                  <p>{venue.time}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a href={venue.mapUrl} target="_blank" rel="noopener noreferrer" className="text-[#4285F4] font-medium hover:underline">
                Ver cómo llegar en Google Maps &rarr;
              </a>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0 relative rounded-xl shadow-xl overflow-hidden h-96 bg-gray-700">
             {/* Map Image */}
            <div className="absolute inset-0">
              <Image
                src={withBasePath("/hub_providencia.jpeg")}
                alt="Hub Providencia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
