import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-32 max-w-4xl">
        <div className="text-center mb-16">
        <h1 className="text-4xl font-cal mb-4">Terms of Service</h1>
        <p className="text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        </div>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-cal mb-4">Agreement to Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing and using Blurby, a browser extension provided by AISOLO TECHNOLOGIES PRIVATE LIMITED, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-cal mb-4">Description of Service</h2>
          <p className="text-muted-foreground leading-relaxed">
            Blurby is a privacy protection browser extension that helps users blur sensitive information during screen sharing and recording sessions. The service uses AI technology to automatically detect and protect sensitive data in real-time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-cal mb-4">License and Usage</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-cal mb-2">License Grant</h3>
              <p className="text-muted-foreground leading-relaxed">
                Subject to your compliance with these Terms, we grant you a personal, non-exclusive, non-transferable license to use Blurby for your personal or business purposes.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-cal mb-2">Restrictions</h3>
              <p className="text-muted-foreground leading-relaxed">
                You may not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li>Reverse engineer, decompile, or disassemble the software</li>
                <li>Use the service for illegal or unauthorized purposes</li>
                <li>Attempt to circumvent any security measures</li>
                <li>Redistribute or resell the service</li>
                <li>Use the service to harm others or violate their privacy</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-cal mb-4">Payment and Billing</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-cal mb-2">One-Time Payment</h3>
              <p className="text-muted-foreground leading-relaxed">
                Blurby is offered as a one-time purchase for $19 USD, providing lifetime access to the service and all future updates.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-cal mb-2">Refund Policy</h3>
              <p className="text-muted-foreground leading-relaxed">
                We offer a 30-day money-back guarantee. If you're not satisfied with Blurby, contact us within 30 days of purchase for a full refund.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-cal mb-4">Privacy and Data Protection</h2>
          <p className="text-muted-foreground leading-relaxed">
            Your privacy is important to us. Blurby processes all data locally on your device and does not collect, store, or transmit sensitive information. Please refer to our Privacy Policy for detailed information about our data practices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-cal mb-4">Disclaimers and Limitations</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-cal mb-2">Service Availability</h3>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to provide reliable service, we cannot guarantee that Blurby will be available 100% of the time or work perfectly in all environments.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-cal mb-2">Limitation of Liability</h3>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, AISOLO TECHNOLOGIES PRIVATE LIMITED shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of Blurby.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-cal mb-4">User Responsibilities</h2>
          <p className="text-muted-foreground leading-relaxed">
            You are responsible for:
          </p>
          <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
            <li>Using Blurby in compliance with all applicable laws</li>
            <li>Ensuring your browser and system meet minimum requirements</li>
            <li>Properly configuring and testing the service before important presentations</li>
            <li>Keeping your browser extension updated</li>
            <li>Using additional security measures as appropriate for your use case</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-cal mb-4">Termination</h2>
          <p className="text-muted-foreground leading-relaxed">
            Either party may terminate this agreement at any time. Upon termination, your right to use Blurby will cease immediately. Provisions that by their nature should survive termination will remain in effect.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-cal mb-4">Updates and Changes</h2>
          <p className="text-muted-foreground leading-relaxed">
            We reserve the right to modify these Terms of Service at any time. We will notify users of significant changes through the extension or email. Continued use of Blurby after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-cal mb-4">Governing Law</h2>
          <p className="text-muted-foreground leading-relaxed">
            These Terms of Service are governed by the laws of India. Any disputes arising from these terms will be subject to the jurisdiction of Indian courts.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-cal mb-4">Contact Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions about these Terms of Service, please contact us:
          </p>
          <div className="mt-4 p-4 bg-muted/50 rounded-lg">
            <p className="text-muted-foreground">
              Email: <a href="mailto:legal@blurby.app" className="text-primary hover:underline">legal@blurby.app</a><br/>
              Company: AISOLO TECHNOLOGIES PRIVATE LIMITED
            </p>
          </div>
        </section>
      </div>
      </div>
      <Footer />
    </div>
  )
}