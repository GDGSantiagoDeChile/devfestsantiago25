import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Agenda from '../components/Agenda';
import Speakers from '../components/Speakers';
import Venue from '../components/Venue';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black selection:bg-[#4285F4] selection:text-white">
      <Navbar />
      <Hero />
      <Agenda />
      <Speakers />
      <Venue />
      <Sponsors />
      <Footer />
    </div>
  );
}
