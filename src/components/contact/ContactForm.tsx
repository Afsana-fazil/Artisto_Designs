
import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll be in touch soon.");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
            <h4 className="text-2xl font-semibold font-poppins mb-6">Send Us a Message</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-artisto-skyblue"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-artisto-skyblue"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-artisto-skyblue"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 button-primary flex items-center justify-center"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            <div className="bg-artisto-lightblue rounded-2xl p-8 h-full">
              <h4 className="text-2xl font-semibold font-poppins mb-6">Contact Information</h4>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full mr-4">
                    <MapPin className="text-artisto-royalblue" />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Our Location</h5>
                    <p className="text-muted-foreground">
                      Trivandrum<br />
                      Kerala, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full mr-4">
                    <Mail className="text-artisto-royalblue" />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Email Us</h5>
                    <a 
                      href="mailto:theartistodesigns@gmail.com" 
                      className="text-artisto-royalblue hover:underline"
                    >
                      theartistodesigns@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full mr-4">
                    <Phone className="text-artisto-royalblue" />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Call Us</h5>
                    <a 
                      href="tel:+91 6282437768" 
                      className="text-artisto-royalblue hover:underline"
                    >
                      +91 6282437768
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h5 className="font-medium mb-3">Business Hours</h5>
                <p className="text-muted-foreground mb-1">Everyday: 6am - 9pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
