import { Navigation } from "../components/Navigation";
import { Section } from "../components/Section";
import { SectionTitle } from "../components/SectionTitle";
import { FeatureCard } from "../components/FeatureCard";
import { PackageCard } from "../components/PackageCard";
import { ModelCard } from "../components/ModelCard";
import { ProjectCard } from "../components/ProjectCard";
import { FAQAccordion } from "../components/FAQItem";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Sparkles, Send, Rocket, Heart, Palette, Users } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <Section id="home" className="pt-32 md:pt-40 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t.hero.subtitle}
              <br /><br />
              <span className="text-foreground font-medium">{t.hero.tagline}</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="hero"
                onClick={() => scrollToSection("#models")}
              >
                <Palette className="mr-2" />
                {t.hero.cta1}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection("#contact")}
              >
                <Send className="mr-2" />
                {t.hero.cta2}
              </Button>
            </div>

            <p className="text-sm text-muted-foreground flex flex-wrap gap-4">
              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-secondary" />
                {t.hero.trust1}
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" />
                {t.hero.trust2}
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                {t.hero.trust3}
              </span>
            </p>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute -top-8 -right-8 w-64 h-64 blob-purple opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 blob-green opacity-20 blur-3xl"></div>
            <img
              src={heroIllustration}
              alt="Creative workspace with art supplies and portfolio frames"
              className="relative rounded-3xl shadow-soft-lg w-full"
            />
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section id="how-it-works" background="muted">
        <SectionTitle subtitle={t.howItWorks.subtitle}>
          {t.howItWorks.title}
        </SectionTitle>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Palette}
            title={t.howItWorks.step1Title}
            description={t.howItWorks.step1Text}
          />
          <FeatureCard
            icon={Send}
            title={t.howItWorks.step2Title}
            description={t.howItWorks.step2Text}
          />
          <FeatureCard
            icon={Rocket}
            title={t.howItWorks.step3Title}
            description={t.howItWorks.step3Text}
          />
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services">
        <SectionTitle subtitle="Clear packages so you know exactly what you're getting">
          Services made for creative humans
        </SectionTitle>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <PackageCard
            title="Website with Model"
            tagline="For a simple, beautiful online home"
            features={[
              "Choose one of the Flaneuse models",
              "1–3 sections (Home / About / Contact)",
              "Basic SEO (titles, descriptions)",
              "Mobile-friendly layout",
            ]}
            label="Best for: artists, jewelers, therapists starting out"
          />
          
          <PackageCard
            title="Website with Model + Services"
            tagline="For creatives who need more features"
            features={[
              "Everything from the first package",
              "Extra sections (Shop, Events, Testimonials, Blog)",
              "Integrations: newsletter, booking, or external shop links",
              "Simple analytics setup",
            ]}
            label="Perfect for: musicians, teachers, coaches, active sellers"
            featured
          />
          
          <PackageCard
            title="Custom Website"
            tagline="For when your story needs its own map"
            features={[
              "Fully custom layout and storytelling",
              "Deeper brand exploration",
              "Flexible structure and features",
            ]}
            label="Limited spots • Designed from scratch"
          />
        </div>

        <div className="text-center">
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => scrollToSection("#contact")}
          >
            Help me choose a package
          </Button>
        </div>
      </Section>

      {/* Models Section */}
      <Section id="models" background="muted">
        <SectionTitle subtitle="Each model is a different visual mood inspired by great artists">
          Website models inspired by great artists
        </SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ModelCard
            name="Van Gogh"
            vibe="Bold, emotional, intense color"
            colors="Deep purple, golden orange"
            description="Big, expressive sections, ideal for painters and jewelry artists with strong colors."
            accentClass="bg-gradient-to-br from-purple-700 via-orange-600 to-yellow-500"
          />
          
          <ModelCard
            name="Cézanne"
            vibe="Structured, calm, geometric"
            colors="Soft green, muted purple"
            description="Grid-based layout, perfect for organized portfolios, illustrators, designers."
            accentClass="bg-gradient-to-br from-green-600 via-teal-500 to-purple-400"
          />
          
          <ModelCard
            name="Monet"
            vibe="Soft, dreamy, pastel"
            colors="Light purple, gentle green"
            description="Gentle gradients and flowing sections, ideal for photographers, therapists, and artists with a softer palette."
            accentClass="bg-gradient-to-br from-purple-300 via-blue-200 to-green-200"
          />
          
          <ModelCard
            name="Klimt"
            vibe="Luxurious, ornate, golden"
            colors="Deep purple, rich orange/gold"
            description="Decorative details and framed highlights, perfect for jewelers and fine-art creators."
            accentClass="bg-gradient-to-br from-amber-500 via-purple-600 to-orange-600"
          />
          
          <ModelCard
            name="Frida"
            vibe="Bold, symbolic, personal"
            colors="Vibrant orange, saturated green"
            description="Strong typography and storytelling focus, ideal for performers, writers, and expressive brands."
            accentClass="bg-gradient-to-br from-rose-600 via-orange-500 to-emerald-600"
          />
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section id="portfolio">
        <SectionTitle subtitle="Sample layouts showing what's possible">
          Sample layouts & stories
        </SectionTitle>

        <div className="grid md:grid-cols-3 gap-8">
          <ProjectCard
            name="Luz do Mar Jewelry"
            description="Handcrafted ocean-inspired jewelry pieces with a luxurious presentation."
            model="Klimt"
            accentClass="bg-gradient-to-br from-amber-500 via-purple-600 to-orange-600"
          />
          
          <ProjectCard
            name="Forest Echoes – Indie Musician"
            description="Bold portfolio for a singer-songwriter with emotionally charged visuals."
            model="Van Gogh"
            accentClass="bg-gradient-to-br from-purple-700 via-orange-600 to-yellow-500"
          />
          
          <ProjectCard
            name="Soft Hands Therapy Studio"
            description="Calm, gentle website for a holistic therapy practice."
            model="Monet"
            accentClass="bg-gradient-to-br from-purple-300 via-blue-200 to-green-200"
          />
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground italic">More client work coming soon!</p>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" background="muted">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Who's behind Flaneuse Studio?</SectionTitle>
          
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <Sparkles className="w-20 h-20 text-primary" />
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-6 text-lg text-foreground leading-relaxed">
              <p>
                Hi! I'm a full-stack developer who loves art, storytelling, and gentle, human-centered tech. 
                I've watched too many talented creatives feel overwhelmed or invisible because their websites 
                didn't reflect the beauty of their work.
              </p>
              <p>
                I understand artists and self-employed people who feel lost with tech. My goal is to create 
                websites that feel like home for your work — places that invite people in and tell your story 
                in a way that feels true to you.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
                  Kindness
                </span>
                <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full font-medium">
                  Clarity
                </span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full font-medium">
                  Playfulness
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
                  Reliability
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq">
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        
        <FAQAccordion
          items={[
            {
              value: "tech",
              question: "Do I need to understand tech to work with you?",
              answer: "Not at all! That's the whole point. I handle all the technical details and explain everything in simple, human terms. You focus on your art — I'll take care of the website.",
            },
            {
              value: "ownership",
              question: "Who owns the website and the domain?",
              answer: "You do! You own your domain name and all the content. I build it for you, set it up, and hand over everything so you're in full control.",
            },
            {
              value: "timeline",
              question: "How long does it take to build a site?",
              answer: "A model-based website typically takes 2-3 weeks from our first chat to launch. Custom sites take 4-6 weeks depending on the scope. I'll give you a clear timeline after our initial conversation.",
            },
            {
              value: "updates",
              question: "Can I update my website later?",
              answer: "Yes! I'll show you how to make basic updates yourself (like changing text or photos). For bigger changes or new features, I'm always here to help with ongoing support packages.",
            },
            {
              value: "content",
              question: "Can you help me write the text or choose photos?",
              answer: "Absolutely! I can help you organize your thoughts, write clear copy, and choose photos that tell your story. Think of me as a creative partner, not just a tech person.",
            },
            {
              value: "difference",
              question: "What makes Flaneuse Studio different?",
              answer: "I specialize in working with creative people who need more than a template. Every site I build is designed with care, storytelling, and your unique personality in mind. No cookie-cutter solutions — just websites that feel like home.",
            },
          ]}
        />
      </Section>

      {/* Contact Section */}
      <Section id="contact" background="muted">
        <div className="max-w-2xl mx-auto">
          <SectionTitle subtitle="If you're not sure which package or model is right for you, just write to me. Tell me what you create, and we'll find the best path together.">
            Tell me about your work
          </SectionTitle>

          <form className="space-y-6 bg-card rounded-3xl p-8 shadow-soft-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input placeholder="Your name" className="rounded-2xl" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" className="rounded-2xl" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Type of work</label>
              <Select>
                <SelectTrigger className="rounded-2xl">
                  <SelectValue placeholder="Choose one" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="artist">Artist</SelectItem>
                  <SelectItem value="jeweler">Jeweler</SelectItem>
                  <SelectItem value="musician">Musician</SelectItem>
                  <SelectItem value="therapist">Therapist</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Do you already have a website?</label>
              <Select>
                <SelectTrigger className="rounded-2xl">
                  <SelectValue placeholder="Yes or no" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">What are you dreaming of for your website?</label>
              <Textarea 
                placeholder="Tell me about your vision, your work, and what you hope your website can do for you..."
                className="rounded-2xl min-h-32"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Which package are you considering?</label>
              <Select>
                <SelectTrigger className="rounded-2xl">
                  <SelectValue placeholder="Choose one" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="model">Website with Model</SelectItem>
                  <SelectItem value="model-services">Model + Services</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                  <SelectItem value="not-sure">Not sure yet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" size="lg" variant="hero" className="w-full">
              <Send className="mr-2" />
              Send my story
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              I usually reply within 2–3 business days.
            </p>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl font-bold mb-4">Flaneuse Studio</p>
          <p className="text-background/70">
            Websites for artists, by someone who cares.
          </p>
          <p className="mt-6 text-sm text-background/50">
            © 2025 Flaneuse Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;