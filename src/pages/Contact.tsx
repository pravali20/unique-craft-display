import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, ExternalLink, Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    isUrgent: false
  });
  const [webhookUrl, setWebhookUrl] = useState("https://hooks.zapier.com/hooks/catch/23699504/u3scy1d/");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!webhookUrl) {
      toast({
        title: "Error",
        description: "Please enter your Zapier webhook URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          isUrgent: formData.isUrgent,
          timestamp: new Date().toISOString(),
          triggered_from: window.location.origin,
        }),
      });

      toast({
        title: "Message Sent!",
        description: "Your message was sent to Zapier. Please check your Zap's history to confirm it was triggered.",
      });
      setFormData({ name: "", email: "", message: "", isUrgent: false });
    } catch (error) {
      console.error("Error triggering webhook:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please check the webhook URL and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/pravalika-koneti-8a4763284", color: "from-blue-600 to-blue-700" },
    { name: "GitHub", icon: Github, href: "https://github.com/pravali20", color: "from-gray-700 to-gray-900" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Contact</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's connect and create something amazing together
          </p>
        </div>

        {/* Let's Collaborate Section */}
        <div className="mb-16 animate-fade-in">
          <div className="glass-card p-8 rounded-2xl text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold gradient-text mb-4">Let's Collaborate!</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to <span className="text-primary font-semibold">new opportunities</span>, 
              <span className="text-secondary font-semibold"> collaborations</span>, and 
              <span className="text-accent font-semibold"> exciting projects</span>.
              Let's build something amazing together!
            </p>
            <div className="flex justify-center">
              <Button variant="outline" asChild className="hover:glow-primary">
                <a href="https://www.linkedin.com/in/pravalika-koneti-8a4763284" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  Connect on LinkedIn
                  <ExternalLink className="h-3 w-3 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Let's Connect Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center gradient-text mb-8">Let's Connect</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="glass-card p-8 rounded-2xl animate-slide-up">
              <h3 className="text-xl font-bold text-foreground mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project or how we can collaborate..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="resize-none"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="urgent" 
                    name="isUrgent" 
                    checked={formData.isUrgent}
                    onChange={handleInputChange}
                    className="rounded" 
                  />
                  <label htmlFor="urgent" className="text-sm text-muted-foreground">
                    Mark as urgent if it requires immediate attention!
                  </label>
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full"
                >
                  {isLoading ? (
                    <span className="inline-flex items-center">
                      <div className="animate-spin h-4 w-4 mr-2 border-2 border-current border-t-transparent rounded-full"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="inline-flex items-center">
                      <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>

            </div>

            {/* Right Column */}
            <div className="space-y-8">
        
            

              {/* Contact Information */}
              <div className="glass-card p-6 rounded-2xl animate-slide-up">
                <h3 className="text-lg font-bold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">pravalikakoneti20@gmail.com</span>
                  </div>
               
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">+91 6304999297</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Anakapalle, Andhra Pradesh, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Follow Me Section */}
        <div className="mb-16 animate-fade-in">
          <div className="glass-card p-6 rounded-2xl text-center max-w-md mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-6">Follow Me</h3>
            <div className="flex justify-center items-center gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.name}
                    variant="outline"
                    asChild
                    className="h-auto p-4 hover:scale-105 transition-all duration-300 group"
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <div className="flex flex-col items-center space-y-2">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-sm font-medium">{social.name}</span>
                      </div>
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Availability Section */}
        <div className="text-center animate-fade-in">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
            <h3 className="text-xl font-bold gradient-text mb-2">Available for new opportunities</h3>
            <p className="text-muted-foreground">
              I'm currently open to internships, freelance projects, and collaboration opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
