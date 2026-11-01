'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { withBasePath } from '../utils/basePath';

interface Sponsor {
  id: number;
  name: string;
  logo: string;
  tier: string;
}

export default function Sponsors() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSponsors = async () => {
      try {
        const response = await fetch(withBasePath('/sponsors.json'));
        const data = await response.json();
        setSponsors(data);
      } catch (error) {
        console.error('Error loading sponsors data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSponsors();
  }, []);

  if (loading) {
    return (
      <section id="sponsors" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-700 rounded w-40 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-80 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="sponsors" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Nuestros Sponsors
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Gracias a estas increíbles empresas por hacer posible este evento.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="flex justify-center items-center py-8 px-12 bg-gray-900 rounded-lg border border-gray-800">
              <Image
                src={withBasePath(sponsor.logo)}
                alt={sponsor.name}
                width={180}
                height={60}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
