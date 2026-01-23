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
    department: string
    location: string
    type: string
    salary: string
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
    title: "Mid-Level Full-Stack Developer",
    department: "Engineering",
    location: "Dhaka, Bangladesh / Remote",
    type: "Full-time",
    salary: "$1,200 – $2,000 / month",
    description:
      "Build scalable and high-performance web applications using modern full-stack technologies.",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB"],
    fullDescription:
      "We are looking for a Mid-Level Full-Stack Developer to join our engineering team. You will work on real-world projects, building modern web applications with a strong focus on performance, scalability, and clean code.",
    responsibilities: [
      "Develop full-stack web applications using React, Next.js, and Node.js",
      "Design and implement REST APIs",
      "Write clean, maintainable, and scalable code",
      "Collaborate with designers and backend engineers",
      "Optimize application performance and security",
      "Participate in code reviews and team discussions",
    ],
    qualifications: [
      "2–4 years of professional full-stack development experience",
      "Strong knowledge of JavaScript and TypeScript",
      "Experience with React or Next.js",
      "Basic understanding of backend architecture and databases",
      "Familiarity with Git and Agile workflows",
      "Good problem-solving skills",
    ],
    benefits: [
      "Competitive mid-range salary",
      "Remote or Dhaka-based work flexibility",
      "Friendly and collaborative work environment",
      "Career growth opportunities",
      "Flexible working hours",
      "Paid leave and holidays",
    ],
  },

  "2": {
    id: 2,
    title: "Backend Developer (Node.js)",
    department: "Engineering",
    location: "Dhaka, Bangladesh / Remote",
    type: "Full-time",
    salary: "$1,300 – $2,100 / month",
    description:
      "Develop secure, scalable backend systems and APIs for modern web applications.",
    skills: ["Node.js", "Express.js", "TypeScript", "MongoDB", "REST APIs"],
    fullDescription:
      "As a Backend Developer, you will focus on building reliable server-side applications, APIs, and database architectures that power our digital products.",
    responsibilities: [
      "Develop backend services using Node.js and Express",
      "Design RESTful APIs and database schemas",
      "Ensure application security and data protection",
      "Optimize server performance and scalability",
      "Collaborate with frontend and DevOps teams",
      "Maintain documentation and code quality",
    ],
    qualifications: [
      "2–4 years of backend development experience",
      "Strong knowledge of Node.js and Express",
      "Experience with MongoDB or similar databases",
      "Understanding of authentication and authorization",
      "Familiarity with cloud environments",
      "Strong debugging skills",
    ],
    benefits: [
      "Mid-range competitive salary",
      "Remote-friendly culture",
      "Learning and growth opportunities",
      "Flexible working hours",
      "Supportive engineering team",
      "Paid time off",
    ],
  },

  "3": {
    id: 3,
    title: "AI / Machine Learning Engineer",
    department: "AI & Data",
    location: "Remote",
    type: "Full-time",
    salary: "$1,500 – $2,500 / month",
    description:
      "Build intelligent AI and machine learning solutions for real-world business problems.",
    skills: ["Python", "Machine Learning", "TensorFlow", "PyTorch", "Data Analysis"],
    fullDescription:
      "We are seeking an AI/ML Engineer to design and deploy intelligent systems that automate processes and generate insights using data-driven approaches.",
    responsibilities: [
      "Develop and train machine learning models",
      "Analyze and preprocess large datasets",
      "Deploy ML models into production systems",
      "Optimize model performance and accuracy",
      "Collaborate with engineering teams",
      "Document models and workflows",
    ],
    qualifications: [
      "2–4 years of experience in AI or machine learning",
      "Strong Python programming skills",
      "Knowledge of ML frameworks",
      "Understanding of data preprocessing techniques",
      "Experience with model deployment is a plus",
      "Strong analytical mindset",
    ],
    benefits: [
      "Remote-first role",
      "Competitive monthly salary",
      "Opportunity to work on real AI products",
      "Flexible schedule",
      "Learning budget",
      "Supportive team culture",
    ],
  },

  "4": {
    id: 4,
    title: "Frontend Developer (React / Next.js)",
    department: "Frontend",
    location: "Dhaka, Bangladesh / Remote",
    type: "Full-time",
    salary: "$1,100 – $1,800 / month",
    description:
      "Build modern, SEO-friendly, and high-performance user interfaces.",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "UI Optimization"],
    fullDescription:
      "We are looking for a Frontend Developer to craft fast, responsive, and visually appealing user interfaces using modern frontend technologies.",
    responsibilities: [
      "Develop UI components using React and Next.js",
      "Ensure responsive and cross-browser compatibility",
      "Optimize frontend performance and SEO",
      "Collaborate with designers and backend developers",
      "Maintain UI consistency and quality",
      "Fix UI bugs and improve UX",
    ],
    qualifications: [
      "2–4 years of frontend development experience",
      "Strong React and JavaScript knowledge",
      "Experience with Tailwind CSS or similar frameworks",
      "Basic SEO and performance optimization knowledge",
      "Attention to UI/UX details",
      "Team collaboration skills",
    ],
    benefits: [
      "Flexible work location",
      "Competitive salary",
      "Creative work environment",
      "Growth opportunities",
      "Paid leave",
      "Modern tech stack",
    ],
  },

  "5": {
    id: 5,
    title: "UI / UX Designer",
    department: "Design",
    location: "Dhaka, Bangladesh / Remote",
    type: "Full-time",
    salary: "$900 – $1,500 / month",
    description:
      "Design intuitive and engaging user experiences for web and mobile products.",
    skills: ["Figma", "UI Design", "UX Research", "Prototyping", "Design Systems"],
    fullDescription:
      "As a UI/UX Designer, you will create user-centered designs that balance aesthetics and usability across digital platforms.",
    responsibilities: [
      "Design UI for web and mobile applications",
      "Create wireframes and prototypes",
      "Conduct basic user research",
      "Collaborate with developers and product teams",
      "Maintain design consistency",
      "Iterate designs based on feedback",
    ],
    qualifications: [
      "2–3 years of UI/UX design experience",
      "Strong Figma skills",
      "Understanding of UX principles",
      "Portfolio of design work",
      "Good communication skills",
      "Attention to detail",
    ],
    benefits: [
      "Remote or hybrid work",
      "Creative freedom",
      "Supportive team",
      "Flexible hours",
      "Paid holidays",
      "Career growth",
    ],
  },

  "6": {
    id: 6,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    salary: "$1,400 – $2,300 / month",
    description:
      "Manage cloud infrastructure and deployment pipelines for scalable applications.",
    skills: ["AWS", "Docker", "CI/CD", "Linux", "Cloud Infrastructure"],
    fullDescription:
      "We are seeking a DevOps Engineer to manage deployments, cloud infrastructure, and automation workflows to ensure system reliability and scalability.",
    responsibilities: [
      "Manage cloud infrastructure",
      "Build and maintain CI/CD pipelines",
      "Automate deployment processes",
      "Monitor system performance",
      "Ensure security best practices",
      "Collaborate with engineering teams",
    ],
    qualifications: [
      "2–4 years of DevOps experience",
      "Strong Linux and cloud knowledge",
      "Experience with Docker and CI/CD",
      "Basic scripting skills",
      "Problem-solving mindset",
      "Good communication skills",
    ],
    benefits: [
      "Fully remote role",
      "Competitive salary",
      "Flexible work hours",
      "Learning opportunities",
      "Supportive culture",
      "Paid leave",
    ],
  },
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
