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
import { ScrollIndicator } from "../components/ScrollIndicator";

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
        className="relative h-[420px] sm:h-[500px] md:h-[580px] lg:h-[650px] overflow-hidden"
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
            <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center py-8 sm:py-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 drop-shadow-lg leading-tight sm:leading-snug md:leading-snug lg:leading-snug">
                Building a Vibrant, Secure Jewish Community in New Mexico
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
                Connecting, educating, and advocating for Jewish voices across
                the Land of Enchantment
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0">
                <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-warm-gold text-charcoal rounded-md hover:opacity-90 transition font-bold text-sm sm:text-base shadow-lg whitespace-nowrap">
                  Get Involved Today
                </button>
                <button className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-white text-white rounded-md hover:bg-white hover:text-deep-blue transition font-semibold text-sm sm:text-base shadow-lg whitespace-nowrap">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-2 sm:p-3 transition active:bg-opacity-70"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-2 sm:p-3 transition active:bg-opacity-70"
            aria-label="Next slide"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2 px-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition ${
                  index === currentSlide
                    ? "bg-warm-gold"
                    : "bg-white bg-opacity-50 hover:bg-opacity-75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <ScrollIndicator />
        </div>
      </section>

      {/* How We Serve Section */}
      <section
        id="about"
        className="relative py-20 sm:py-32 bg-gradient-to-b from-white via-blue-50 to-white"
        aria-label="How we serve our community through four pillars"
      >
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
                accentColor: "#23549B",
              },
              {
                title: "EDUCATE",
                description:
                  "Promote knowledge about Jewish culture and values",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F1c789e372105485290a02f2397ae27a0?format=webp&width=600",
                accentColor: "#23549B",
              },
              {
                title: "COLLABORATE",
                description: "Build bridges with broader community",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F89f82441e1b84aaf9e93cc43512575ba?format=webp&width=600",
                accentColor: "#23549B",
              },
              {
                title: "ADVOCATE",
                description: "Represent Jewish interests across NM",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F436bc5f83f654da8b3c5d4eaae6805d8?format=webp&width=600",
                accentColor: "#23549B",
              },
            ].map((pillar, index) => {
              return (
                <div
                  key={index}
                  className={`text-center rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 group bg-gradient-to-br from-white to-slate-50 border border-slate-100 animate-fade-in-up ${
                    index === 0
                      ? ""
                      : index === 1
                        ? "animate-delay-100"
                        : index === 2
                          ? "animate-delay-200"
                          : "animate-delay-300"
                  }`}
                >
                  <div
                    className="h-3 w-full transition-all duration-300 group-hover:h-4"
                    style={{ backgroundColor: pillar.accentColor }}
                  ></div>
                  <div className="p-8">
                    <div
                      className="w-full h-60 mx-auto mb-6 bg-slate-200 rounded-lg overflow-hidden border-2 transition-all duration-300"
                      style={{ borderColor: `${pillar.accentColor}40` }}
                    >
                      {pillar.image ? (
                        <img
                          src={pillar.image}
                          alt={pillar.title}
                          className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-slate-500 font-semibold text-sm">
                            Image Placeholder
                          </span>
                        </div>
                      )}
                    </div>
                    <h3
                      className="text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-white py-2 px-3 rounded-md"
                      style={{ color: pillar.accentColor }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = `${pillar.accentColor}15`)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-charcoal text-base">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <ScrollIndicator />
        </div>
      </section>

      {/* Events Section */}
      <section
        id="events"
        className="relative py-20 sm:py-32 bg-slate-50"
        aria-label="Upcoming community events"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-deep-blue">
              Events
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
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2Ff960d0abd69341dc90f8510df6d116ef?format=webp&width=800",
              },
              {
                title: "Interfaith Dialogue Series",
                description:
                  "Building bridges through conversation with faith leaders across New Mexico",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F327cb3853f5e4dbaa5f99763cafaf3ed?format=webp&width=800",
              },
              {
                title: "Hanukkah Family Festival",
                description:
                  "Celebrate the Festival of Lights with activities, crafts, and traditional foods",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F3346074bda6f4553a8e462f0afd120d3?format=webp&width=800",
              },
            ].map((event, index) => (
              <div
                key={index}
                className={`relative h-72 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer animate-fade-in-up ${
                  index === 0
                    ? ""
                    : index === 1
                      ? "animate-delay-100"
                      : "animate-delay-200"
                }`}
              >
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:brightness-50 transition-all duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-300 flex items-center justify-center">
                    <span className="text-slate-500 font-semibold">
                      Image Placeholder
                    </span>
                  </div>
                )}

                {/* Initial overlay with title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-white">
                    {event.title}
                  </h3>
                </div>

                {/* Hover overlay with details */}
                <div className="absolute inset-0 bg-deep-blue/80 p-6 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {event.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  <button className="px-6 py-2 bg-warm-gold text-deep-blue font-bold rounded hover:bg-warm-gold/90 transition-all duration-300">
                    Register →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <ScrollIndicator />
        </div>
      </section>

      {/* News/Blog Section */}
      <section
        id="news"
        className="relative py-20 sm:py-32 bg-gradient-to-b from-white via-blue-50 to-white"
        aria-label="Latest news and blog articles"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-deep-blue mb-4">
            News & Blog
          </h2>
          <p className="text-center text-charcoal mb-16 max-w-2xl mx-auto text-lg">
            Stay updated with the latest stories and announcements from our
            community
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title:
                  "'Muted excitement': New Mexicans express relief, skepticism over Middle East peace deal",
                description:
                  "New Mexicans react with cautious optimism to the latest developments in Middle East peace negotiations.",
                category: "News",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F119f8f3cba134fd38340087ba53ca2b2?format=webp&width=800",
                link: "https://www.abqjournal.com/news/article_a5f46ab8-0876-4939-961e-895b22b8d2ec.html",
              },
              {
                title:
                  "UPDATE: With Joy and Relief, Our Living Hostages are Home",
                description:
                  "The Jewish Community Relations Council celebrates the agreement to secure the release of the Israeli hostages cruelly held in Gaza.",
                category: "Statement",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2Ff1362f7b6b294acf9ae85aaf995489df?format=webp&width=800",
                link: null,
              },
              {
                title:
                  "Sorrow, joy mix during remembrance event for victims of Oct. 7 attacks at Santa Fe Jewish Center",
                description:
                  "The Santa Fe Jewish community gathers to remember and honor the victims of the October 7 attacks.",
                category: "News",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F6be0c5bd14c240538e70af8526435caa?format=webp&width=800",
                link: "https://www.santafenewmexican.com/news/local_news/sorrow-joy-mix-during-remembrance-event-for-victims-of-oct-7-attacks-at-santa-fe/article_27aafd1a-033c-488a-9659-3ddcc362c81b.html",
              },
            ].map((article, index) => (
              <div
                key={index}
                className={`relative h-80 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer animate-fade-in-up ${
                  index === 0
                    ? ""
                    : index === 1
                      ? "animate-delay-100"
                      : "animate-delay-200"
                }`}
              >
                {article.image ? (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:brightness-50 transition-all duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-300 flex items-center justify-center">
                    <span className="text-slate-500 font-semibold">
                      Image Placeholder
                    </span>
                  </div>
                )}

                {/* Initial overlay with title and category */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-between p-6 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="flex justify-end">
                    <span className="px-3 py-1 bg-warm-gold text-deep-blue text-xs font-bold rounded">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {article.title}
                  </h3>
                </div>

                {/* Hover overlay with details */}
                <div className="absolute inset-0 bg-deep-blue/80 p-5 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-2 py-1 bg-warm-gold text-deep-blue text-xs font-bold rounded mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-white/90 text-xs mb-4 leading-relaxed line-clamp-3">
                    {article.description}
                  </p>
                  {article.link ? (
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 text-sm bg-warm-gold text-deep-blue font-bold rounded hover:bg-warm-gold/90 transition-all duration-300 whitespace-nowrap inline-block"
                    >
                      Read More →
                    </a>
                  ) : (
                    <button className="px-5 py-2 text-sm bg-warm-gold text-deep-blue font-bold rounded hover:bg-warm-gold/90 transition-all duration-300 whitespace-nowrap">
                      Read More →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <ScrollIndicator />
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-warm-gold to-transparent"></div>

      {/* Resources Section */}
      <section
        id="resources"
        className="relative py-20 sm:py-32 bg-white"
        aria-label="Gateway to Jewish life resources in New Mexico"
      >
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

          <ScrollIndicator />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-r from-deep-blue to-slate-blue">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Stay Connected
          </h2>
          <p className="text-white/90 mb-8 text-lg animate-fade-in-up animate-delay-100">
            Get monthly updates on events, programs, and Jewish community news
          </p>

          <form className="flex flex-col sm:flex-row gap-3 animate-fade-in-up animate-delay-200">
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address for newsletter subscription"
              className="flex-1 px-4 py-3 border-2 border-white bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gold text-charcoal placeholder-slate-500"
            />
            <button
              type="submit"
              aria-label="Subscribe to newsletter"
              className="px-8 py-3 bg-warm-gold text-deep-blue rounded-md hover:bg-warm-gold/90 transition font-bold flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Mail size={18} /> Subscribe
            </button>
          </form>
          <p className="text-charcoal text-xs mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>

          <ScrollIndicator />
        </div>
      </section>

      {/* Supporters Section */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-b from-white via-blue-50 to-white">
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

          <ScrollIndicator />
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
              <h4 className="font-bold text-warm-gold mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a
                  href="#facebook"
                  aria-label="Follow JCRC-NM on Facebook"
                  className="hover:text-warm-gold transition font-bold"
                >
                  f
                </a>
                <a
                  href="#twitter"
                  aria-label="Follow JCRC-NM on Twitter/X"
                  className="hover:text-warm-gold transition"
                >
                  𝕏
                </a>
                <a
                  href="#instagram"
                  aria-label="Follow JCRC-NM on Instagram"
                  className="hover:text-warm-gold transition"
                >
                  📷
                </a>
                <a
                  href="#linkedin"
                  aria-label="Connect with JCRC-NM on LinkedIn"
                  className="hover:text-warm-gold transition font-bold"
                >
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
