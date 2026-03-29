"use client"

export default function TermsPage() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Terms &{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Conditions
          </span>
        </h1>

        <p className="text-foreground/70 mb-10">
          These Terms & Conditions govern your use of services provided by <strong>MrBitX</strong>.
        </p>

        <div className="space-y-8 text-foreground/80">
          
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Services</h2>
            <p>
              MrBitX provides web development, app development, AI solutions, and software services 
              tailored to client requirements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Payment Terms</h2>
            <p>
              A minimum <strong>30% advance payment</strong> is required before starting any project.
              The remaining balance will be paid based on milestones or upon project completion.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Project Timeline</h2>
            <p>
              Project timelines are estimated and may vary depending on scope, revisions, and client feedback.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Refund Policy</h2>
            <p>
              If MrBitX is unable to complete the project, the client is eligible for a 
              <strong> full refund within 6 months</strong> of project initiation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Client Responsibilities</h2>
            <p>
              Clients must provide accurate project requirements, timely feedback, and necessary resources 
              to ensure successful delivery.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Communication</h2>
            <p>
              We may contact clients before and during the project to clarify requirements and provide updates.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Limitation of Liability</h2>
            <p>
              MrBitX is not liable for indirect damages, data loss, or business interruption arising from the use of our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
            <p>
              These terms are governed by applicable international business practices and local laws of Bangladesh.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}