"use client";

import { useState, useEffect } from "react";
import {
  Play,
  Zap,
  Mic,
  Film,
  Subtitles,
  Music,
  Edit3,
  Check,
  ChevronDown,
  Twitter,
  Youtube,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Globe,
  Users,
  Clock,
  Star,
  Menu,
  X,
  Zap as ZapIcon,
} from "lucide-react";

// ─── NavBar ────────────────────────────────────────────────────────────────

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Use Cases", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-[var(--color-border)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent"
          >
            VidGenAI
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors px-3 py-2">
              Login
            </button>
            <button className="text-sm font-medium bg-gradient-to-r from-[var(--color-primary)] to-[#818cf8] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
              Try Free
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[var(--color-text)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-[var(--color-border)]">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <hr className="border-[var(--color-border)]" />
            <button className="w-full text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors py-2 text-left">
              Login
            </button>
            <button className="w-full text-sm font-medium bg-gradient-to-r from-[var(--color-primary)] to-[#818cf8] text-white px-4 py-2 rounded-lg">
              Try Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[800px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto animate-fade-up">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full px-4 py-2 mb-8">
          <Sparkles size={14} className="text-[var(--color-secondary)]" />
          <span className="text-xs text-[var(--color-muted)]">
            AI-powered video creation in minutes
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Describe a topic.
          <br />
          <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
            Get a whole video.
          </span>
        </h1>

        {/* Subhead */}
        <p className="text-lg sm:text-xl text-[var(--color-muted)] max-w-2xl mx-auto mb-10">
          AI generates the script, voiceover, stock footage, captions and music —
          all in minutes. No cameras. No editors.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group flex items-center gap-2 bg-gradient-to-r from-[var(--color-primary)] to-[#818cf8] text-white font-medium px-8 py-4 rounded-xl hover:opacity-90 transition-all hover:scale-105">
            Start Creating Free
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button className="flex items-center gap-2 text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors px-6 py-4">
            <Play
              size={18}
              className="fill-current"
              style={{ color: "var(--color-secondary)" }}
            />
            Watch Demo
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-[var(--color-muted)]" />
      </div>
    </section>
  );
}

// ─── Video Preview Demo ─────────────────────────────────────────────────────

function VideoPreviewDemo() {
  const [inputValue, setInputValue] = useState("");
  const [phase, setPhase] = useState<"idle" | "generating" | "done">("idle");
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { label: "Writing script...", icon: "✍️" },
    { label: "Finding stock footage...", icon: "🎬" },
    { label: "Adding voiceover...", icon: "🎙️" },
    { label: "Syncing captions...", icon: "📝" },
  ];

  useEffect(() => {
    if (phase === "generating") {
      setCurrentStep(0);
      const interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= steps.length - 1) {
            clearInterval(interval);
            setTimeout(() => setPhase("done"), 800);
            return prev;
          }
          return prev + 1;
        });
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [phase, steps.length]);

  const handleGenerate = () => {
    if (!inputValue.trim()) return;
    setPhase("generating");
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            See it in action
          </h2>
          <p className="text-[var(--color-muted)]">
            Enter a topic and watch AI build your video in real time
          </p>
        </div>

        {/* Demo Panel */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
          {/* Demo Toolbar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="text-xs text-[var(--color-muted)] ml-2">
              vidgen.ai/create
            </span>
          </div>

          <div className="p-6 sm:p-8">
            {/* Input Area */}
            {phase === "idle" && (
              <div className="animate-fade-up">
                <label className="block text-sm text-[var(--color-muted)] mb-3">
                  What should your video be about?
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="e.g. How to learn React in 30 days"
                    className="flex-1 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                  />
                  <button
                    onClick={handleGenerate}
                    disabled={!inputValue.trim()}
                    className="flex items-center gap-2 bg-gradient-to-r from-[var(--color-primary)] to-[#818cf8] text-white font-medium px-6 py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ZapIcon size={16} />
                    Generate
                  </button>
                </div>
              </div>
            )}

            {/* Generating State */}
            {phase === "generating" && (
              <div className="animate-fade-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center">
                    <Sparkles size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Generating your video...</p>
                    <p className="text-xs text-[var(--color-muted)]">
                      {inputValue}
                    </p>
                  </div>
                </div>

                {/* Progress Steps */}
                <div className="space-y-3">
                  {steps.map((step, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 transition-all duration-300 ${
                        i <= currentStep
                          ? "opacity-100"
                          : "opacity-30"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all duration-300 ${
                          i < currentStep
                            ? "bg-[var(--color-success)] text-white"
                            : i === currentStep
                            ? "bg-[var(--color-primary)] text-white animate-pulse"
                            : "bg-[var(--color-border)] text-[var(--color-muted)]"
                        }`}
                      >
                        {i < currentStep ? <Check size={12} /> : i + 1}
                      </div>
                      <span
                        className={`text-sm ${
                          i <= currentStep
                            ? "text-[var(--color-text)]"
                            : "text-[var(--color-muted)]"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="mt-6 h-1 bg-[var(--color-border)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] transition-all duration-500"
                    style={{
                      width: `${((currentStep + 1) / steps.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            )}

            {/* Done State */}
            {phase === "done" && (
              <div className="animate-fade-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-success)] flex items-center justify-center">
                    <Check size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-success)]">
                      Video ready!
                    </p>
                    <p className="text-xs text-[var(--color-muted)]">
                      Your 4:32 tutorial-style video is prepared
                    </p>
                  </div>
                </div>

                {/* Video Player Mock */}
                <div className="relative aspect-video bg-[var(--color-bg)] rounded-xl overflow-hidden border border-[var(--color-border)] group cursor-pointer">
                  {/* Thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f35] to-[#0d1020] flex items-center justify-center">
                    <img
                      src="https://images.pexels.com/videos/3236552/free-video-3236552.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Video thumbnail"
                      className="w-full h-full object-cover opacity-60"
                    />
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/80 flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-sm">
                      <Play
                        size={24}
                        className="text-white ml-1 fill-current"
                      />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    4:32
                  </div>

                  {/* Style Tag */}
                  <div className="absolute top-3 left-3 bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] text-xs px-2 py-1 rounded border border-[var(--color-secondary)]/30">
                    Tutorial
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-4">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl py-3 text-sm hover:border-[var(--color-primary)] transition-colors">
                    <Edit3 size={16} />
                    Edit Video
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--color-primary)] to-[#818cf8] text-white rounded-xl py-3 text-sm font-medium hover:opacity-90 transition-opacity">
                    <ArrowRight size={16} />
                    Export MP4
                  </button>
                </div>

                {/* Reset */}
                <button
                  onClick={() => {
                    setPhase("idle");
                    setInputValue("");
                    setCurrentStep(0);
                  }}
                  className="mt-4 text-xs text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors w-full text-center"
                >
                  Try another topic
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Features Grid ─────────────────────────────────────────────────────────

const features = [
  {
    icon: Zap,
    title: "AI Script Generation",
    description:
      "GPT-powered scripts generated from your topic description. Structured for engagement with hooks, body, and CTAs.",
  },
  {
    icon: Mic,
    title: "Multi-Accent Voiceover",
    description:
      "Choose from 40+ AI voices across US, UK, Australian, and Indian accents. Adjustable speed and tone.",
  },
  {
    icon: Film,
    title: "Stock Footage Sync",
    description:
      "Automatically matched B-roll from Pexels' 35M+ video library. Seamlessly edited into your timeline.",
  },
  {
    icon: Subtitles,
    title: "Animated Captions",
    description:
      "Dynamic captions synced to your voiceover with kinetic typography. Multiple styles and animations.",
  },
  {
    icon: Music,
    title: "Background Music Engine",
    description:
      "Royalty-free tracks that match your video mood. AI selects from thousands of licensed songs.",
  },
  {
    icon: Edit3,
    title: "Full Editor Before Export",
    description:
      "Fine-tune scenes, text, timing, and audio before downloading. No hidden surprises, no export limits.",
  },
];

function FeaturesGrid() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything you need to create
          </h2>
          <p className="text-[var(--color-muted)] max-w-xl mx-auto">
            From idea to published video in one workflow — powered by AI at
            every step.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl hover:border-[var(--color-primary)]/50 transition-all duration-300 hover:-translate-y-1 animate-fade-up animate-fade-up-delay-${(i % 3) + 1}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--color-secondary)]/20 transition-colors">
                <feature.icon
                  size={24}
                  className="text-[var(--color-secondary)]"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>

              {/* Description */}
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ──────────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    title: "Describe Your Topic",
    description:
      "Enter a title, description, or outline. The more context you give, the better the output.",
  },
  {
    number: "02",
    title: "AI Generates Everything",
    description:
      "Script, voiceover, stock footage, captions, and background music — all assembled automatically.",
  },
  {
    number: "03",
    title: "Review & Edit",
    description:
      "Use the built-in editor to adjust scenes, text, timing, voice selection, or music.",
  },
  {
    number: "04",
    title: "Export & Publish",
    description:
      "Download as MP4 (up to 4K) and publish to YouTube, Udemy, or your own platform.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            From idea to video in 4 steps
          </h2>
          <p className="text-[var(--color-muted)] max-w-xl mx-auto">
            No video editing skills required. AI handles the hard work.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (desktop only) */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] opacity-30" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative text-center"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Number Badge */}
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 rounded-full" />
                <div className="relative w-full h-full rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>

              {/* Description */}
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats Bar ─────────────────────────────────────────────────────────────

const stats = [
  { value: "500K+", label: "Videos Created" },
  { value: "12K+", label: "Course Creators" },
  { value: "90+", label: "Countries" },
  { value: "2.5M", label: "Hours Saved" },
];

function StatsBar() {
  return (
    <section className="py-16 px-4 border-y border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--color-muted)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ──────────────────────────────────────────────────────────

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Online Course Creator",
    company: "Udemy Top 10% Instructor",
    quote:
      "I used to spend 3 days on each video. With VidGenAI, I produce 5 videos a week. It's completely changed my content pipeline.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
  {
    name: "Marcus Johnson",
    role: "YouTube Educator",
    company: "180K Subscribers",
    quote:
      "The voiceover quality is incredible. My audience can't tell it's AI-generated. The stock footage sync is seamless every time.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
  {
    name: "Priya Sharma",
    role: "Corporate Trainer",
    company: "Fortune 500 Company",
    quote:
      "We use VidGenAI for all our internal training videos. The time savings are massive and the quality is consistently professional.",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
];

function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by course creators worldwide
          </h2>
          <p className="text-[var(--color-muted)] max-w-xl mx-auto">
            From solo educators to enterprise training teams — VidGenAI powers
            thousands of creators.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-[var(--color-primary)] text-[var(--color-primary)]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-[var(--color-text)] leading-relaxed mb-6">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-[var(--color-muted)]">
                    {t.role} • {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ───────────────────────────────────────────────────────────────

const pricingPlans = [
  {
    name: "Starter",
    price: "$19",
    period: "",
    description: "For creators just getting started with AI video.",
    features: [
      "5 videos per month",
      "HD export (720p)",
      "10 AI voices",
      "Basic caption styles",
      "1 project at a time",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Creator",
    price: "$49",
    period: "/mo",
    description: "For course creators and YouTubers who publish regularly.",
    features: [
      "25 videos per month",
      "4K export (2160p)",
      "All 40+ AI voices",
      "Commercial rights",
      "All caption styles & animations",
      "Priority generation",
      "Custom thumbnail editor",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Studio",
    price: "$99",
    period: "/mo",
    description: "For studios, agencies, and teams with high output needs.",
    features: [
      "Unlimited videos",
      "4K export + RAW download",
      "All AI voices + voice cloning",
      "API access",
      "Team collaboration (5 seats)",
      "White-label exports",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-[var(--color-muted)] max-w-xl mx-auto">
            Start for free. No credit card required. Upgrade when you need more.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 bg-[var(--color-surface)] border rounded-2xl transition-all ${
                plan.highlighted
                  ? "border-[var(--color-primary)] shadow-[0_0_30px_rgba(99,102,241,0.2)]"
                  : "border-[var(--color-border)]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[var(--color-primary)] text-white text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
              <p className="text-xs text-[var(--color-muted)] mb-4">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-[var(--color-muted)]">{plan.period}</span>
              </div>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-xl font-medium text-sm mb-6 transition-all ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-[var(--color-primary)] to-[#818cf8] text-white hover:opacity-90"
                    : "bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)]"
                }`}
              >
                {plan.cta}
              </button>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={14}
                      className="mt-0.5 text-[var(--color-success)] shrink-0"
                    />
                    <span className="text-sm text-[var(--color-muted)]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ───────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 border border-[var(--color-border)] rounded-3xl p-10 sm:p-16 text-center overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to create your first video?
            </h2>
            <p className="text-[var(--color-muted)] max-w-xl mx-auto mb-8">
              Join 12,000+ course creators already using VidGenAI. Free trial,
              no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="flex items-center gap-2 bg-gradient-to-r from-[var(--color-primary)] to-[#818cf8] text-white font-medium px-8 py-4 rounded-xl hover:opacity-90 transition-opacity">
                Start Creating Free
                <ArrowRight size={18} />
              </button>
              <button className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors text-sm">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────

const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a
              href="#"
              className="text-xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent mb-3 block"
            >
              VidGenAI
            </a>
            <p className="text-sm text-[var(--color-muted)] mb-4">
              AI-powered video creation for course creators and YouTubers.
            </p>
            {/* Social */}
            <div className="flex gap-4">
              <a
                href="#"
                className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#"
                className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
              >
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--color-border)]">
          <p className="text-xs text-[var(--color-muted)]">
            © 2026 VidGenAI. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
            <Globe size={12} />
            English
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <VideoPreviewDemo />
        <FeaturesGrid />
        <HowItWorks />
        <StatsBar />
        <Testimonials />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}