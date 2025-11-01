"use client"

import type React from "react"

import { MapPin, Mail, Phone, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Let's discuss how we can help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="md:col-span-1">
            <div className="space-y-6">
              {/* Address */}
              <div className="p-6 rounded-lg bg-card/50 border border-border hover:border-secondary transition-all">
                <div className="flex gap-4 mb-3">
                  <MapPin className="text-secondary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-foreground/70 text-sm">
                      123 Tech Street
                      <br />
                      San Francisco, CA 94105
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-6 rounded-lg bg-card/50 border border-border hover:border-secondary transition-all">
                <div className="flex gap-4 mb-3">
                  <Mail className="text-secondary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-foreground/70 text-sm">hello@mrbitx.com</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="p-6 rounded-lg bg-card/50 border border-border hover:border-secondary transition-all">
                <div className="flex gap-4 mb-3">
                  <Phone className="text-secondary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-foreground/70 text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 rounded-lg bg-card/50 border border-border neon-border"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/50 text-foreground outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/50 text-foreground outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/50 text-foreground outline-none transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="web">Web Development</option>
                  <option value="app">App Development</option>
                  <option value="game">Game Development</option>
                  <option value="ai">AI Solutions</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/50 text-foreground outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:shadow-[0_0_40px_rgba(138,43,226,0.7)] transition-all flex items-center justify-center gap-2"
              >
                {submitted ? "✓ Message Sent!" : "Send Message"}
                {!submitted && <ArrowRight size={18} />}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="rounded-lg overflow-hidden border border-border h-80 bg-card/50">
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-secondary mx-auto mb-4" />
              <p className="text-foreground/70">Interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
