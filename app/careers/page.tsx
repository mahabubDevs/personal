"use client"

import { MapPin, Clock, DollarSign, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Careers() {
const jobs = [
  {
    id: 1,
    title: "UI / UX Designer (Entry Level)",
    department: "Design",
    location: "Bangladesh Only (Remote / Dhaka)",
    type: "Full-time",
    salary: "৳20,000 – ৳25,000 / month",
    description:
      "Start your career as a UI/UX designer by creating modern and user-friendly interfaces for web and mobile applications.",
    skills: ["Figma", "Wireframing", "UI Design", "Prototyping"],
  },
  {
    id: 2,
    title: "Frontend Developer (React) - Entry Level",
    department: "Frontend",
    location: "Bangladesh Only (Remote / Dhaka)",
    type: "Full-time",
    salary: "৳20,000 – ৳25,000 / month",
    description:
      "Work on modern frontend applications using React and build responsive user interfaces.",
    skills: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    id: 3,
    title: "App Developer (Flutter) - Entry Level",
    department: "Mobile",
    location: "Bangladesh Only (Remote / Dhaka)",
    type: "Full-time",
    salary: "৳20,000 – ৳25,000 / month",
    description:
      "Begin your journey in mobile development by building cross-platform apps using Flutter.",
    skills: ["Flutter", "Dart", "Firebase"],
  },
  {
    id: 4,
    title: "UI / UX Designer (Mid Level)",
    department: "Design",
    location: "Bangladesh Only (Remote / Dhaka)",
    type: "Full-time",
    salary: "৳30,000 – ৳50,000 / month",
    description:
      "Design high-quality user experiences and interfaces for real-world digital products.",
    skills: ["Figma", "UX Research", "Design Systems"],
  },
  {
    id: 5,
    title: "Frontend Developer (Next.js) - Mid Level",
    department: "Frontend",
    location: "Bangladesh Only (Remote / Dhaka)",
    type: "Full-time",
    salary: "৳30,000 – ৳50,000 / month",
    description:
      "Build scalable, SEO-friendly applications using Next.js and modern frontend tools.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 6,
    title: "App Developer (React Native) - Mid Level",
    department: "Mobile",
    location: "Bangladesh Only (Remote / Dhaka)",
    type: "Full-time",
    salary: "৳30,000 – ৳50,000 / month",
    description:
      "Develop production-ready mobile applications using React Native and modern tools.",
    skills: ["React Native", "API Integration", "Firebase"],
  },
]


  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            We're Hiring!
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Join our team and help us build the future of digital innovation.
          </p>
        </div>

        {/* Culture Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { title: "Innovation First", desc: "Work with cutting-edge technologies and latest frameworks" },
            { title: "Team Culture", desc: "Collaborate with talented and passionate professionals" },
            { title: "Growth", desc: "Continuous learning opportunities and career development" },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-lg bg-card/50 border border-border neon-border text-center">
              <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
              <p className="text-foreground/70">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">Open Positions</h2>

          {jobs.map((job) => (
            <div
              key={job.id}
              className="p-6 rounded-lg bg-card/50 border border-border hover:border-secondary transition-all hover:shadow-[0_0_30px_rgba(0,191,255,0.2)] group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-secondary transition-colors mb-2">
                    {job.title}
                  </h3>
                  <p className="text-secondary text-sm font-medium mb-3">{job.department}</p>
                </div>
              </div>

              <p className="text-foreground/70 mb-4">{job.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 pb-4 border-b border-border">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={16} className="text-secondary" />
                  <span className="text-foreground/70">{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock size={16} className="text-secondary" />
                  <span className="text-foreground/70">{job.type}</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:col-span-2">
                  <DollarSign size={16} className="text-secondary" />
                  <span className="text-foreground/70">{job.salary}</span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 bg-primary/20 text-secondary rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/careers/${job.id}`}
                  className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-medium hover:shadow-[0_0_30px_rgba(138,43,226,0.5)] transition-all whitespace-nowrap"
                >
                  Apply Now <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-16 p-12 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-border">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Why Join MrBitX?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Competitive salary and equity",
              "Comprehensive health benefits",
              "Flexible work arrangements",
              "Professional development budget",
              "Unlimited PTO",
              "Collaborative work environment",
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0"></span>
                <p className="text-foreground/80">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
