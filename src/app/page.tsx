import { Button } from "@/components/ui/Button";
import { StickyHighlight } from "@/components/ui/StickyHighlight";
import { Card, FeatureCard, TestimonialCard } from "@/components/ui/Card";
import { WaveDivider } from "@/components/decorative/WaveDivider";
import { HandArrow } from "@/components/decorative/HandArrow";
import { FAQ } from "@/components/ui/FAQ";
import { ProductMockup } from "@/components/ui/ProductMockup";

const COLORS = {
  cream: "#FFF9EB",
  teal: "#45AD94",
  yellow: "#FFE711",
  coral: "#FF7F4A",
  pink: "#FF94E7",
  dark: "#1F2937",
};

const MARKETPLACE_URL = "https://marketplace.gohighlevel.com/integration/694f93f8a6babf0c821b1356";

const faqItems = [
  {
    question: "Is Export Messages officially on the GHL Marketplace?",
    answer:
      "Yes! We're an approved GHL Marketplace integration. Install directly from your GoHighLevel account — completely free to install.",
  },
  {
    question: "Will this work with my sub-account?",
    answer:
      "Yes, Export Messages works with any GHL sub-account. Install the integration and a new 'Export Messages' tab appears in your sidebar automatically.",
  },
  {
    question: "How does the Pay-per-Credit pricing work?",
    answer:
      "SMS, WhatsApp, Instagram & Facebook messages cost 1 credit each. Emails cost 3 credits. Base price is $0.025 per credit with volume discounts up to 70% off for 30k+ credits.",
  },
  {
    question: "How am I charged?",
    answer:
      "All charges go through your GHL Wallet — no external payments or credit card needed. Everything stays safe and controlled inside GoHighLevel.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Absolutely. We use OAuth 2.0, bank-level encryption, and automatic token refresh. Exports go directly to your device. We're GDPR compliant.",
  },
  {
    question: "What formats can I export to?",
    answer:
      "CSV and JSON. Email exports include separate files with full metadata (Subject, From, To, CC, BCC). Every export includes conversationId for proper threading.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF9EB]/95 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-xl font-bold flex items-center gap-2">
            <span className="text-2xl">📤</span> Export Messages
          </a>

          {/* Nav Links - Center */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#features" className="font-medium text-gray-800 hover:text-black transition-colors">
              Features
            </a>
            <a href="#pricing" className="font-medium text-gray-800 hover:text-black transition-colors">
              Pricing
            </a>
            <a href="#faq" className="font-medium text-gray-800 hover:text-black transition-colors">
              FAQ
            </a>
          </div>

          {/* Buttons - Right */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={MARKETPLACE_URL}
              target="_blank"
              className="px-5 py-2 bg-[#45AD94] border-2 border-black rounded-lg font-medium hover:shadow-[4px_4px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              Install Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-[#FFF9EB] pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <a
                href={MARKETPLACE_URL}
                target="_blank"
                className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-black shadow-[3px_3px_0_0_#000] hover:shadow-[5px_5px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
              >
                <span className="font-bold text-[#45AD94]">💰 Free to Install</span>
                <span className="flex items-center gap-1">
                  Pay Per Export
                </span>
                <span className="text-gray-500">→</span>
              </a>

              <h1 className="text-5xl md:text-6xl font-bold leading-[1.1]">
                Export{" "}
                <StickyHighlight rotate={-3} className="whitespace-nowrap">
                  Messages
                </StickyHighlight>
              </h1>

              <p className="text-xl text-gray-700 max-w-lg leading-relaxed">
                The ultimate data export tool for GoHighLevel. Export conversations, SMS, emails, WhatsApp, Facebook & Instagram messages with advanced filtering. CSV & JSON formats.
              </p>

              <div className="inline-block bg-green-100 px-5 py-3 rounded-full border-2 border-green-300">
                <span className="font-bold text-green-800">⚡ No Developers Needed - 100% User-Friendly</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="large" href={MARKETPLACE_URL}>
                  Get Started Now
                </Button>
                <Button variant="outline" size="large" href="#how-it-works">
                  See How It Works
                </Button>
              </div>

              <div className="flex flex-wrap gap-8 text-sm">
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>6+ Channel Types</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>No credit card required</span>
                </span>
              </div>

              {/* Testimonial */}
              <figure className="pt-8 border-t border-gray-200">
                <blockquote className="text-lg italic text-gray-700">
                  &ldquo;Exported thousands of conversations in minutes. The date range filters and email metadata are game changers.&rdquo;
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full" />
                  <div>
                    <div className="font-semibold">Sarah M.</div>
                    <div className="text-sm text-gray-500">Marketing Agency Owner</div>
                  </div>
                </figcaption>
              </figure>
            </div>

            {/* Right content - Product mockup */}
            <div className="relative hidden lg:block ml-8">
              {/* Hand-drawn arrow - positioned with more spacing */}
              <div className="absolute -left-32 top-1/4 z-20 transform -rotate-6">
                <HandArrow direction="right" text="try it here" textClassName="text-2xl" />
              </div>

              {/* Paper/notepad style background behind mockup */}
              <div
                className="absolute -top-4 -right-4 -bottom-4 -left-4 bg-[#FFEAA7] border-2 border-black rounded-2xl"
                style={{ transform: "rotate(2deg)", zIndex: 0 }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                <ProductMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fromColor={COLORS.cream} toColor={COLORS.pink} variant={1} />

      {/* Pain Points Section */}
      <section className="relative bg-[#FF94E7] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Frustrated with GoHighLevel&apos;s Export Limits?
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            We get it. Here&apos;s what GHL users struggle with every day:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-3xl mb-4">
                😤
              </div>
              <h3 className="font-bold text-xl mb-2">
                Can&apos;t Export Conversation Lists
              </h3>
              <p className="text-gray-600">
                All your conversations with contact info, last messages, and metadata — but no way to bulk export the list from GHL.
              </p>
            </Card>

            <Card>
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-3xl mb-4">
                🔒
              </div>
              <h3 className="font-bold text-xl mb-2">
                Messages Are Trapped
              </h3>
              <p className="text-gray-600">
                SMS, WhatsApp, emails, Facebook, Instagram — all your messages locked inside GHL with no way to export them in bulk.
              </p>
            </Card>

            <Card>
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center text-3xl mb-4">
                ⚠️
              </div>
              <h3 className="font-bold text-xl mb-2">
                No Backup or Compliance
              </h3>
              <p className="text-gray-600">
                Audits, legal holds, CRM migrations — you need your conversation data out, but GHL gives you no tools for it.
              </p>
            </Card>
          </div>

          <p className="text-center mt-10 text-lg font-medium">
            Sound familiar? <StickyHighlight rotate={2}>You&apos;re not alone.</StickyHighlight> Thousands of GHL users face this daily.
          </p>
        </div>
      </section>

      <WaveDivider fromColor={COLORS.pink} toColor={COLORS.cream} variant={2} />

      {/* How It Works Section */}
      <section className="relative bg-[#FFF9EB] py-20" id="how-it-works">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            How It Works
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-xl mx-auto">
            Get started in minutes — no technical knowledge required
          </p>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-blue-200 border-2 border-black shadow-[4px_4px_0_0_#000] flex items-center justify-center text-4xl mx-auto mb-6">
                📥
              </div>
              <h3 className="font-bold text-2xl mb-3">1. Install from Marketplace</h3>
              <p className="text-gray-600 leading-relaxed">
                Find Export Messages in the GHL Marketplace and install it with one click. Free to install — no credit card required.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-green-200 border-2 border-black shadow-[4px_4px_0_0_#000] flex items-center justify-center text-4xl mx-auto mb-6">
                🔗
              </div>
              <h3 className="font-bold text-2xl mb-3">2. Connect Your Account</h3>
              <p className="text-gray-600 leading-relaxed">
                Securely connect Export Messages to your sub-account using OAuth 2.0. A new &ldquo;Export Messages&rdquo; tab appears in your sidebar automatically.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-pink-200 border-2 border-black shadow-[4px_4px_0_0_#000] flex items-center justify-center text-4xl mx-auto mb-6">
                📤
              </div>
              <h3 className="font-bold text-2xl mb-3">3. Export & Pay Per Use</h3>
              <p className="text-gray-600 leading-relaxed">
                Select your conversations, apply filters, and export as CSV or JSON. You only pay for what you export — no subscriptions, no hidden costs.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button variant="primary" size="large" href={MARKETPLACE_URL}>
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      <WaveDivider fromColor={COLORS.cream} toColor={COLORS.teal} variant={3} />

      {/* Features Section */}
      <section
        id="features"
        className="relative bg-[#45AD94] py-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Powerful <StickyHighlight rotate={-2}>Features</StickyHighlight>
          </h2>
          <p className="text-center mb-12 max-w-xl mx-auto text-lg">
            Everything you need to manage your conversations professionally
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon="💬"
              title="Conversations Tab"
              description="Search and export conversations with 10+ advanced filters including message type, direction and status. Export to CSV with full metadata."
              badge="⭐ MOST POPULAR"
              badgeColor="#FFE711"
              iconBgColor="#93C5FD"
              accentColor="#3B82F6"
            />

            <FeatureCard
              icon="📊"
              title="Messages & Export Tab"
              description="Export all messages with advanced filtering. Separate CSV files for regular messages and emails (with Subject, From, To, CC, BCC)."
              badge="⭐ MOST REQUESTED"
              badgeColor="#FFE711"
              iconBgColor="#F9A8D4"
              accentColor="#EC4899"
            />

            <FeatureCard
              icon="📁"
              title="Export History"
              description="All your exports are saved for 7 days. Re-download any CSV or JSON file anytime — no need to re-run the export."
              iconBgColor="#86EFAC"
              accentColor="#22C55E"
            />

            <FeatureCard
              icon="🆘"
              title="Support & API"
              description="In-app support with ticket submission. Complete REST API with interactive docs and personal API tokens for external integrations."
              iconBgColor="#FDE047"
              accentColor="#EAB308"
            />
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap justify-center gap-4">
              <span className="bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-black/20 font-medium">
                ✓ Date Range Filters
              </span>
              <span className="bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-black/20 font-medium">
                ✓ CSV & JSON formats
              </span>
              <span className="bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-black/20 font-medium">
                ✓ Email Metadata Export
              </span>
              <span className="bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-black/20 font-medium">
                ✓ Universal Search
              </span>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fromColor={COLORS.teal} toColor={COLORS.cream} variant={4} />

      {/* Testimonials Section */}
      <section className="relative bg-[#FFF9EB] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Loved by GHL Agencies
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Exported thousands of conversations with full email metadata. The date range filters are incredibly useful for compliance."
              author="Sarah M."
              role="Marketing Agency Owner"
              rotate={-1.5}
            />

            <TestimonialCard
              quote="The conversation export alone is worth it. Saved us when we needed to audit client communications for legal compliance."
              author="James T."
              role="GHL Consultant"
              rotate={1}
            />

            <TestimonialCard
              quote="Simple, fast, and it just works. No developers needed. The export filters saved us hours of manual work."
              author="Mike R."
              role="Agency Founder"
              rotate={-0.5}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <div className="bg-white border-2 border-black rounded-xl px-5 py-3 shadow-[4px_4px_0_0_#000] font-medium">
              🏆 GHL Marketplace
            </div>
            <div className="bg-white border-2 border-black rounded-xl px-5 py-3 shadow-[4px_4px_0_0_#000] font-medium">
              ⭐ 5-Star Rating
            </div>
            <div className="bg-white border-2 border-black rounded-xl px-5 py-3 shadow-[4px_4px_0_0_#000] font-medium">
              📈 1000+ Installs
            </div>
          </div>
        </div>
      </section>

      <WaveDivider
        fromColor={COLORS.cream}
        toColor={COLORS.yellow}
        variant={1}
      />

      {/* Pricing Section */}
      <section
        id="pricing"
        className="relative bg-[#FFE711] py-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Pay-per-Credit Pricing
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Pay only for what you export. No subscriptions, no surprises. <strong>Volume discounts up to 70% off.</strong>
          </p>

          <div className="max-w-xl mx-auto">
            <Card hover={false} className="shadow-[8px_8px_0_0_#000]">
              {/* Features */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-lg">⭐</span>
                  <span className="text-gray-700">Custom Date Range Filtering</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">⭐</span>
                  <span className="text-gray-700">Automatic GHL Wallet payment deduction</span>
                </div>
              </div>

              <hr className="border-gray-200 mb-6" />

              {/* Channel / Credit Table */}
              <h3 className="font-bold text-lg mb-4">Channel / Credit per Element</h3>
              <div className="bg-gray-50 rounded-xl border-2 border-gray-200 overflow-hidden mb-6">
                <div className="grid grid-cols-2 bg-gray-100 font-bold text-sm p-3">
                  <div>Channel</div>
                  <div>Credit per Element</div>
                </div>
                <div className="grid grid-cols-2 p-3 border-t border-gray-200">
                  <div className="text-gray-700">SMS / WhatsApp / Instagram / Facebook</div>
                  <div className="font-semibold">1 Credit</div>
                </div>
                <div className="grid grid-cols-2 p-3 border-t border-gray-200">
                  <div className="text-gray-700">Email</div>
                  <div className="font-semibold">3 Credits</div>
                </div>
              </div>

              <hr className="border-gray-200 mb-6" />

              {/* Price per Credit Tiers */}
              <h3 className="font-bold text-lg mb-4">Price per Credit</h3>
              <div className="bg-gray-50 rounded-xl border-2 border-gray-200 overflow-hidden mb-6">
                <div className="grid grid-cols-3 bg-gray-100 font-bold text-sm p-3">
                  <div>Credits</div>
                  <div>$ / Credit</div>
                  <div>Discount</div>
                </div>
                <div className="grid grid-cols-3 p-3 border-t border-gray-200">
                  <div className="text-gray-700">0 – 1k</div>
                  <div className="font-semibold">$0.0250</div>
                  <div className="text-gray-400">—</div>
                </div>
                <div className="grid grid-cols-3 p-3 border-t border-gray-200">
                  <div className="text-gray-700">1k – 2k</div>
                  <div className="font-semibold">$0.0200</div>
                  <div className="text-green-600 font-semibold">20% off</div>
                </div>
                <div className="grid grid-cols-3 p-3 border-t border-gray-200">
                  <div className="text-gray-700">2k – 5k</div>
                  <div className="font-semibold">$0.0150</div>
                  <div className="text-green-600 font-semibold">40% off</div>
                </div>
                <div className="grid grid-cols-3 p-3 border-t border-gray-200 bg-indigo-50">
                  <div className="text-indigo-600 font-semibold">5k – 30k</div>
                  <div className="text-indigo-600 font-semibold">$0.0125</div>
                  <div className="text-green-600 font-semibold">50% off</div>
                </div>
                <div className="grid grid-cols-3 p-3 border-t border-gray-200 bg-green-50">
                  <div className="font-bold">30k+</div>
                  <div className="font-bold">$0.0075</div>
                  <div className="text-green-600 font-bold">70% off</div>
                </div>
              </div>

              <hr className="border-gray-200 mb-6" />

              {/* CRM Wallet Info */}
              <p className="text-gray-700 mb-2">
                We charge through the <strong>GHL Wallet</strong> system.
              </p>
              <p className="text-gray-700 mb-6">
                <strong>No</strong> need for <strong>external</strong> payments or <strong>credit card</strong> information — everything stays safe and controlled inside GoHighLevel.
              </p>

              <Button variant="tertiary" size="large" className="w-full text-lg" href={MARKETPLACE_URL}>
                Install Now
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <WaveDivider
        fromColor={COLORS.yellow}
        toColor={COLORS.cream}
        variant={2}
      />

      {/* FAQ Section */}
      <section id="faq" className="bg-[#FFF9EB] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Common Questions
          </h2>

          <FAQ items={faqItems} />
        </div>
      </section>

      {/* Contact Us / Feature Request Section */}
      <section className="bg-[#FF94E7] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-[#FFF9EB] border-2 border-black rounded-2xl shadow-[8px_8px_0_0_#000] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            {/* Left side - Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need a new export type?
              </h2>
              <p className="text-gray-600 text-lg">
                We&apos;re always adding new export options. Tell us what data you need to export and we&apos;ll make it happen — usually within 24 hours!
              </p>
            </div>

            {/* Right side - Buttons */}
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <a
                href="mailto:features@exporto.io?subject=Feature%20Request"
                className="flex items-center justify-center gap-3 bg-white px-8 py-4 rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all min-w-[220px]"
              >
                <span className="text-xl">💡</span>
                <span className="font-semibold">Request a Feature</span>
              </a>

              <a
                href="mailto:support@exporto.io?subject=Support%20Request"
                className="flex items-center justify-center gap-3 bg-[#FF7F4A] px-8 py-4 rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all min-w-[220px]"
              >
                <span className="text-xl">💬</span>
                <span className="font-semibold">Contact Support</span>
              </a>

              <a
                href="mailto:hello@exporto.io"
                className="flex items-center justify-center gap-3 bg-[#45AD94] px-8 py-4 rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all min-w-[220px]"
              >
                <span className="text-xl">📧</span>
                <span className="font-semibold">Say Hello</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-[#FFF9EB] py-24">
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Export Your Conversations?
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Join businesses that trust Export Messages for professional GHL data exports.
          </p>

          <Button variant="primary" size="large" className="text-lg px-10" href={MARKETPLACE_URL}>
            Install Now — It&apos;s Free
          </Button>

          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <StickyHighlight rotate={-1}>Incredibly Affordable</StickyHighlight>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>No subscriptions</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Volume discounts</span>
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2937] py-16" style={{ color: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: '#ffffff' }}>
                <span className="text-2xl">📤</span> Export Messages
              </h3>
              <p style={{ color: '#9ca3af' }}>
                The ultimate data export tool for GoHighLevel.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: '#ffffff' }}>Product</h4>
              <ul className="space-y-2" style={{ color: '#9ca3af' }}>
                <li>
                  <a href="#features" className="hover:opacity-80 transition-opacity">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:opacity-80 transition-opacity">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: '#ffffff' }}>Support</h4>
              <ul className="space-y-2" style={{ color: '#9ca3af' }}>
                <li>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    Status
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: '#ffffff' }}>Legal</h4>
              <ul className="space-y-2" style={{ color: '#9ca3af' }}>
                <li>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    GDPR
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p style={{ color: '#9ca3af' }}>
              © 2026 Export Messages. Data Export Tool for GoHighLevel.
            </p>
            <p className="flex items-center gap-2" style={{ color: '#9ca3af' }}>
              🔒 Your data stays yours. We never store your exports.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
