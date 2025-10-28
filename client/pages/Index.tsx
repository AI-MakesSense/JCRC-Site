import { Mail, Menu, X, Building2, BookOpen, Newspaper, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-deep-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">◊</span>
              </div>
              <span className="text-lg font-bold text-charcoal">JCRC-NM</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-charcoal hover:text-deep-blue transition font-medium text-sm">HOME</a>
              <a href="#about" className="text-charcoal hover:text-deep-blue transition font-medium text-sm">ABOUT US</a>
              <a href="#programs" className="text-charcoal hover:text-deep-blue transition font-medium text-sm">PROGRAMS</a>
              <a href="#events" className="text-charcoal hover:text-deep-blue transition font-medium text-sm">EVENTS</a>
              <a href="#resources" className="text-charcoal hover:text-deep-blue transition font-medium text-sm">RESOURCES</a>
              <a href="#news" className="text-charcoal hover:text-deep-blue transition font-medium text-sm">NEWS</a>
              <button className="px-4 py-2 bg-deep-blue text-white rounded-md hover:opacity-90 transition font-semibold text-sm">
                GET INVOLVED
              </button>
            </nav>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-charcoal"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {mobileMenuOpen && (
            <nav className="mt-4 flex flex-col gap-3 md:hidden">
              <a href="#home" className="text-charcoal hover:text-deep-blue transition font-medium text-sm py-2">HOME</a>
              <a href="#about" className="text-charcoal hover:text-deep-blue transition font-medium text-sm py-2">ABOUT US</a>
              <a href="#programs" className="text-charcoal hover:text-deep-blue transition font-medium text-sm py-2">PROGRAMS</a>
              <a href="#events" className="text-charcoal hover:text-deep-blue transition font-medium text-sm py-2">EVENTS</a>
              <a href="#resources" className="text-charcoal hover:text-deep-blue transition font-medium text-sm py-2">RESOURCES</a>
              <a href="#news" className="text-charcoal hover:text-deep-blue transition font-medium text-sm py-2">NEWS</a>
              <button className="w-full px-4 py-2 bg-deep-blue text-white rounded-md hover:opacity-90 transition font-semibold text-sm">
                GET INVOLVED
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-deep-blue to-slate-blue text-white py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Building a Vibrant, Secure Jewish Community in New Mexico
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Connecting, educating, and advocating for Jewish voices across the Land of Enchantment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-warm-gold text-charcoal rounded-md hover:opacity-90 transition font-bold text-base">
              Get Involved Today
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-md hover:bg-white hover:text-deep-blue transition font-semibold text-base">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* How We Serve Section */}
      <section id="about" className="py-20 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-deep-blue mb-4">
            How We Serve Our Community
          </h2>
          <p className="text-center text-charcoal mb-16 max-w-2xl mx-auto text-lg">
            We are committed to strengthening Jewish life through four core pillars of service
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "ENGAGE",
                description: "Connect and unite the Jewish community"
              },
              {
                title: "EDUCATE",
                description: "Promote knowledge about Jewish culture and values"
              },
              {
                title: "COLLABORATE",
                description: "Build bridges with broader community"
              },
              {
                title: "ADVOCATE",
                description: "Represent Jewish interests across NM"
              }
            ].map((pillar, index) => (
              <div key={index} className="text-center">
                <div className="w-full h-48 mx-auto mb-4 bg-slate-200 rounded-lg flex items-center justify-center border-2 border-slate-300">
                  <span className="text-slate-500 font-semibold text-sm">Image Placeholder</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">{pillar.title}</h3>
                <p className="text-charcoal text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 sm:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-deep-blue">Join Us</h2>
            <a href="#events" className="text-deep-blue hover:text-warm-gold transition font-semibold text-sm">
              View All Events →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Community Shabbat Dinner"
              },
              {
                title: "Interfaith Dialogue Series"
              },
              {
                title: "Hanukkah Family Festival"
              }
            ].map((event, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="w-full h-48 bg-slate-200 flex items-center justify-center border-b-2 border-slate-300">
                  <span className="text-slate-500 font-semibold text-sm">Image Placeholder</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-charcoal mb-4">{event.title}</h3>
                  <button className="text-deep-blue hover:text-warm-gold transition font-semibold text-sm">
                    Register →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-deep-blue mb-4">
            Your Gateway to Jewish Life in New Mexico
          </h2>
          <p className="text-center text-charcoal mb-16 max-w-2xl mx-auto text-lg">
            From member organizations to educational resources, find everything you need in one place
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Member Organizations",
                count: "25+",
                description: "Organizations",
                icon: Building2
              },
              {
                title: "Educational Resources",
                count: "100+",
                description: "Learn & Grow",
                icon: BookOpen
              },
              {
                title: "Media & News",
                count: "Daily",
                description: "Updates",
                icon: Newspaper
              }
            ].map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-deep-blue to-slate-blue rounded-lg flex items-center justify-center">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-1">{resource.title}</h3>
                  <p className="text-3xl font-bold text-warm-gold mb-2">{resource.count}</p>
                  <p className="text-charcoal text-sm mb-4">{resource.description}</p>
                  <button className="text-deep-blue hover:text-warm-gold transition font-semibold text-sm">
                    Explore →
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-deep-blue text-white rounded-md hover:opacity-90 transition font-bold">
              Visit Resource Hub
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 sm:py-32 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-deep-blue mb-4">Stay Connected</h2>
          <p className="text-charcoal mb-8 text-lg">
            Get monthly updates on events, programs, and Jewish community news
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-blue text-charcoal placeholder-slate-500"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-deep-blue text-white rounded-md hover:opacity-90 transition font-bold flex items-center justify-center gap-2"
            >
              <Mail size={18} /> Subscribe
            </button>
          </form>
          <p className="text-charcoal text-xs mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Supporters Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-deep-blue mb-4">
            Making a Difference Together
          </h2>
          <p className="text-center text-charcoal mb-16 max-w-2xl mx-auto text-lg">
            Thank You to Our Supporters
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array(12).fill(null).map((_, index) => (
              <div key={index} className="bg-slate-100 rounded-lg aspect-square flex items-center justify-center border border-slate-200 hover:border-warm-gold transition">
                <span className="text-charcoal text-sm font-semibold text-center px-4">Supporter Logo</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#supporters" className="text-deep-blue hover:text-warm-gold transition font-semibold">
              View All Supporters →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-warm-gold rounded flex items-center justify-center">
                  <span className="text-charcoal font-bold">◊</span>
                </div>
                <span className="font-bold text-lg">JCRC-NM</span>
              </div>
              <p className="text-sm text-slate-400">
                A program of the JCC of Greater Albuquerque
              </p>
            </div>

            <div>
              <h4 className="font-bold text-warm-gold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#about" className="hover:text-warm-gold transition">About Us</a></li>
                <li><a href="#programs" className="hover:text-warm-gold transition">Programs</a></li>
                <li><a href="#events" className="hover:text-warm-gold transition">Events</a></li>
                <li><a href="#contact" className="hover:text-warm-gold transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-warm-gold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#resources" className="hover:text-warm-gold transition">Learning</a></li>
                <li><a href="#members" className="hover:text-warm-gold transition">Member Organizations</a></li>
                <li><a href="#news" className="hover:text-warm-gold transition">News & Media</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-warm-gold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#facebook" className="hover:text-warm-gold transition">f</a>
                <a href="#twitter" className="hover:text-warm-gold transition">𝕏</a>
                <a href="#instagram" className="hover:text-warm-gold transition">📷</a>
                <a href="#linkedin" className="hover:text-warm-gold transition">in</a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
            <p>© 2024 JCRC-NM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
