"use client"

import { MapPin, Clock, DollarSign, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Careers() {
  const jobs = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$150k - $200k",
      description: "Join our team to build scalable web applications using cutting-edge technologies.",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    },
    {
      id: 2,
      title: "AI/ML Engineer",
      department: "AI Research",
      location: "Remote",
      type: "Full-time",
      salary: "$160k - $220k",
      description: "Build intelligent systems and machine learning models that solve real-world problems.",
      skills: ["Python", "TensorFlow", "PyTorch", "Machine Learning", "MLOps"],
    },
    {
      id: 3,
      title: "Mobile App Developer",
      department: "Mobile",
      location: "New York, NY",
      type: "Full-time",
      salary: "$120k - $160k",
      description: "Develop high-performance mobile applications for iOS and Android platforms.",
      skills: ["React Native", "Swift", "Kotlin", "Firebase", "Mobile UX"],
    },
    {
      id: 4,
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      salary: "$100k - $140k",
      description: "Create beautiful and intuitive user interfaces for our digital products.",
      skills: ["Figma", "UI Design", "User Research", "Prototyping", "Design Systems"],
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$130k - $180k",
      description: "Build and maintain scalable infrastructure and deployment pipelines.",
      skills: ["Kubernetes", "Docker", "AWS", "CI/CD", "Infrastructure as Code"],
    },
    {
      id: 6,
      title: "QA Automation Engineer",
      department: "Quality Assurance",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $130k",
      description: "Ensure quality and reliability of our products through comprehensive testing.",
      skills: ["Selenium", "Python", "Testing Frameworks", "CI/CD", "Test Automation"],
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
