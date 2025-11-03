import { useState } from "react";
import { Search, Calendar, ArrowRight, Share2 } from "lucide-react";
import { ScrollIndicator } from "../components/ScrollIndicator";

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const allArticles = [
    {
      id: 1,
      title:
        "'Muted excitement': New Mexicans express relief, skepticism over Middle East peace deal",
      description:
        "New Mexicans react with cautious optimism to the latest developments in Middle East peace negotiations.",
      category: "News",
      date: "2024-01-15",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F119f8f3cba134fd38340087ba53ca2b2?format=webp&width=800",
      link: "https://www.abqjournal.com/news/article_a5f46ab8-0876-4939-961e-895b22b8d2ec.html",
      author: "Albuquerque Journal",
      content:
        "New Mexicans from across the state have expressed mixed feelings about the recent Middle East peace agreement. While many welcomed the development, others remained cautious about long-term implications.",
    },
    {
      id: 2,
      title: "UPDATE: With Joy and Relief, Our Living Hostages are Home",
      description:
        "The Jewish Community Relations Council celebrates the agreement to secure the release of the Israeli hostages cruelly held in Gaza.",
      category: "Statement",
      date: "2024-01-10",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2Ff1362f7b6b294acf9ae85aaf995489df?format=webp&width=800",
      link: null,
      author: "JCRC-NM",
      content:
        "After months of negotiations and uncertainty, we are filled with gratitude and relief as hostages return home to their families. This marks a significant moment for our community and a testament to the power of diplomatic efforts.",
    },
    {
      id: 3,
      title:
        "Sorrow, joy mix during remembrance event for victims of Oct. 7 attacks at Santa Fe Jewish Center",
      description:
        "The Santa Fe Jewish community gathers to remember and honor the victims of the October 7 attacks.",
      category: "News",
      date: "2024-01-05",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F6be0c5bd14c240538e70af8526435caa?format=webp&width=800",
      link: "https://www.santafenewmexican.com/news/local_news/sorrow-joy-mix-during-remembrance-event-for-victims-of-oct-7-attacks-at-santa-fe/article_27aafd1a-033c-488a-9659-3ddcc362c81b.html",
      author: "Santa Fe New Mexican",
      content:
        "Members of Santa Fe's Jewish community gathered at the Santa Fe Jewish Center for a solemn remembrance event honoring those affected by the October 7 attacks. The event blended moments of deep reflection with expressions of community solidarity.",
    },
    {
      id: 4,
      title: "JCRC-NM Announces New Educational Initiative for 2024",
      description:
        "A comprehensive program designed to deepen knowledge and engagement within the Jewish community.",
      category: "Announcement",
      date: "2024-01-02",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F119f8f3cba134fd38340087ba53ca2b2?format=webp&width=800",
      link: null,
      author: "JCRC-NM",
      content:
        "We are excited to launch our new educational initiative that focuses on contemporary Jewish issues, history, and culture. This program will serve both longtime community members and newcomers seeking to deepen their connection to Jewish life.",
    },
    {
      id: 5,
      title: "Community Shabbat Dinner Celebrates Record Attendance",
      description:
        "Over 200 community members gathered for our monthly Shabbat dinner celebration.",
      category: "Events",
      date: "2023-12-28",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2Ff960d0abd69341dc90f8510df6d116ef?format=webp&width=800",
      link: null,
      author: "JCRC-NM",
      content:
        "Our December community Shabbat dinner saw unprecedented turnout, bringing together families from across New Mexico for an evening of connection, tradition, and joy. The event featured special musical performances and traditional holiday foods.",
    },
    {
      id: 6,
      title: "Interfaith Dialogue Series Expands to Include Four Faith Communities",
      description:
        "New partnerships with Christian, Muslim, and Hindu leaders strengthen interfaith bonds.",
      category: "Announcement",
      date: "2023-12-20",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F327cb3853f5e4dbaa5f99763cafaf3ed?format=webp&width=800",
      link: null,
      author: "JCRC-NM",
      content:
        "Building on the success of our initial interfaith dialogue series, we have expanded partnerships to include faith leaders from Christian, Muslim, and Hindu communities across New Mexico. These conversations continue to deepen our understanding and strengthen communal bonds.",
    },
    {
      id: 7,
      title: "Hanukkah Family Festival Draws Hundreds to Celebration",
      description:
        "Celebrate the Festival of Lights with activities, crafts, and traditional foods.",
      category: "Events",
      date: "2023-12-15",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F3346074bda6f4553a8e462f0afd120d3?format=webp&width=800",
      link: null,
      author: "JCRC-NM",
      content:
        "Our annual Hanukkah Family Festival was a wonderful success, bringing together families of all ages to celebrate the Festival of Lights. The event featured menorah lighting ceremonies, traditional food booths, children's activities, and live music.",
    },
    {
      id: 8,
      title:
        "New Resources Hub Launches to Support Jewish Learning and Growth",
      description:
        "Comprehensive online platform connects community members with educational materials and resources.",
      category: "Announcement",
      date: "2023-12-10",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F119f8f3cba134fd38340087ba53ca2b2?format=webp&width=800",
      link: null,
      author: "JCRC-NM",
      content:
        "We are pleased to announce the launch of our comprehensive Resources Hub, a centralized platform for Jewish learning, cultural exploration, and community connection. The hub features curated content, event listings, and links to member organizations.",
    },
    {
      id: 9,
      title: "JCRC-NM Board Elects New Leadership for 2024",
      description:
        "Community leaders take on roles to guide organization through the coming year.",
      category: "News",
      date: "2023-12-05",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F6be0c5bd14c240538e70af8526435caa?format=webp&width=800",
      link: null,
      author: "JCRC-NM",
      content:
        "The JCRC-NM Board of Directors has elected new leadership to guide the organization through 2024. The new officers bring decades of combined experience and deep commitment to strengthening Jewish life in New Mexico.",
    },
    {
      id: 10,
      title: "Santa Fe Distinguished Lecture Series Announces Spring Schedule",
      description:
        "Featuring prominent voices in Jewish thought, culture, and contemporary issues.",
      category: "Events",
      date: "2023-11-28",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2Ff1362f7b6b294acf9ae85aaf995489df?format=webp&width=800",
      link: null,
      author: "JCRC-NM",
      content:
        "The Santa Fe Distinguished Lecture Series is thrilled to announce its spring lineup, featuring nationally recognized scholars and cultural leaders. Events will be held monthly beginning in March 2024.",
    },
  ];

  const categories = [
    { id: "all", label: "All Articles" },
    { id: "news", label: "News" },
    { id: "announcement", label: "Announcements" },
    { id: "statement", label: "Statements" },
    { id: "events", label: "Events" },
  ];

  const filteredArticles = allArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "all" ||
      article.category.toLowerCase() === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedArticles = filteredArticles.slice(
    startIdx,
    startIdx + itemsPerPage,
  );

  const featuredArticle = allArticles[0];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="/">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F62a90350fdb94377abbbea42bb06ae7b%2F3d5e2ba8862b4465bd0b5a83510d9d6f?format=webp&width=400"
                  alt="JCRC-NM Logo"
                  className="h-12 w-auto"
                />
              </a>
            </div>
            <a
              href="/"
              className="text-deep-blue hover:text-warm-gold transition font-semibold text-sm"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-deep-blue to-slate-blue">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              News & Blog
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Stay informed with the latest stories, announcements, and updates
              from our vibrant Jewish community
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-white/30 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-warm-gold"
              />
            </div>
          </div>

          <ScrollIndicator />
        </div>
      </section>

      {/* Featured Article */}
      <section className="relative py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-deep-blue mb-8">
            Featured Story
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <div className="md:col-span-2">
              {featuredArticle.image && (
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg mb-6"
                />
              )}
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-warm-gold text-deep-blue text-xs font-bold rounded">
                    {featuredArticle.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-500 text-sm">
                    <Calendar size={16} />
                    {formatDate(featuredArticle.date)}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-deep-blue mb-3 leading-tight">
                  {featuredArticle.title}
                </h3>
                <p className="text-charcoal text-base leading-relaxed mb-4">
                  {featuredArticle.description}
                </p>
                <p className="text-slate-500 text-sm mb-6">
                  By {featuredArticle.author}
                </p>
              </div>

              <div className="flex gap-3">
                {featuredArticle.link ? (
                  <a
                    href={featuredArticle.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-deep-blue text-white font-bold rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2"
                  >
                    Read Full Story
                    <ArrowRight size={18} />
                  </a>
                ) : (
                  <button className="flex-1 px-6 py-3 bg-deep-blue text-white font-bold rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2">
                    Read Full Story
                    <ArrowRight size={18} />
                  </button>
                )}
                <button className="px-4 py-3 border-2 border-deep-blue text-deep-blue rounded-lg hover:bg-deep-blue hover:text-white transition">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>

          <ScrollIndicator />
        </div>
      </section>

      {/* Category Filters */}
      <section className="relative py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setCurrentPage(1);
                }}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === cat.id
                    ? "bg-deep-blue text-white"
                    : "bg-white text-deep-blue border-2 border-deep-blue hover:bg-deep-blue hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {filteredArticles.length > 0 && (
            <p className="text-slate-500 text-sm mt-6">
              Showing {startIdx + 1} to{" "}
              {Math.min(startIdx + itemsPerPage, filteredArticles.length)} of{" "}
              {filteredArticles.length} articles
            </p>
          )}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="relative py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {paginatedArticles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {paginatedArticles.map((article, index) => (
                  <div
                    key={article.id}
                    className={`relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col bg-white border border-slate-200 hover:border-warm-gold animate-fade-in-up ${
                      index === 0
                        ? ""
                        : index === 1
                          ? "animate-delay-100"
                          : index === 2
                            ? "animate-delay-200"
                            : ""
                    }`}
                  >
                    {article.image && (
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-40 object-cover group-hover:brightness-90 transition-all duration-300"
                      />
                    )}

                    <div className="flex-1 flex flex-col p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1.5 bg-warm-gold text-deep-blue text-xs font-bold rounded">
                          {article.category}
                        </span>
                        <span className="text-slate-500 text-xs flex items-center gap-1 whitespace-nowrap">
                          <Calendar size={14} />
                          {formatDate(article.date)}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-deep-blue mb-3 leading-tight line-clamp-3 group-hover:text-warm-gold transition">
                        {article.title}
                      </h3>

                      <p className="text-charcoal text-sm mb-4 line-clamp-2 flex-1 leading-relaxed">
                        {article.description}
                      </p>

                      <div className="space-y-3 pt-4 border-t border-slate-200">
                        <span className="text-slate-500 text-xs block">
                          {article.author}
                        </span>
                        {article.link ? (
                          <a
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-deep-blue text-white font-bold text-sm rounded hover:bg-deep-blue/90 transition whitespace-nowrap"
                          >
                            Read Article <ArrowRight size={18} />
                          </a>
                        ) : (
                          <button className="inline-flex items-center gap-2 px-4 py-2 bg-deep-blue text-white font-bold text-sm rounded hover:bg-deep-blue/90 transition whitespace-nowrap">
                            Read Article <ArrowRight size={18} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(1, prev - 1))
                    }
                    disabled={currentPage === 1}
                    className="px-4 py-2 border-2 border-deep-blue text-deep-blue rounded-lg hover:bg-deep-blue hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-lg font-semibold transition ${
                          currentPage === page
                            ? "bg-deep-blue text-white"
                            : "border-2 border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white"
                        }`}
                      >
                        {page}
                      </button>
                    ),
                  )}

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border-2 border-deep-blue text-deep-blue rounded-lg hover:bg-deep-blue hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-charcoal mb-4">No articles found</p>
              <p className="text-slate-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}

          <ScrollIndicator />
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-deep-blue to-slate-blue">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Never Miss an Update
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Subscribe to our newsletter for the latest news, events, and
            announcements delivered to your inbox
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border-2 border-white bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-gold text-charcoal placeholder-slate-500"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-warm-gold text-deep-blue rounded-lg hover:bg-warm-gold/90 transition font-bold whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-white/80 text-xs mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
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
                  <a href="/" className="hover:text-warm-gold transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#about" className="hover:text-warm-gold transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/#events" className="hover:text-warm-gold transition">
                    Events
                  </a>
                </li>
                <li>
                  <a href="/news" className="hover:text-warm-gold transition">
                    News
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-warm-gold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="/#resources" className="hover:text-warm-gold transition">
                    Learning
                  </a>
                </li>
                <li>
                  <a href="/#programs" className="hover:text-warm-gold transition">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="/#involved" className="hover:text-warm-gold transition">
                    Get Involved
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
    </div>
  );
}
