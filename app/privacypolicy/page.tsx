"use client"

export default function PrivacyPage() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Privacy{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Policy
          </span>
        </h1>

        <p className="text-foreground/70 mb-10">
          Your privacy is important to us. This policy explains how <strong>MrBitX</strong> collects and uses your data.
        </p>

        <div className="space-y-8 text-foreground/80">

          <div>
            <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
            <p>
              We may collect personal information such as name, email, phone number, and project details 
              when you contact us or use our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. How We Use Information</h2>
            <p>
              Your data is used to communicate, deliver services, improve user experience, and provide support.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Data Protection</h2>
            <p>
              We implement security measures to protect your information from unauthorized access or disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Third-Party Services</h2>
            <p>
              We may use trusted third-party services (e.g., payment processors, analytics tools) that comply with international standards.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Cookies</h2>
            <p>
              Our website may use cookies to enhance user experience and analyze website traffic.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Client Communication</h2>
            <p>
              We may contact you regarding your inquiry, project updates, or support requests.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
            <p>
              You have the right to request access, correction, or deletion of your personal data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Updates</h2>
            <p>
              This policy may be updated from time to time. Continued use of our services implies acceptance of changes.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}