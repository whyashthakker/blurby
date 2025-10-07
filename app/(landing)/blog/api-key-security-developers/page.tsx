import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Calendar, Clock, Code, Key, Shield, AlertTriangle, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ApiKeySecurityDevelopers() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-32 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span>•</span>
            <span>Development</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
          </div>
          
          <h1 className="text-4xl font-cal mb-4">
            API Key Security: A Developer's Complete Guide
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime="2025-09-28">September 28, 2025</time>
            </div>
            <span>By Blurby Team</span>
          </div>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            API keys are the digital keys to your kingdom. Protecting them during development, presentations, and screen sharing is crucial for maintaining security. Here's a comprehensive guide to API key security for developers.
          </p>

          <h2 className="text-2xl font-cal mb-4">Understanding API Key Risks</h2>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            API keys are essentially passwords that grant access to external services. When exposed, they can lead to:
          </p>

          <ul className="list-disc list-inside text-muted-foreground mb-8 space-y-2">
            <li><strong>Unauthorized API calls</strong> resulting in unexpected charges</li>
            <li><strong>Data breaches</strong> if keys provide access to sensitive information</li>
            <li><strong>Service abuse</strong> using your credentials for malicious activities</li>
            <li><strong>Rate limit exhaustion</strong> affecting your application's functionality</li>
            <li><strong>Account suspension</strong> if terms of service are violated</li>
          </ul>

          <Card className="p-6 bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-cal text-red-800 dark:text-red-200 mb-2">Real Cost Example</h3>
                <p className="text-red-700 dark:text-red-300 text-sm">
                  In 2023, a developer accidentally exposed an AWS key during a YouTube tutorial. Within 24 hours, attackers had racked up $50,000 in compute costs mining cryptocurrency. The key was visible for only 30 seconds in the video.
                </p>
              </div>
            </div>
          </Card>

          <h2 className="text-2xl font-cal mb-4">Development Environment Security</h2>

          <h3 className="text-xl font-cal mb-3">Environment Variables</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Never hardcode API keys in your source code. Use environment variables instead:
          </p>

          <Card className="p-4 bg-muted rounded mb-6">
            <pre className="text-sm overflow-x-auto">
              <code className="text-green-600"># .env file (NEVER commit this)</code><br/>
              <code>API_KEY=your_secret_api_key_here</code><br/>
              <code>DATABASE_URL=postgresql://user:pass@localhost:5432/db</code><br/>
              <br/>
              <code className="text-green-600"># In your application</code><br/>
              <code>const apiKey = process.env.API_KEY</code>
            </pre>
          </Card>

          <h3 className="text-xl font-cal mb-3">Git Security</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Protect your repositories from accidental key exposure:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <Code className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-cal text-lg mb-2">.gitignore Setup</h4>
              <pre className="text-xs bg-muted p-2 rounded">
                <code>
                  .env<br/>
                  .env.local<br/>
                  .env.production<br/>
                  config/secrets.yml<br/>
                  *.pem<br/>
                  *.key
                </code>
              </pre>
            </Card>
            
            <Card className="p-6">
              <Shield className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-cal text-lg mb-2">Pre-commit Hooks</h4>
              <p className="text-muted-foreground text-sm">
                Use tools like git-secrets or gitleaks to scan commits for potential secrets before they're pushed to your repository.
              </p>
            </Card>
          </div>

          <h2 className="text-2xl font-cal mb-4">Screen Sharing and Presentation Security</h2>

          <h3 className="text-xl font-cal mb-3">Pre-Demo Checklist</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Before sharing your screen during demos, tutorials, or meetings:
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm">Clear terminal history and close any terminals with sensitive commands</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm">Close all unnecessary applications and browser tabs</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm">Use a dedicated demo environment with test API keys</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm">Prepare code snippets with placeholder values beforehand</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm">Enable privacy protection tools like Blurby</span>
            </div>
          </div>

          <h3 className="text-xl font-cal mb-3">Demo Data Best Practices</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Create realistic but fake data for demonstrations:
          </p>

          <Card className="p-4 bg-muted rounded mb-6">
            <h4 className="font-cal mb-2">Example Demo Configuration</h4>
            <pre className="text-sm overflow-x-auto">
              <code className="text-green-600"># Demo environment (.env.demo)</code><br/>
              <code>API_KEY=demo_key_abc123_not_real</code><br/>
              <code>DATABASE_URL=postgresql://demo:password@localhost:5432/demo_db</code><br/>
              <code>STRIPE_KEY=pk_test_demo_key_for_presentations</code><br/>
              <code>AWS_ACCESS_KEY=AKIAIOSFODNN7EXAMPLE</code>
            </pre>
          </Card>

          <h2 className="text-2xl font-cal mb-4">API Key Rotation and Management</h2>

          <h3 className="text-xl font-cal mb-3">Regular Rotation Schedule</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Implement a regular key rotation schedule based on sensitivity:
          </p>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-cal mb-1 text-red-800 dark:text-red-200">Critical Keys (Monthly)</h4>
              <p className="text-muted-foreground text-sm">Payment processing, production databases, authentication services</p>
            </div>
            
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-cal mb-1 text-yellow-800 dark:text-yellow-200">Important Keys (Quarterly)</h4>
              <p className="text-muted-foreground text-sm">Third-party APIs, analytics services, cloud storage</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-cal mb-1 text-green-800 dark:text-green-200">Standard Keys (Annually)</h4>
              <p className="text-muted-foreground text-sm">Development tools, monitoring services, non-critical integrations</p>
            </div>
          </div>

          <h3 className="text-xl font-cal mb-3">Key Management Tools</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Use dedicated tools for secure key management:
          </p>

          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-1">
            <li><strong>HashiCorp Vault:</strong> Enterprise-grade secrets management</li>
            <li><strong>AWS Secrets Manager:</strong> Cloud-native secret storage and rotation</li>
            <li><strong>Azure Key Vault:</strong> Microsoft's key management service</li>
            <li><strong>1Password Developer Tools:</strong> Team-based secret sharing</li>
            <li><strong>Doppler:</strong> Developer-focused secrets management</li>
          </ul>

          <h2 className="text-2xl font-cal mb-4">Incident Response</h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            If you accidentally expose an API key, act quickly:
          </p>

          <Card className="p-6 border-orange-200 dark:border-orange-800 mb-6">
            <h4 className="font-cal text-lg mb-3 text-orange-800 dark:text-orange-200">Immediate Actions (Within 5 minutes)</h4>
            <ol className="text-orange-700 dark:text-orange-300 text-sm space-y-1 list-decimal list-inside">
              <li>Revoke or deactivate the exposed key immediately</li>
              <li>Generate a new key if needed for continued service</li>
              <li>Monitor for unusual activity in your service logs</li>
              <li>Change any related passwords or credentials</li>
              <li>Document the incident for future prevention</li>
            </ol>
          </Card>

          <h2 className="text-2xl font-cal mb-4">Automated Protection</h2>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            Manual processes are prone to human error. Implement automated protection wherever possible:
          </p>

          <Card className="p-8 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-4">
              <Key className="w-8 h-8 text-primary mt-1" />
              <div>
                <h3 className="text-2xl font-cal mb-4">AI-Powered Key Protection</h3>
                <p className="text-muted-foreground mb-6">
                  Tools like Blurby automatically detect and blur API keys, tokens, and other sensitive information in real-time during screen sharing, eliminating the risk of accidental exposure during presentations and demos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="https://chromewebstore.google.com/detail/olly-ai-agent-for-social/ofjpapfmglfjdhmadpegoeifocomaeje" target="_blank" rel="noopener noreferrer">
                      Get Blurby - $19
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-16 pt-8 border-t">
          <div className="flex items-center justify-between">
            <Link href="/blog" className="text-primary hover:underline">
              ← Back to Blog
            </Link>
            <div className="flex gap-4">
              <Link href="/blog/gdpr-compliance-screen-sharing" className="text-primary hover:underline text-sm">
                Next: GDPR Compliance →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}