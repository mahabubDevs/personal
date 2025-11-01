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
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$150k - $200k",
    description: "Join our team to build scalable web applications using cutting-edge technologies.",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    fullDescription:
      "We're looking for an experienced Full-Stack Developer to join our core engineering team. You'll work on building scalable, high-performance web applications that serve millions of users. You'll have the opportunity to work with modern technologies and collaborate with talented engineers from around the world.",
    responsibilities: [
      "Design and implement scalable backend systems using Node.js and TypeScript",
      "Build responsive user interfaces with React and modern frontend frameworks",
      "Optimize application performance and database queries",
      "Participate in code reviews and mentor junior developers",
      "Collaborate with product and design teams to deliver features",
      "Implement best practices for testing, security, and deployment",
    ],
    qualifications: [
      "5+ years of professional software development experience",
      "Strong proficiency in JavaScript/TypeScript and at least one backend language",
      "Experience with React or similar modern frontend frameworks",
      "Understanding of SQL and relational databases",
      "Experience with cloud platforms (AWS, GCP, Azure)",
      "Strong problem-solving skills and attention to detail",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision coverage",
      "Flexible remote work options",
      "$5,000 annual professional development budget",
      "Unlimited paid time off",
      "Free meals and beverages",
    ],
  },
  "2": {
    id: 2,
    title: "AI/ML Engineer",
    department: "AI Research",
    location: "Remote",
    type: "Full-time",
    salary: "$160k - $220k",
    description: "Build intelligent systems and machine learning models that solve real-world problems.",
    skills: ["Python", "TensorFlow", "PyTorch", "Machine Learning", "MLOps"],
    fullDescription:
      "Join our AI Research team and help us push the boundaries of artificial intelligence. You'll work on developing machine learning models, optimizing neural networks, and deploying AI solutions at scale. This role offers the opportunity to work on cutting-edge projects that have real-world impact.",
    responsibilities: [
      "Design and implement machine learning models and algorithms",
      "Develop and optimize neural networks for various applications",
      "Build data pipelines and preprocessing workflows",
      "Conduct research and experiments to improve model performance",
      "Deploy ML models to production environments",
      "Collaborate with cross-functional teams to integrate AI solutions",
    ],
    qualifications: [
      "3+ years of experience in machine learning or data science",
      "Strong proficiency in Python and ML frameworks (TensorFlow, PyTorch)",
      "Deep understanding of machine learning algorithms and techniques",
      "Experience with data preprocessing and feature engineering",
      "Familiarity with MLOps and model deployment",
      "Strong mathematical background",
    ],
    benefits: [
      "Highly competitive salary and equity",
      "Comprehensive benefits package",
      "100% remote work opportunity",
      "$7,000 annual conference attendance budget",
      "Access to GPU computing resources",
      "Flexible work schedule",
    ],
  },
  "3": {
    id: 3,
    title: "Mobile App Developer",
    department: "Mobile",
    location: "New York, NY",
    type: "Full-time",
    salary: "$120k - $160k",
    description: "Develop high-performance mobile applications for iOS and Android platforms.",
    skills: ["React Native", "Swift", "Kotlin", "Firebase", "Mobile UX"],
    fullDescription:
      "We're seeking a talented Mobile App Developer to create engaging and performant applications for iOS and Android. You'll work with our product team to bring innovative mobile experiences to millions of users worldwide.",
    responsibilities: [
      "Develop and maintain mobile applications using React Native and native technologies",
      "Implement responsive UI/UX designs for different screen sizes",
      "Optimize app performance and ensure smooth user experiences",
      "Integrate with backend APIs and services",
      "Participate in code reviews and maintain code quality",
      "Collaborate with designers and product managers",
    ],
    qualifications: [
      "3+ years of mobile app development experience",
      "Proficiency in React Native, Swift, or Kotlin",
      "Experience with Firebase or similar mobile backends",
      "Understanding of mobile UI/UX principles",
      "Experience with version control and CI/CD",
      "Strong problem-solving skills",
    ],
    benefits: [
      "Competitive salary and benefits",
      "Health, dental, and vision insurance",
      "Flexible work hours",
      "$4,000 annual professional development budget",
      "20 days paid time off",
      "Relocation assistance available",
    ],
  },
  "4": {
    id: 4,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    salary: "$100k - $140k",
    description: "Create beautiful and intuitive user interfaces for our digital products.",
    skills: ["Figma", "UI Design", "User Research", "Prototyping", "Design Systems"],
    fullDescription:
      "Join our Design team and create user-centric interfaces for our suite of products. You'll collaborate with engineers, product managers, and researchers to design experiences that delight users and drive business results.",
    responsibilities: [
      "Design user interfaces for web and mobile applications",
      "Conduct user research and usability testing",
      "Create wireframes, mockups, and interactive prototypes",
      "Develop and maintain design systems and component libraries",
      "Collaborate with product and engineering teams",
      "Iterate on designs based on user feedback",
    ],
    qualifications: [
      "3+ years of UI/UX design experience",
      "Proficiency in design tools (Figma, Adobe XD, Sketch)",
      "Strong understanding of design principles and UX best practices",
      "Experience creating design systems",
      "Portfolio demonstrating design work",
      "Excellent communication skills",
    ],
    benefits: [
      "Competitive salary and equity",
      "Comprehensive health coverage",
      "100% remote opportunity",
      "$5,000 annual design tools budget",
      "Unlimited PTO",
      "Creative freedom and collaboration",
    ],
  },
  "5": {
    id: 5,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$130k - $180k",
    description: "Build and maintain scalable infrastructure and deployment pipelines.",
    skills: ["Kubernetes", "Docker", "AWS", "CI/CD", "Infrastructure as Code"],
    fullDescription:
      "We're looking for a DevOps Engineer to help us build and maintain the infrastructure that powers our applications. You'll work on automation, deployment pipelines, and ensuring our systems are reliable and scalable.",
    responsibilities: [
      "Design and implement infrastructure solutions on AWS",
      "Develop and maintain CI/CD pipelines",
      "Containerize applications using Docker and Kubernetes",
      "Monitor system performance and implement improvements",
      "Implement security best practices and compliance measures",
      "Mentor junior team members",
    ],
    qualifications: [
      "4+ years of DevOps or infrastructure engineering experience",
      "Strong knowledge of Kubernetes and Docker",
      "Experience with cloud platforms (AWS preferred)",
      "Proficiency in Infrastructure as Code tools",
      "Experience with monitoring and logging solutions",
      "Strong bash/Python scripting skills",
    ],
    benefits: [
      "Excellent salary and stock options",
      "Comprehensive benefits package",
      "Flexible work arrangements",
      "$6,000 annual professional development budget",
      "Unlimited paid time off",
      "Relocation package available",
    ],
  },
  "6": {
    id: 6,
    title: "QA Automation Engineer",
    department: "Quality Assurance",
    location: "Remote",
    type: "Full-time",
    salary: "$90k - $130k",
    description: "Ensure quality and reliability of our products through comprehensive testing.",
    skills: ["Selenium", "Python", "Testing Frameworks", "CI/CD", "Test Automation"],
    fullDescription:
      "Join our QA team and help us ensure the quality and reliability of our products. You'll develop automated tests, create testing strategies, and work with the engineering team to identify and fix issues.",
    responsibilities: [
      "Design and implement automated test suites",
      "Develop testing strategies and frameworks",
      "Execute manual and automated testing",
      "Collaborate with developers to fix bugs",
      "Monitor test coverage and quality metrics",
      "Participate in product planning discussions",
    ],
    qualifications: [
      "2+ years of QA automation experience",
      "Proficiency in Python and testing frameworks",
      "Experience with Selenium or similar tools",
      "Understanding of CI/CD pipelines",
      "Strong debugging skills",
      "Attention to detail",
    ],
    benefits: [
      "Competitive salary and benefits",
      "Health, dental, and vision coverage",
      "100% remote work",
      "$3,000 annual learning budget",
      "20 days paid time off",
      "Flexible work schedule",
    ],
  },
}

export default function JobDetail() {
  const params = useParams()
  const router = useRouter()
  const id = params?.id as string
  const job = jobListings[id] || jobListings["1"]

  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", resume: "" })

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Application submitted! We will contact you soon.")
    setShowApplicationForm(false)
    setFormData({ name: "", email: "", resume: "" })
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
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">{job.title}</h1>
          <p className="text-xl text-foreground/80 mb-6">{job.fullDescription}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 rounded-lg bg-card/50 border border-border">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Department</p>
              <p className="font-semibold text-foreground">{job.department}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                <MapPin size={12} /> Location
              </p>
              <p className="font-semibold text-foreground">{job.location}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                <Clock size={12} /> Type
              </p>
              <p className="font-semibold text-foreground">{job.type}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                <DollarSign size={12} /> Salary
              </p>
              <p className="font-semibold text-secondary">{job.salary}</p>
            </div>
          </div>

          <button
            onClick={() => setShowApplicationForm(!showApplicationForm)}
            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:shadow-[0_0_40px_rgba(138,43,226,0.7)] transition-all"
          >
            Apply Now
          </button>
        </div>

        {showApplicationForm && (
          <div className="mb-12 p-8 rounded-lg bg-card border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Apply for {job.title}</h2>
            <form onSubmit={handleApply} className="space-y-4">
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
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-medium hover:shadow-[0_0_30px_rgba(138,43,226,0.5)] transition-all"
                >
                  Submit Application
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

        {/* Job Details Sections */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            {/* Responsibilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2"></span>
                    <span className="text-foreground/80">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Qualifications */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Qualifications</h2>
              <ul className="space-y-3">
                {job.qualifications.map((qual, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></span>
                    <span className="text-foreground/80">{qual}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar - Skills and Benefits */}
          <div>
            <div className="sticky top-24 space-y-6">
              {/* Required Skills */}
              <div className="p-6 rounded-lg bg-card/50 border border-border">
                <h3 className="text-lg font-bold text-foreground mb-4">Required Skills</h3>
                <div className="space-y-2">
                  {job.skills.map((skill, idx) => (
                    <div key={idx} className="px-3 py-2 rounded bg-primary/20 text-secondary text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits Preview */}
              <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-border">
                <h3 className="text-lg font-bold text-foreground mb-4">Key Benefits</h3>
                <ul className="space-y-2">
                  {job.benefits.slice(0, 4).map((benefit, idx) => (
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
