import { ArrowRight, Zap, Globe, Shield, Sparkles, CheckCircle2 } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">◆</span>
              </div>
              <span className="text-xl font-bold text-slate-900">Prism</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900 transition">Features</a>
              <a href="#showcase" className="text-slate-600 hover:text-slate-900 transition">Showcase</a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition">Pricing</a>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
                Get Started
              </button>
            </nav>
            <button className="md:hidden p-2">
              <span className="text-slate-900">☰</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                <Sparkles size={16} />
                Introducing Prism Platform
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Transform Your Digital <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
              Build, deploy, and scale modern applications with unprecedented speed and reliability. Designed for teams that demand excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-lg flex items-center justify-center gap-2">
                Start Building <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 border-2 border-slate-300 text-slate-900 rounded-lg hover:bg-slate-50 transition font-semibold text-lg">
                View Documentation
              </button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 sm:mt-20 relative">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300 shadow-2xl overflow-hidden">
              <div className="h-full w-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Sparkles className="text-white" size={40} />
                  </div>
                  <p className="text-slate-600 font-medium">Interactive Demo</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-10 -z-10"></div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-10 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need to build and scale your applications with confidence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized performance with sub-100ms load times and real-time updates",
                color: "from-yellow-400 to-orange-400"
              },
              {
                icon: Globe,
                title: "Global Scale",
                description: "Deploy globally and reach users everywhere with our edge network",
                color: "from-blue-400 to-cyan-400"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Built-in security features with compliance for SOC 2, GDPR, and more",
                color: "from-green-400 to-emerald-400"
              },
              {
                icon: Zap,
                title: "Developer First",
                description: "Intuitive APIs and comprehensive documentation for rapid development",
                color: "from-pink-400 to-rose-400"
              },
              {
                icon: Globe,
                title: "Real-time Collaboration",
                description: "Built-in tools for teams to work together seamlessly and efficiently",
                color: "from-purple-400 to-pink-400"
              },
              {
                icon: Shield,
                title: "99.99% Uptime",
                description: "Guaranteed reliability with redundancy across multiple regions",
                color: "from-indigo-400 to-blue-400"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Trusted by Leading Teams
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                From startups to Fortune 500 companies, teams worldwide rely on Prism to power their most critical applications.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Instant deployment across global infrastructure",
                  "Automatic scaling to handle any traffic spike",
                  "Built-in monitoring and analytics dashboards"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-600 flex-shrink-0" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-lg">
                Learn More
              </button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300 shadow-2xl overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Globe className="text-white" size={48} />
                  </div>
                  <p className="text-slate-600 font-medium">Global Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 sm:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choose the plan that fits your needs. Always transparent, never hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "29",
                description: "Perfect for getting started",
                features: ["Up to 1000 requests/day", "Basic analytics", "Community support", "1 deployment region"]
              },
              {
                name: "Professional",
                price: "99",
                description: "For growing teams",
                features: ["Up to 100,000 requests/day", "Advanced analytics", "Priority support", "10 deployment regions", "API access"],
                featured: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large scale apps",
                features: ["Unlimited requests", "Custom analytics", "24/7 dedicated support", "Global deployment", "SLA guarantee"]
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition ${
                  plan.featured
                    ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white border-2 border-blue-600 shadow-2xl scale-105"
                    : "bg-white border border-slate-200 hover:border-slate-300"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={plan.featured ? "text-blue-100" : "text-slate-600"}>
                  {plan.description}
                </p>
                <div className="my-6">
                  <span className={`text-5xl font-bold ${plan.featured ? "text-white" : "text-slate-900"}`}>
                    ${plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className={plan.featured ? "text-blue-100" : "text-slate-600"}>/month</span>
                  )}
                </div>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition mb-8 ${
                    plan.featured
                      ? "bg-white text-blue-600 hover:bg-slate-100"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  Get Started
                </button>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className={plan.featured ? "text-blue-100" : "text-green-600"} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Transform Your Application?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers building the future with Prism. Get started in minutes, not months.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-slate-100 transition font-semibold text-lg inline-flex items-center gap-2">
            Start Your Free Trial <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">◆</span>
                </div>
                <span className="text-white font-bold text-lg">Prism</span>
              </div>
              <p className="text-sm">The modern platform for building and deploying applications.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="/" className="hover:text-white transition">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white transition">About</a></li>
                <li><a href="/" className="hover:text-white transition">Blog</a></li>
                <li><a href="/" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white transition">Privacy</a></li>
                <li><a href="/" className="hover:text-white transition">Terms</a></li>
                <li><a href="/" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-center text-sm">
              © 2024 Prism. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
