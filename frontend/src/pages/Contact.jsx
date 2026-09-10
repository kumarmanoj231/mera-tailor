
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  ArrowRight,
  Scissors,
  Sparkles,
  Heart,
  CheckCircle2,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#3d2925] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative pt-16 pb-20 px-6">

        {/* Decorative background */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#ead6d0]/40 blur-3xl" />

        <div className="absolute top-40 -left-32 w-80 h-80 rounded-full bg-[#e8d9bd]/40 blur-3xl" />

        <div className="max-w-7xl mx-auto relative">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#eaded5] shadow-sm mb-7">

                <MessageCircle
                  size={16}
                  className="text-[#a65f52]"
                />

                <span className="text-sm font-medium text-[#79574e]">
                  We're here to help
                </span>

              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05] tracking-tight">

                Let's talk about

                <span className="block text-[#a65f52] italic mt-2">
                  your perfect fit.
                </span>

              </h1>

              <p className="mt-7 text-lg md:text-xl text-[#735f58] max-w-xl leading-relaxed">

                Have a question, need help finding a tailor, or want to tell
                us about your experience?

                <strong className="text-[#3d2925]">
                  {" "}मेरा Tailor
                </strong>

                {" "}is always happy to hear from you.

              </p>

              <div className="flex flex-wrap gap-4 mt-9">

                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 bg-[#3d2925] text-white px-6 py-3.5 rounded-full font-medium hover:bg-[#533b35] transition"
                >
                  Send us a message
                  <ArrowRight size={18} />
                </a>

                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 bg-white border border-[#ded0c8] px-6 py-3.5 rounded-full font-medium hover:bg-[#f4eee8] transition"
                >
                  <Phone size={17} />
                  Call us
                </a>

              </div>

            </div>


            {/* RIGHT */}
            <div className="relative">

              <div className="absolute -top-6 -right-5 w-20 h-20 rounded-full bg-[#d6b9a7]/30" />

              <div className="bg-[#ead8c9] rounded-[3rem] p-8 md:p-12 relative overflow-hidden">

                <div className="absolute top-0 right-0 w-40 h-40 border-[18px] border-white/30 rounded-full translate-x-20 -translate-y-20" />

                <div className="absolute bottom-0 left-0 w-32 h-32 border-[14px] border-[#b87868]/20 rounded-full -translate-x-16 translate-y-16" />

                <div className="relative flex flex-col items-center justify-center min-h-[400px]">

                  <div className="w-28 h-28 rounded-full bg-[#faf7f2] flex items-center justify-center shadow-lg">

                    <Scissors
                      size={52}
                      strokeWidth={1.5}
                      className="text-[#9e5e51]"
                    />

                  </div>

                  <Sparkles
                    size={25}
                    className="absolute top-14 right-14 text-[#9e5e51]"
                  />

                  <Heart
                    size={21}
                    className="absolute bottom-24 left-16 text-[#9e5e51]"
                  />

                  <h2 className="font-serif text-4xl mt-8 text-center">
                    Made with care.
                  </h2>

                  <p className="text-center text-[#735f58] mt-4 max-w-sm leading-relaxed">
                    From the first measurement to the final stitch, we're
                    building a better way to connect Jaipur with trusted
                    tailoring.
                  </p>

                  <div className="mt-8 px-5 py-2 rounded-full bg-white/70 text-sm text-[#79574e]">
                    जयपुर • राजस्थान
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT INFORMATION ================= */}
      <section className="px-6 pb-20">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">


            {/* EMAIL */}
            <div className="bg-white rounded-3xl p-7 border border-[#eee3dc] hover:-translate-y-1 transition duration-300">

              <div className="w-12 h-12 rounded-2xl bg-[#f4e5df] flex items-center justify-center mb-5">

                <Mail
                  size={22}
                  className="text-[#9e5e51]"
                />

              </div>

              <p className="text-sm text-[#917b73] mb-1">
                Email us
              </p>

              <h3 className="font-semibold text-lg">
                hello@meratailor.in
              </h3>

              <p className="text-sm text-[#806d66] mt-2">
                We usually reply within 24 hours.
              </p>

            </div>


            {/* PHONE */}
            <div className="bg-white rounded-3xl p-7 border border-[#eee3dc] hover:-translate-y-1 transition duration-300">

              <div className="w-12 h-12 rounded-2xl bg-[#eee7d7] flex items-center justify-center mb-5">

                <Phone
                  size={22}
                  className="text-[#806845]"
                />

              </div>

              <p className="text-sm text-[#917b73] mb-1">
                Call us
              </p>

              <h3 className="font-semibold text-lg">
                +91 98765 43210
              </h3>

              <p className="text-sm text-[#806d66] mt-2">
                Mon – Sat, 10 AM – 7 PM
              </p>

            </div>


            {/* LOCATION */}
            <div className="bg-white rounded-3xl p-7 border border-[#eee3dc] hover:-translate-y-1 transition duration-300">

              <div className="w-12 h-12 rounded-2xl bg-[#e9dfd5] flex items-center justify-center mb-5">

                <MapPin
                  size={22}
                  className="text-[#966c51]"
                />

              </div>

              <p className="text-sm text-[#917b73] mb-1">
                Our home
              </p>

              <h3 className="font-semibold text-lg">
                Jaipur, Rajasthan
              </h3>

              <p className="text-sm text-[#806d66] mt-2">
                Proudly starting in the Pink City.
              </p>

            </div>


            {/* HOURS */}
            <div className="bg-white rounded-3xl p-7 border border-[#eee3dc] hover:-translate-y-1 transition duration-300">

              <div className="w-12 h-12 rounded-2xl bg-[#e8e0e1] flex items-center justify-center mb-5">

                <Clock
                  size={22}
                  className="text-[#805e68]"
                />

              </div>

              <p className="text-sm text-[#917b73] mb-1">
                Support hours
              </p>

              <h3 className="font-semibold text-lg">
                10 AM – 7 PM
              </h3>

              <p className="text-sm text-[#806d66] mt-2">
                Monday to Saturday
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT FORM ================= */}
      <section
        id="contact-form"
        className="px-6 pb-24"
      >

        <div className="max-w-7xl mx-auto">

          <div className="bg-[#3d2925] rounded-[2.5rem] overflow-hidden">

            <div className="grid lg:grid-cols-5">


              {/* LEFT PANEL */}
              <div className="lg:col-span-2 p-8 md:p-12 lg:p-14 text-white">

                <span className="text-[#e8c6b9] text-sm uppercase tracking-[0.2em]">
                  Get in touch
                </span>

                <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight">
                  Tell us what's on your mind.
                </h2>

                <p className="text-white/65 mt-6 leading-relaxed">
                  Whether you're a customer looking for the right tailor or a
                  tailor wanting to join our community, send us a message.
                </p>


                <div className="mt-10 space-y-5">

                  <div className="flex items-center gap-4">

                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <CheckCircle2 size={18} />
                    </div>

                    <span className="text-white/80">
                      Quick and friendly support
                    </span>

                  </div>


                  <div className="flex items-center gap-4">

                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <CheckCircle2 size={18} />
                    </div>

                    <span className="text-white/80">
                      Help finding trusted tailors
                    </span>

                  </div>


                  <div className="flex items-center gap-4">

                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <CheckCircle2 size={18} />
                    </div>

                    <span className="text-white/80">
                      Support for tailor partners
                    </span>

                  </div>

                </div>

              </div>


              {/* FORM */}
              <div className="lg:col-span-3 bg-white p-8 md:p-12 lg:p-14">

                {submitted ? (

                  <div className="min-h-[450px] flex flex-col items-center justify-center text-center">

                    <div className="w-20 h-20 rounded-full bg-[#e7f1e6] flex items-center justify-center mb-6">

                      <CheckCircle2
                        size={42}
                        className="text-[#62835d]"
                      />

                    </div>

                    <h3 className="font-serif text-4xl">
                      Message sent!
                    </h3>

                    <p className="text-[#806d66] mt-4 max-w-md">
                      Thank you for reaching out. Our team will get back to
                      you as soon as possible.
                    </p>

                  </div>

                ) : (

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >

                    <div className="grid md:grid-cols-2 gap-5">


                      {/* NAME */}
                      <div>

                        <label className="block text-sm font-medium mb-2">
                          Your name
                        </label>

                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your name"
                          className="w-full px-4 py-3.5 rounded-2xl border border-[#e4d9d2] bg-[#fcfaf8] outline-none focus:border-[#a65f52] transition"
                        />

                      </div>


                      {/* EMAIL */}
                      <div>

                        <label className="block text-sm font-medium mb-2">
                          Email address
                        </label>

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="you@example.com"
                          className="w-full px-4 py-3.5 rounded-2xl border border-[#e4d9d2] bg-[#fcfaf8] outline-none focus:border-[#a65f52] transition"
                        />

                      </div>

                    </div>


                    <div className="grid md:grid-cols-2 gap-5">


                      {/* PHONE */}
                      <div>

                        <label className="block text-sm font-medium mb-2">
                          Phone number
                        </label>

                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3.5 rounded-2xl border border-[#e4d9d2] bg-[#fcfaf8] outline-none focus:border-[#a65f52] transition"
                        />

                      </div>


                      {/* SUBJECT */}
                      <div>

                        <label className="block text-sm font-medium mb-2">
                          Subject
                        </label>

                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 rounded-2xl border border-[#e4d9d2] bg-[#fcfaf8] outline-none focus:border-[#a65f52] transition"
                        >

                          <option value="">
                            Select a topic
                          </option>

                          <option value="finding-tailor">
                            Finding a tailor
                          </option>

                          <option value="order">
                            Order support
                          </option>

                          <option value="tailor-partner">
                            Become a tailor partner
                          </option>

                          <option value="business">
                            Business enquiry
                          </option>

                          <option value="feedback">
                            Feedback
                          </option>

                          <option value="other">
                            Something else
                          </option>

                        </select>

                      </div>

                    </div>


                    {/* MESSAGE */}
                    <div>

                      <label className="block text-sm font-medium mb-2">
                        Your message
                      </label>

                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        placeholder="Tell us how we can help..."
                        className="w-full px-4 py-3.5 rounded-2xl border border-[#e4d9d2] bg-[#fcfaf8] outline-none focus:border-[#a65f52] transition resize-none"
                      />

                    </div>


                    {/* BUTTON */}
                    <button
                      type="submit"
                      className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#a65f52] text-white px-8 py-4 rounded-full font-medium hover:bg-[#8f5045] transition shadow-lg shadow-[#a65f52]/20"
                    >

                      Send message

                      <Send size={18} />

                    </button>

                  </form>

                )}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="px-6 pb-24">

        <div className="max-w-4xl mx-auto text-center">

          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#eee1d9] mb-6">

            <MessageCircle
              size={24}
              className="text-[#9e5e51]"
            />

          </div>

          <h2 className="font-serif text-4xl md:text-5xl">
            We're just a message away.
          </h2>

          <p className="text-[#806d66] mt-4 max-w-xl mx-auto">
            Have an idea, question, or feedback for मेरा Tailor?
            We'd love to hear from you.
          </p>

          <a
            href="mailto:hello@meratailor.in"
            className="mt-7 inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#d8c9c1] bg-white hover:bg-[#f5eee9] transition font-medium"
          >

            <Mail size={18} />

            Email us

            <ArrowRight size={16} />

          </a>

        </div>

      </section>

    </div>
  );
};

export default Contact;

