
import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <section className="bg-artisto-lightblue py-20">
          <div className="container text-center">
            <h1 className="font-poppins font-bold text-5xl mb-4">Let's Talk</h1>
            <p className="text-lg text-muted-foreground">
              Have a project in mind or want to learn more about our services? 
              Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
