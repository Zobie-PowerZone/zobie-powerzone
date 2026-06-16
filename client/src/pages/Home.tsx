import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Instagram, Music2 } from 'lucide-react';

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsNavOpen(false);
    }
  };

  const handleBooking = () => {
    // Placeholder for booking functionality
    window.open('https://instagram.com/the_cricket_mentor', '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-md border-b shadow-lg'
            : 'bg-transparent'
        }`}
        style={isScrolled ? { backgroundColor: 'rgba(15, 23, 42, 0.95)', borderBottomColor: 'rgb(51, 65, 85)' } : {}}
      >
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Powerzone Cricket" className="h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('method')}
              className="text-sm hover:text-primary transition-colors"
            >
              The Method
            </button>
            <button
              onClick={() => scrollToSection('programmes')}
              className="text-sm hover:text-primary transition-colors"
            >
              Programmes
            </button>
            <button
              onClick={() => scrollToSection('camps')}
              className="text-sm hover:text-primary transition-colors"
            >
              Camps
            </button>
            <button
              onClick={() => scrollToSection('coach')}
              className="text-sm hover:text-primary transition-colors"
            >
              Our Coach
            </button>
            <Button
              onClick={handleBooking}
              className="btn-primary"
            >
              Book a Session
            </Button>
          </div>

        </div>
      </nav>

      {/* Section Navigation Headers */}
      <div className="pt-20 pb-8 text-center">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <button onClick={() => scrollToSection('method')} className="text-sm font-semibold text-primary hover:text-white transition-colors">The Method</button>
          <button onClick={() => scrollToSection('programmes')} className="text-sm font-semibold text-primary hover:text-white transition-colors">Programmes</button>
          <button onClick={() => scrollToSection('camps')} className="text-sm font-semibold text-primary hover:text-white transition-colors">Camps</button>
          <button onClick={() => scrollToSection('coach')} className="text-sm font-semibold text-primary hover:text-white transition-colors">Our Coach</button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-slate-600/10 pointer-events-none" />

        <div className="container relative z-10">
          <div className="max-w-4xl">
            {/* Red accent line */}
            <div className="h-1 w-20 bg-primary mb-8" />

            {/* Main headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="text-white">Elite Batting</span>
              <br />
              <span className="text-primary">Development</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-secondary-foreground mb-8 font-light">
              Master the art of batting with world-class coaching
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Powerzone Cricket is a specialist batting academy led by first-class cricketer Zobie Sharif. We build complete batters — technically sound, mentally resilient, match-ready.
            </p>

            {/* CTA Button */}
            <Button
              onClick={handleBooking}
              size="lg"
              className="btn-primary text-lg px-8 py-6 font-bold"
            >
              Book a Session
            </Button>
          </div>
        </div>
      </section>

      {/* The PowerZone Method Section */}
      <section id="method" className="section-padding border-t border-b" style={{ backgroundColor: 'rgba(25, 35, 55, 0.3)', borderTopColor: 'rgb(51, 65, 85)', borderBottomColor: 'rgb(51, 65, 85)' }}>
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="section-title">The PowerZone Method</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe in building complete batters — not just teaching shots, but developing the technical foundation, mental resilience, and match awareness that separate good players from elite ones.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border hover:border-primary transition-colors" style={{ backgroundColor: 'rgba(15, 23, 42, 0.5)', borderColor: 'rgb(51, 65, 85)' }}>
                <div className="w-12 h-12 bg-primary rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Technically Sound</h3>
                <p className="text-muted-foreground">
                  Master batting fundamentals with precision coaching on stance, footwork, and shot selection.
                </p>
              </div>

              <div className="p-6 rounded-lg border hover:border-primary transition-colors" style={{ backgroundColor: 'rgba(15, 23, 42, 0.5)', borderColor: 'rgb(51, 65, 85)' }}>
                <div className="w-12 h-12 bg-primary rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Mentally Resilient</h3>
                <p className="text-muted-foreground">
                  Develop confidence, composure, and decision-making skills to perform under pressure.
                </p>
              </div>

              <div className="p-6 rounded-lg border hover:border-primary transition-colors" style={{ backgroundColor: 'rgba(15, 23, 42, 0.5)', borderColor: 'rgb(51, 65, 85)' }}>
                <div className="w-12 h-12 bg-primary rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Match-Ready</h3>
                <p className="text-muted-foreground">
                  Apply skills in realistic match scenarios and competitive situations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Batting Programmes Section */}
      <section id="programmes" className="section-padding">
        <div className="container">
          <h2 className="section-title">Batting Programmes</h2>
          <p className="section-subtitle">Tailored coaching for every level and commitment</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 1-on-1 Private Coaching */}
            <div className="bg-card border rounded-lg p-8 hover:border-primary transition-colors" style={{ borderColor: 'rgb(51, 65, 85)' }}>
              <h3 className="text-2xl font-bold mb-4 text-primary">1-on-1 Private Coaching</h3>
              <p className="text-muted-foreground mb-6">
                Personalized sessions tailored to your specific needs and goals. Work directly with Zobie Sharif or ECB qualified coaches to refine technique, build confidence, and accelerate your development.
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Custom training plans based on individual assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Video analysis and technical feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Mental skills coaching and match preparation</span>
                </li>
              </ul>
              <Button onClick={handleBooking} className="btn-primary w-full">
                Enquire Now
              </Button>
            </div>

            {/* Group Sessions */}
            <div className="bg-card border rounded-lg p-8 hover:border-primary transition-colors" style={{ borderColor: 'rgb(51, 65, 85)' }}>
              <h3 className="text-2xl font-bold mb-4 text-primary">Group Sessions</h3>
              <p className="text-muted-foreground mb-6">
                Learn alongside other ambitious young cricketers in a supportive, competitive environment. Perfect for building skills while developing camaraderie with peers.
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Small group sizes for personalized attention</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Competitive drills and match simulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Peer learning and team development</span>
                </li>
              </ul>
              <Button onClick={handleBooking} className="btn-primary w-full">
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Camps Section */}
      <section id="camps" className="section-padding border-t border-b" style={{ backgroundColor: 'rgba(25, 35, 55, 0.3)', borderTopColor: 'rgb(51, 65, 85)', borderBottomColor: 'rgb(51, 65, 85)' }}>
        <div className="container">
          <h2 className="section-title">Cricket Camps</h2>
          <p className="section-subtitle">Intensive development programmes for ages 6–15</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Easter Camp */}
            <div className="border rounded-lg p-8 hover:border-primary transition-colors" style={{ backgroundColor: 'rgba(15, 23, 42, 0.5)', borderColor: 'rgb(51, 65, 85)' }}>
              <h3 className="text-2xl font-bold mb-2 text-primary">Easter Cricket Camp</h3>
              <p className="text-sm text-muted-foreground mb-4">Three weeks of intensive coaching</p>
              <p className="text-muted-foreground mb-6">
                Join us for a full Easter break experience featuring batting, bowling, and fielding development led by Zobie Sharif and ECB qualified coaches.
              </p>
              <div className="space-y-2 text-muted-foreground mb-6">
                <p><span className="text-primary font-semibold">Ages:</span> 6–15</p>
                <p><span className="text-primary font-semibold">Duration:</span> 3 weeks</p>
                <p><span className="text-primary font-semibold">Focus:</span> All-round cricket skills</p>
              </div>
              <Button onClick={handleBooking} className="btn-primary w-full">
                Learn More
              </Button>
            </div>

            {/* Summer Camp */}
            <div className="border rounded-lg p-8 hover:border-primary transition-colors" style={{ backgroundColor: 'rgba(15, 23, 42, 0.5)', borderColor: 'rgb(51, 65, 85)' }}>
              <h3 className="text-2xl font-bold mb-2 text-primary">Summer Cricket Camp</h3>
              <p className="text-sm text-muted-foreground mb-4">Intensive summer development</p>
              <p className="text-muted-foreground mb-6">
                Our flagship summer programme combines high-energy coaching, competitive matches, and skill development to prepare young cricketers for the season ahead.
              </p>
              <div className="space-y-2 text-muted-foreground mb-6">
                <p><span className="text-primary font-semibold">Ages:</span> 6–15</p>
                <p><span className="text-primary font-semibold">Duration:</span> Multiple weeks available</p>
                <p><span className="text-primary font-semibold">Focus:</span> Batting excellence</p>
              </div>
              <Button onClick={handleBooking} className="btn-primary w-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Coach Section */}
      <section id="coach" className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Coach Image */}
            <div className="rounded-lg overflow-hidden border" style={{ borderColor: 'rgb(51, 65, 85)' }}>
              <img src="/manus-storage/IMG_1893_37643bdd.PNG" alt="Zobie Sharif" className="w-full h-auto object-cover rounded-lg" />
            </div>

            {/* Coach Info */}
            <div>
              <h2 className="section-title">Our Coach</h2>
              <h3 className="text-2xl font-bold text-primary mb-6">Zobie Sharif</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-white">Former Essex CCC First-Class Cricketer</p>
                    <p className="text-muted-foreground text-sm">Professional cricket experience at the highest county level</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-white">ECB Level 3 Advanced Coach</p>
                    <p className="text-muted-foreground text-sm">Certified elite-level coaching qualification</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-white">CEO of Powerzone Cricket</p>
                    <p className="text-muted-foreground text-sm">Leading the vision for elite batting development</p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Zobie brings a wealth of professional cricket experience and a passion for developing the next generation of batters. His coaching philosophy combines technical excellence with mental resilience, ensuring every player leaves Powerzone Cricket better equipped to succeed at the highest levels.
              </p>

              <Button onClick={handleBooking} className="btn-primary">
                Book with Zobie
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12 sm:py-16" style={{ borderTopColor: 'rgb(51, 65, 85)' }}>
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Brand */}
            <div>
              <img src="/manus-storage/4088EE13-A8A8-471F-BEDB-976378B063DF_dee54b2f.png" alt="Powerzone Cricket" className="h-24 w-auto mb-4" />
              <p className="text-muted-foreground text-sm">
                Elite batting development academy led by first-class cricketer Zobie Sharif.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection('method')}
                    className="hover:text-primary transition-colors"
                  >
                    The Method
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('programmes')}
                    className="hover:text-primary transition-colors"
                  >
                    Programmes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('camps')}
                    className="hover:text-primary transition-colors"
                  >
                    Camps
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('coach')}
                    className="hover:text-primary transition-colors"
                  >
                    Our Coach
                  </button>
                </li>
              </ul>
            </div>

            {/* Social & Contact */}
            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex gap-4 mb-6">
                <a
                  href="https://instagram.com/the_cricket_mentor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors"
                  title="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://tiktok.com/@the_cricket_mentor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors"
                  title="TikTok"
                >
                  <Music2 size={20} />
                </a>
              </div>
              <p className="text-muted-foreground text-sm">
                <span className="block font-semibold text-white mb-1">Email</span>
                <a href="mailto:info@powerzonecricket.com" className="hover:text-primary transition-colors">
                  info@powerzonecricket.com
                </a>
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-muted-foreground text-sm" style={{ borderTopColor: 'rgb(51, 65, 85)' }}>
            <p>&copy; 2026 Powerzone Cricket. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
