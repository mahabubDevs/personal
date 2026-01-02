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

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      setTimeout(() => setSubmitted(false), 3000)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
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
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">

          {/* LEFT INFO */}
          <div className="md:col-span-1 space-y-6">
            <Info icon={<MapPin size={24} />} title="Address" value="Keari Plaza, Rd 8/A, Dhaka 1205, Bangladesh" />
            <Info icon={<Mail size={24} />} title="Email" value="info@mrbitx.com" />
            <Info icon={<Phone size={24} />} title="+880 1346 810082" />
          </div>

          {/* FORM */}
          <div className="md:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 rounded-lg bg-card/50 border border-border"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Name" name="name" value={formData.name} onChange={handleChange} />
                <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
              </div>

              <Select label="Subject" name="subject" value={formData.subject} onChange={handleChange} />

              <Textarea label="Message" name="message" value={formData.message} onChange={handleChange} />

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-full font-semibold flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : submitted ? "✓ Message Sent!" : "Send Message"}
                {!loading && !submitted && <ArrowRight size={18} />}
              </button>

              {error && <p className="text-red-500 text-sm">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

/* Small reusable components */
const Info = ({ icon, title, value }: any) => (
  <div className="p-6 rounded-lg bg-card/50 border border-border flex gap-4">
    <div className="text-secondary">{icon}</div>
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-foreground/70">{value}</p>
    </div>
  </div>
)

const Input = ({ label, ...props }: any) => (
  <div>
    <label className="block text-sm mb-2">{label}</label>
    <input {...props} required className="w-full px-4 py-2 rounded-lg bg-background border border-border" />
  </div>
)

const Select = ({ label, ...props }: any) => (
  <div>
    <label className="block text-sm mb-2">{label}</label>
    <select {...props} required className="w-full px-4 py-2 rounded-lg bg-background border border-border">
      <option value="">Select</option>
      <option value="Web Development">Web Development</option>
      <option value="App Development">App Development</option>
      <option value="AI Solutions">AI Solutions</option>
      <option value="Marketing">Digital Marketing</option>
      <option value="Other">Other</option>
    </select>
  </div>
)

const Textarea = ({ label, ...props }: any) => (
  <div>
    <label className="block text-sm mb-2">{label}</label>
    <textarea {...props} rows={6} required className="w-full px-4 py-2 rounded-lg bg-background border border-border" />
  </div>
)
