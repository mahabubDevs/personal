"use client"

import type React from "react"

import Link from "next/link"
import { ArrowLeft, MapPin, Clock, DollarSign } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { useState } from "react"

const jobListings: Record<
  string,
  {
    id: number
    title: string
    level: "Entry Level" | "Mid Level"
    department: string
    location: string
    type: string
    salary: string
    hiringStatus: string
    description: string
    skills: string[]
    fullDescription: string
    responsibilities: string[]
    qualifications: string[]
    benefits: string[]
  }
> = {
  "1": {
    id: 1,
    title: "UI / UX Designer",
    level: "Entry Level",
    department: "Design",
    location: "Bangladesh Only (Remote / Dhaka)",
    type: "Full-time",
    salary: "৳20,000 – ৳25,000 / month",
    hiringStatus: "Hiring from April 2026",
    description: "Entry-level designer to create modern UI/UX for web and mobile.",
    skills: ["Figma", "Wireframing", "UI Design", "Prototyping"],
    fullDescription: "Perfect role for beginners to grow in UI/UX design.",
    responsibilities: [
      "Create wireframes",
      "Design UI screens",
      "Collaborate with dev team",
      "Improve UX"
    ],
    qualifications: [
      "0–1 year experience",
      "Basic Figma knowledge",
      "Creative mindset",
      "Bangladesh based"
    ],
    benefits: ["Remote", "Flexible hours", "Growth opportunity"]
  },

  "2": {
    id: 2,
    title: "Frontend Developer (React)",
    level: "Entry Level",
    department: "Frontend",
    location: "Bangladesh Only (Remote / Dhaka)",
    type: "Full-time",
    salary: "৳20,000 – ৳25,000 / month",
    hiringStatus: "Hiring from April 2026",
    description: "Junior frontend developer for modern UI development.",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    fullDescription: "Work with modern frontend stack and grow fast.",
    responsibilities: [
      "Build UI components",
      "Fix bugs",
      "Support senior devs",
      "Write clean code"
    ],
    qualifications: [
      "0–1 year experience",
      "Basic React knowledge",
      "Problem solving",
      "Bangladesh based"
    ],
    benefits: ["Remote", "Learning support", "Flexible time"]
  },

  "3": {
    id: 3,
    title: "App Developer (Flutter)",
    level: "Entry Level",
    department: "Mobile",
    location: "Bangladesh Only (Remote / Dhaka)",
    type: "Full-time",
    salary: "৳20,000 – ৳25,000 / month",
    hiringStatus: "Hiring from April 2026",
    description: "Entry-level mobile app developer (Flutter).",
    skills: ["Flutter", "Dart", "Firebase"],
    fullDescription: "Start your mobile dev career with real projects.",
    responsibilities: [
      "Build mobile UI",
      "Fix bugs",
      "Integrate APIs",
      "Assist senior devs"
    ],
    qualifications: [
      "Basic Flutter knowledge",
      "0–1 year experience",
      "Willing to learn",
      "Bangladesh based"
    ],
    benefits: ["Remote", "Mentorship", "Growth"]
  },

  "4": {
    id: 4,
    title: "UI / UX Designer",
    level: "Mid Level",
    department: "Design",
    location: "Bangladesh Only (Remote / Dhaka)",
    type: "Full-time",
    salary: "৳30,000 – ৳50,000 / month",
    hiringStatus: "Hiring from April 2026",
    description: "Mid-level designer for product-level UI/UX.",
    skills: ["Figma", "UX Research", "Design System"],
    fullDescription: "Work on real product design and improve UX.",
    responsibilities: [
      "Design full UI flows",
      "User research",
      "Improve UX",
      "Team collaboration"
    ],
    qualifications: [
      "2–3 years experience",
      "Strong portfolio",
      "UX knowledge",
      "Bangladesh based"
    ],
    benefits: ["Remote", "Creative freedom", "Flexible hours"]
  },

  "5": {
    id: 5,
    title: "Frontend Developer (Next.js)",
    level: "Mid Level",
    department: "Frontend",
    location: "Bangladesh Only (Remote / Dhaka)",
    type: "Full-time",
    salary: "৳30,000 – ৳50,000 / month",
    hiringStatus: "Hiring from April 2026",
    description: "Mid-level frontend dev for scalable apps.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind"],
    fullDescription: "Build scalable, SEO-friendly applications.",
    responsibilities: [
      "Develop UI",
      "Optimize performance",
      "Collaborate team",
      "Maintain code"
    ],
    qualifications: [
      "2–4 years experience",
      "Strong React/Next.js",
      "Teamwork",
      "Bangladesh based"
    ],
    benefits: ["Remote", "Flexible time", "Career growth"]
  },

  "6": {
    id: 6,
    title: "App Developer (React Native)",
    level: "Mid Level",
    department: "Mobile",
    location: "Bangladesh Only (Remote / Dhaka)",
    type: "Full-time",
    salary: "৳30,000 – ৳50,000 / month",
    hiringStatus: "Hiring from April 2026",
    description: "Mid-level mobile developer for production apps.",
    skills: ["React Native", "API Integration", "Firebase"],
    fullDescription: "Work on real-world mobile applications.",
    responsibilities: [
      "Build mobile apps",
      "Integrate APIs",
      "Optimize performance",
      "Debug issues"
    ],
    qualifications: [
      "2–4 years experience",
      "React Native knowledge",
      "Problem solving",
      "Bangladesh based"
    ],
    benefits: ["Remote", "Flexible hours", "Growth"]
  }
}


export default function JobDetail() {
  const params = useParams()
  const router = useRouter()
  const id = params?.id as string

  // ✅ Safe fallback
  const job = jobListings[id ?? "1"] ?? jobListings["1"]

  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [formData, setFormData] = useState<{
    name: string
    email: string
    resume: string
    file: File | null
  }>({ name: "", email: "", resume: "", file: null })
  const [submitting, setSubmitting] = useState(false)

  // ✅ Form submission with file size check
  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.file && formData.file.size > 2 * 1024 * 1024) {
      alert("File size cannot exceed 2MB")
      return
    }

    const data = new FormData()
    data.append("name", formData.name)
    data.append("email", formData.email)
    data.append("resume", formData.resume)
    if (formData.file) data.append("file", formData.file)

    try {
      setSubmitting(true)
      const res = await fetch("/api/apply", {
        method: "POST",
        body: data,
      })
      const result = await res.json()
      if (res.ok) {
        alert("Application submitted successfully!")
        setFormData({ name: "", email: "", resume: "", file: null })
        setShowApplicationForm(false)
      } else {
        alert(result.error || "Failed to submit application")
      }
    } catch (err) {
      console.error(err)
      alert("Something went wrong")
    } finally {
      setSubmitting(false)
    }
  }

  const jobIds = Object.keys(jobListings)
    .map(Number)
    .sort((a, b) => a - b)
  const currentIndex = jobIds.indexOf(Number.parseInt(id))
  const prevId = currentIndex > 0 ? jobIds[currentIndex - 1] : null
  const nextId = currentIndex < jobIds.length - 1 ? jobIds[currentIndex + 1] : null

  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Link */}
        <Link
          href="/careers"
          className="flex items-center gap-2 text-secondary hover:text-accent mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Careers
        </Link>

        {/* Job Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">{job?.title}</h1>
          <p className="text-xl text-foreground/80 mb-6">{job?.fullDescription}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 rounded-lg bg-card/50 border border-border">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Department</p>
              <p className="font-semibold text-foreground">{job?.department}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                <MapPin size={12} /> Location
              </p>
              <p className="font-semibold text-foreground">{job?.location}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                <Clock size={12} /> Type
              </p>
              <p className="font-semibold text-foreground">{job?.type}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                <DollarSign size={12} /> Salary
              </p>
              <p className="font-semibold text-secondary">{job?.salary}</p>
            </div>
          </div>

          <button
            onClick={() => setShowApplicationForm(!showApplicationForm)}
            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:shadow-[0_0_40px_rgba(138,43,226,0.7)] transition-all"
          >
            Apply Now
          </button>
        </div>

        {/* Application Form */}
        {showApplicationForm && job && (
          <div className="mb-12 p-8 rounded-lg bg-card border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Apply for {job.title}</h2>
            <form onSubmit={handleApply} className="space-y-4" encType="multipart/form-data">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-secondary"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-secondary"
                  placeholder="your@email.com"
                />
              </div>

              {/* Resume Text */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Resume / Cover Letter</label>
                <textarea
                  required
                  value={formData.resume}
                  onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-secondary h-32"
                  placeholder="Tell us about yourself..."
                />
              </div>

              {/* File Upload Highlight */}
              <div className="border-2 border-dashed border-secondary p-4 rounded-lg bg-secondary/10">
                <label className="block text-sm font-medium text-foreground mb-2 font-semibold">
                  Upload Resume / Cover Letter (PDF, DOC, DOCX) - Max 2MB
                </label>
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setFormData({ ...formData, file: e.target.files?.[0] || null })}
                  className="w-full text-sm cursor-pointer"
                />
                {formData.file && (
                  <p className="text-xs text-foreground/70 mt-1">Selected file: {formData.file.name}</p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-medium hover:shadow-[0_0_30px_rgba(138,43,226,0.5)] transition-all disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Submit Application"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
                  className="px-6 py-2 border border-border text-foreground rounded-full font-medium hover:border-secondary transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Job Details */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Responsibilities</h2>
              <ul className="space-y-3">
                {job?.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2"></span>
                    <span className="text-foreground/80">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Qualifications</h2>
              <ul className="space-y-3">
                {job?.qualifications.map((qual, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></span>
                    <span className="text-foreground/80">{qual}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="sticky top-24 space-y-6">
              <div className="p-6 rounded-lg bg-card/50 border border-border">
                <h3 className="text-lg font-bold text-foreground mb-4">Required Skills</h3>
                <div className="space-y-2">
                  {job?.skills.map((skill, idx) => (
                    <div key={idx} className="px-3 py-2 rounded bg-primary/20 text-secondary text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-border">
                <h3 className="text-lg font-bold text-foreground mb-4">Key Benefits</h3>
                <ul className="space-y-2">
                  {job?.benefits.slice(0, 4).map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-accent">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-border">
          {prevId ? (
            <Link
              href={`/careers/${prevId}`}
              className="flex items-center gap-2 text-secondary hover:text-accent transition-colors"
            >
              <ArrowLeft size={20} /> Previous Job
            </Link>
          ) : (
            <div />
          )}
          {nextId ? (
            <Link
              href={`/careers/${nextId}`}
              className="flex items-center gap-2 text-secondary hover:text-accent transition-colors"
            >
              Next Job <ArrowLeft size={20} style={{ transform: "scaleX(-1)" }} />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </main>
  )
}
