"use client"

import { MapPin, Clock, DollarSign, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Careers() {
  const jobs = [
  {
    id: 1,
    title: "Mid-Level Full-Stack Developer",
    department: "Engineering",
    location: "Dhaka, Bangladesh / Remote",
    type: "Full-time",
    salary: "$1,200 – $2,000 / month",
    description:
      "Build and maintain scalable web applications using modern full-stack technologies. Work closely with designers and backend engineers to deliver high-quality digital products.",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB"],
  },
  {
    id: 2,
    title: "Backend Developer (Node.js)",
    department: "Engineering",
    location: "Dhaka, Bangladesh / Remote",
    type: "Full-time",
    salary: "$1,300 – $2,100 / month",
    description:
      "Develop secure and high-performance backend systems, REST APIs, and database architectures for scalable web applications.",
    skills: ["Node.js", "Express.js", "TypeScript", "MongoDB", "REST API"],
  },
  {
    id: 3,
    title: "AI / Machine Learning Engineer",
    department: "AI & Data",
    location: "Remote",
    type: "Full-time",
    salary: "$1,500 – $2,500 / month",
    description:
      "Create intelligent AI-driven solutions, machine learning models, and automation systems that help businesses make data-driven decisions.",
    skills: ["Python", "Machine Learning", "TensorFlow", "PyTorch", "Data Analysis"],
  },
  {
    id: 4,
    title: "Frontend Developer (React / Next.js)",
    department: "Frontend",
    location: "Dhaka, Bangladesh / Remote",
    type: "Full-time",
    salary: "$1,100 – $1,800 / month",
    description:
      "Build responsive, SEO-friendly user interfaces using modern frontend frameworks with a strong focus on performance and user experience.",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "UI Optimization"],
  },
  {
    id: 5,
    title: "UI / UX Designer",
    department: "Design",
    location: "Dhaka, Bangladesh / Remote",
    type: "Full-time",
    salary: "$900 – $1,500 / month",
    description:
      "Design intuitive and visually engaging user experiences for web and mobile applications, collaborating closely with developers and product teams.",
    skills: ["Figma", "UI Design", "UX Research", "Prototyping", "Design Systems"],
  },
  {
    id: 6,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    salary: "$1,400 – $2,300 / month",
    description:
      "Manage cloud infrastructure, CI/CD pipelines, and deployment automation to ensure high availability, security, and scalability of applications.",
    skills: ["AWS", "Docker", "CI/CD", "Linux", "Cloud Infrastructure"],
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
