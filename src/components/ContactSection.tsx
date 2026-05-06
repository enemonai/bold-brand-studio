import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Instagram, Twitter, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FaWhatsapp } from "react-icons/fa";

const SOCIAL_LINKS = [
  { Icon: Instagram, href: "https://www.instagram.com/enemona.isaac" },
  { Icon: Twitter, href: "https://x.com/enemonaisaaz" },
  // { Icon: Linkedin, href: "https://linkedin.com/in/johndoe-professional-random" },
  { Icon: FaWhatsapp, href: "https://wa.me/2349162045977" }
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
      console.log(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
      console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ""
      );

      toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error Sending Message",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Contact</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6">
              Let's Build Something{" "}
              <span className="text-gradient">Bold.</span>
            </h2>
            <p className="text-muted-foreground text-lg font-body font-light leading-relaxed mb-12">
              Have a project in mind? I'd love to hear about it. Let's create a brand
              that leads your industry.
            </p>

            <div className="space-y-6">
              <a href="mailto:enemonaisaaconoja@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors font-body group">
                <div className="w-12 h-12 rounded-full border border-border group-hover:border-primary flex items-center justify-center transition-colors">
                  <Mail size={18} />
                </div>
                enemonaisaaconoja@gmail.com
              </a>
              <div className="flex gap-4 pt-4">
                {SOCIAL_LINKS.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300"
                  >
                    <social.Icon size={18} className="text-muted-foreground hover:text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="text-sm font-display tracking-wide text-muted-foreground mb-2 block">Name</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name"
                required
                className="bg-card border-border focus:border-primary h-12 font-body"
              />
            </div>
            <div>
              <label className="text-sm font-display tracking-wide text-muted-foreground mb-2 block">Email</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@company.com"
                required
                className="bg-card border-border focus:border-primary h-12 font-body"
              />
            </div>
            <div>
              <label className="text-sm font-display tracking-wide text-muted-foreground mb-2 block">Message</label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project..."
                required
                rows={6}
                className="bg-card border-border focus:border-primary font-body resize-none"
              />
            </div>
            <Button variant="hero" size="lg" type="submit" className="w-full gap-2" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"} {!isSubmitting && <Send size={16} />}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
