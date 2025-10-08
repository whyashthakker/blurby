import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-32 max-w-4xl">
        <div className="text-center mb-16">
        <h1 className="text-4xl font-cal mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        </div>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-cal mb-4">Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            At Blurby, operated by AISOLO TECHNOLOGIES PRIVATE LIMITED, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our browser extension and services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-cal mb-4">Data We Collect</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-cal mb-2">Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may collect personal information that you voluntarily provide to us, such as:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li>Email address when you contact us for support</li>
                <li>Name and contact information when you reach out to us</li>
                <li>Feedback and communications you send to us</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-cal mb-2">Usage Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may collect anonymous usage statistics to improve our service, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li>Extension installation and usage patterns</li>
                <li>Feature usage analytics (anonymized)</li>
                <li>Error reports and crash logs (without personal data)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-cal mb-4">What We Don't Collect</h2>
          <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg">
            <p className="text-green-800 dark:text-green-200 leading-relaxed">
              <strong>Important:</strong> Blurby is designed with privacy-first principles. We do NOT collect, store, or transmit:
            </p>
            <ul className="list-disc list-inside text-green-700 dark:text-green-300 mt-2 space-y-1">
              <li>Any content from your screen or websites you visit</li>
              <li>Sensitive information that you blur or protect</li>
              <li>API keys, passwords, or any credentials</li>
              <li>Screenshots or recordings of your screen</li>
              <li>Personal data from forms or websites</li>
              <li>Browsing history or website content</li>
            </ul>
            <p className="text-green-800 dark:text-green-200 leading-relaxed mt-4">
              <strong>Local Processing Only:</strong> All data processing happens locally on your device. Nothing is ever sent to our servers or any third-party services.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-cal mb-4">How We Use Your Data</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use the limited data we collect only for the following purposes:
          </p>
          <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
            <li>Providing and improving our services</li>
            <li>Responding to your support requests</li>
            <li>Analyzing usage patterns to enhance user experience</li>
            <li>Communicating important updates about our service</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-cal mb-4">Data Security & Local Processing</h2>
          <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg">
            <p className="text-blue-800 dark:text-blue-200 leading-relaxed mb-4">
              <strong>100% Local Processing:</strong> All data processing happens exclusively on your device. Blurby operates entirely offline for privacy protection.
            </p>
            <ul className="list-disc list-inside text-blue-700 dark:text-blue-300 space-y-1">
              <li>No data transmission to external servers</li>
              <li>No cloud processing or storage</li>
              <li>Your sensitive information never leaves your computer</li>
              <li>Complete control over your data at all times</li>
            </ul>
          </div>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Since everything is processed locally, we cannot be held responsible for any data exposure that may occur on your device. You maintain full control and responsibility for your data security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-cal mb-4">Third-Party Services</h2>
          <p className="text-muted-foreground leading-relaxed">
            Blurby may use third-party services for analytics and support purposes. These services are carefully selected and bound by strict privacy agreements. We do not share personal information with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-cal mb-4">Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
            <li>Request access to your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for data processing</li>
            <li>Export your data in a portable format</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-cal mb-4">Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <div className="mt-4 p-4 bg-muted/50 rounded-lg">
            <p className="text-muted-foreground">
              Email: <a href="mailto:support@explainx.ai" className="text-primary hover:underline">support@explainx.ai</a><br/>
              Company: AISOLO TECHNOLOGIES PRIVATE LIMITED
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-cal mb-4">Changes to This Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>
      </div>
      </div>
      <Footer />
    </div>
  )
}