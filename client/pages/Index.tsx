import {
  Mail,
  Menu,
  X,
  Building2,
  BookOpen,
  Newspaper,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { NewsletterCTA } from "../components/NewsletterCTA";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F4d2e78009f47401eba80a2259c18e41b?format=webp&width=1200",
      alt: "Juan speaking at event",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F3b2dcab2c6c24d93a3749778ff83d9a9?format=webp&width=1200",
      alt: "77th Birthday Israel celebration",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F19a16833a3494411af8c34af9c18878b?format=webp&width=1200",
      alt: "Community gathering",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F7e3e34f82a7941178d2093d467d54c16?format=webp&width=1200",
      alt: "Community event",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length,
    );
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F3d5e2ba8862b4465bd0b5a83510d9d6f?format=webp&width=400"
                alt="JCRC-NM Logo"
                className="h-12 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#home"
                className="text-charcoal hover:text-deep-blue transition font-medium text-sm"
              >
                HOME
              </a>
              <a
                href="#about"
                className="text-charcoal hover:text-deep-blue transition font-medium text-sm"
              >
                ABOUT US
              </a>
              <a
                href="#programs"
                className="text-charcoal hover:text-deep-blue transition font-medium text-sm"
              >
                PROGRAMS
              </a>
              <a
                href="#events"
                className="text-charcoal hover:text-deep-blue transition font-medium text-sm"
              >
                EVENTS
              </a>
              <a
                href="#resources"
                className="text-charcoal hover:text-deep-blue transition font-medium text-sm"
              >
                RESOURCES
              </a>
              <a
                href="#news"
                className="text-charcoal hover:text-deep-blue transition font-medium text-sm"
              >
                NEWS
              </a>
              <a
                href="#involved"
                className="text-charcoal hover:text-deep-blue transition font-medium text-sm"
              >
                GET INVOLVED
              </a>
              <button className="px-6 py-2 bg-deep-blue text-white rounded-md hover:opacity-90 transition font-bold text-sm">
                DONATE
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
              <a
                href="#home"
                className="text-charcoal hover:text-deep-blue transition font-medium text-sm py-2"
              >
                HOME
              </a>
              <a
                href="#about"
                className="text-charcoal hover:text-deep-blue transition font-medium text-sm py-2"
              >
                ABOUT US
              </a>
              <a
                href="#programs"
                className="text-charcoal hover:text-deep-blue transition font-medium text-sm py-2"
              >
                PROGRAMS
              </a>
              <a
                href="#events"
                className="text-charcoal hover:text-deep-blue transition font-medium text-sm py-2"
              >
                EVENTS
              </a>
              <a
                href="#resources"
                className="text-charcoal hover:text-deep-blue transition font-medium text-sm py-2"
              >
                RESOURCES
              </a>
              <a
                href="#news"
                className="text-charcoal hover:text-deep-blue transition font-medium text-sm py-2"
              >
                NEWS
              </a>
              <a
                href="#involved"
                className="text-charcoal hover:text-deep-blue transition font-medium text-sm py-2"
              >
                GET INVOLVED
              </a>
              <button className="w-full px-4 py-2 bg-deep-blue text-white rounded-md hover:opacity-90 transition font-bold text-sm">
                DONATE
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section - Image Slider */}
      <section
        id="home"
        className="relative h-96 sm:h-[500px] lg:h-[600px] overflow-hidden"
      >
        {/* Image Container */}
        <div className="relative w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}

          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-relaxed drop-shadow-lg">
                Building a Vibrant, Secure Jewish Community in New Mexico
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-blue-100 max-w-2xl mx-auto drop-shadow-md">
                Connecting, educating, and advocating for Jewish voices across
                the Land of Enchantment
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-warm-gold text-charcoal rounded-md hover:opacity-90 transition font-bold text-base shadow-lg">
                  Get Involved Today
                </button>
                <button className="px-8 py-3 border-2 border-white text-white rounded-md hover:bg-white hover:text-deep-blue transition font-semibold text-base shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-3 transition"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-3 transition"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentSlide
                    ? "bg-warm-gold"
                    : "bg-white bg-opacity-50 hover:bg-opacity-75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
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
            We are committed to strengthening Jewish life through four core
            pillars of service
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "ENGAGE",
                description: "Connect and unite the Jewish community",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2Fe4497284033e4f1485999adddae9fe0f?format=webp&width=600",
              },
              {
                title: "EDUCATE",
                description:
                  "Promote knowledge about Jewish culture and values",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F1c789e372105485290a02f2397ae27a0?format=webp&width=600",
              },
              {
                title: "COLLABORATE",
                description: "Build bridges with broader community",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F89f82441e1b84aaf9e93cc43512575ba?format=webp&width=600",
              },
              {
                title: "ADVOCATE",
                description: "Represent Jewish interests across NM",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F436bc5f83f654da8b3c5d4eaae6805d8?format=webp&width=600",
              },
            ].map((pillar, index) => (
              <div key={index} className="text-center">
                <div className="w-full h-48 mx-auto mb-4 bg-slate-200 rounded-lg overflow-hidden border-2 border-slate-300">
                  {pillar.image ? (
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-slate-500 font-semibold text-sm">
                        Image Placeholder
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  {pillar.title}
                </h3>
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
            <h2 className="text-4xl sm:text-5xl font-bold text-deep-blue">
              Join Us
            </h2>
            <a
              href="#events"
              className="text-deep-blue hover:text-warm-gold transition font-semibold text-sm"
            >
              View All Events →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Community Shabbat Dinner",
                description:
                  "Join us for a warm community gathering celebrating Shabbat with dinner and song",
              },
              {
                title: "Interfaith Dialogue Series",
                description:
                  "Building bridges through conversation with faith leaders across New Mexico",
              },
              {
                title: "Hanukkah Family Festival",
                description:
                  "Celebrate the Festival of Lights with activities, crafts, and traditional foods",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="w-full h-48 bg-slate-200 flex items-center justify-center border-b-2 border-slate-300">
                  <span className="text-slate-500 font-semibold text-sm">
                    Image Placeholder
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-charcoal mb-2">
                    {event.title}
                  </h3>
                  <p className="text-charcoal text-sm mb-4">
                    {event.description}
                  </p>
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
            From member organizations to educational resources, find everything
            you need in one place
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Member Organizations",
                count: "25+",
                description: "Organizations",
                icon: Building2,
              },
              {
                title: "Educational Resources",
                count: "100+",
                description: "Learn & Grow",
                icon: BookOpen,
              },
              {
                title: "Media & News",
                count: "Daily",
                description: "Updates",
                icon: Newspaper,
              },
            ].map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-deep-blue to-slate-blue rounded-lg flex items-center justify-center">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-1">
                    {resource.title}
                  </h3>
                  <p className="text-3xl font-bold text-warm-gold mb-2">
                    {resource.count}
                  </p>
                  <p className="text-charcoal text-sm mb-4">
                    {resource.description}
                  </p>
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
          <h2 className="text-4xl sm:text-5xl font-bold text-deep-blue mb-4">
            Stay Connected
          </h2>
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
            Thank You to Our Community Partners
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Hadassah Northern NM",
                logo: "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2Fd9962d26844f4445b30ec7222e2ab453?format=webp&width=600",
              },
              {
                name: "Hillel UNM",
                logo: "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F4fd71b04a7e2436389907c7f2cdc4aef?format=webp&width=600",
              },
              {
                name: "Institute for Tolerance Studies",
                logo: "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F0c4d86355f4142798bd9952076186b6b?format=webp&width=600",
              },
              {
                name: "JCC Albuquerque",
                logo: "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F5594b706ce1744b29cd9f8d2d79b8001?format=webp&width=600",
              },
              {
                name: "Jewish Care Program",
                logo: "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F86e5aa755ec646eba54d6d6b91cf74b7?format=webp&width=600",
              },
              {
                name: "Jewish Community Council Northern NM",
                logo: "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F1f302cbeae1340978cd694bcf1fafe5d?format=webp&width=600",
              },
              {
                name: "Jewish Community Foundation NM",
                logo: "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F8b3a1049f9fa468887889cb123b782fc?format=webp&width=600",
              },
              {
                name: "Jewish Learning Channel",
                logo: "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F3e5a5a339cc344f9ad13fb6bd0b0daa5?format=webp&width=600",
              },
              {
                name: "Limmud New Mexico",
                logo: "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2Fcd0fe6213b9a4de0b43e568744ac86b7?format=webp&width=600",
              },
              {
                name: "Los Alamos Jewish Center",
                logo: "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2Ff5aaf63306954aa8aeb1da49dfbeeda3?format=webp&width=600",
              },
              {
                name: "Rabbinical Cantorial Association Albuquerque",
                logo: "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F9056f74b87754dda99d03e473c1a6753?format=webp&width=600",
              },
              {
                name: "Santa Fe Distinguished Lecture Series",
                logo: "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2Fe2bde751e339435bab79d14880c656f3?format=webp&width=600",
              },
              {
                name: "Santa Fe Jewish Center",
                logo: "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F9622ab8a35c6430487a30549f89d789d?format=webp&width=600",
              },
              {
                name: "Santa Fe Jewish Film Festival",
                logo: "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2Fecfafb982b644c12991874863cccb013?format=webp&width=600",
              },
              {
                name: "Santa Fe Middle East Watch",
                logo: "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2Fc164570859ef40c9919887dde0c06caa?format=webp&width=600",
              },
              {
                name: "Shabbat with Friends",
                logo: "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F57485ff31fe9411482b5f988cd6b3fd5?format=webp&width=600",
              },
              {
                name: "Temple Beth Shalom",
                logo: "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F913ca2cb12204a839418ec04fd8f885c?format=webp&width=600",
              },
              {
                name: "ADL Mountain States",
                logo: "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2Ff249e82ae1714a97bf241fd516550fd4?format=webp&width=600",
              },
              {
                name: "Congregation Albert",
                logo: "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F3ad718b75d80464991580ef70f6f2846?format=webp&width=600",
              },
              {
                name: "Congregation Beit Tikva",
                logo: "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2Ff6557c6ce0f74495b573cb9492fdbb59?format=webp&width=600",
              },
              {
                name: "Congregation Bnai Israel",
                logo: "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2Fd265bf767f184b9d8d2564b3037db7cd?format=webp&width=600",
              },
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg aspect-square flex items-center justify-center p-4 border border-slate-200 hover:border-warm-gold transition shadow-sm hover:shadow-md"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#supporters"
              className="text-deep-blue hover:text-warm-gold transition font-semibold"
            >
              View All Community Partners →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F3d5e2ba8862b4465bd0b5a83510d9d6f?format=webp&width=300"
                alt="JCRC-NM Logo"
                className="h-10 w-auto mb-4"
              />
              <p className="text-sm text-slate-400">
                A program of the JCC of Greater Albuquerque
              </p>
            </div>

            <div>
              <h4 className="font-bold text-warm-gold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#about" className="hover:text-warm-gold transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#programs"
                    className="hover:text-warm-gold transition"
                  >
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#events" className="hover:text-warm-gold transition">
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-warm-gold transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-warm-gold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a
                    href="#resources"
                    className="hover:text-warm-gold transition"
                  >
                    Learning
                  </a>
                </li>
                <li>
                  <a
                    href="#members"
                    className="hover:text-warm-gold transition"
                  >
                    Member Organizations
                  </a>
                </li>
                <li>
                  <a href="#news" className="hover:text-warm-gold transition">
                    News & Media
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-warm-gold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#facebook" className="hover:text-warm-gold transition">
                  f
                </a>
                <a href="#twitter" className="hover:text-warm-gold transition">
                  𝕏
                </a>
                <a
                  href="#instagram"
                  className="hover:text-warm-gold transition"
                >
                  📷
                </a>
                <a href="#linkedin" className="hover:text-warm-gold transition">
                  in
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
            <p>© 2024 JCRC-NM. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <NewsletterCTA />
    </div>
  );
}
