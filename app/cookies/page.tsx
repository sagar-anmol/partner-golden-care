export default function CookiesPolicy() {
  return (
    <div className="bg-white min-h-[calc(100vh-4rem)] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-8 text-gray-600">
          {/* Introduction */}
          <div className="bg-gold-50 p-6 rounded-lg border border-gold-200">
            <p className="text-gray-900 font-semibold">
              This Cookie Policy explains how GoldenCare uses cookies and similar technologies on our website. We use cookies to enhance your browsing experience, analyze our traffic, and understand your preferences.
            </p>
          </div>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit a website. They help websites remember information about your visits, such as your preferences and login information. Cookies can be session-based (temporary) or persistent (stored until they expire or you delete them).
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Types of Cookies We Use</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2.1 Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function properly. They enable basic functions like navigation and access to secure areas. Without these cookies, the website may not work as intended.
                </p>
                <p className="mt-2 text-sm italic">Example: Session cookies, security tokens</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2.2 Performance Cookies</h3>
                <p>
                  These cookies help us understand how visitors interact with our website. They collect information about pages visited, time spent, errors encountered, and other metrics. This helps us improve our website&apos;s performance and user experience.
                </p>
                <p className="mt-2 text-sm italic">Example: Google Analytics, performance monitoring tools</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2.3 Functional Cookies</h3>
                <p>
                  These cookies remember your preferences and settings to provide a personalized experience. They enable features like saved preferences, language selection, and remembering login information.
                </p>
                <p className="mt-2 text-sm italic">Example: Theme preferences, language selection</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2.4 Marketing Cookies</h3>
                <p>
                  These cookies track your behavior to display targeted advertisements and marketing content. They help us understand which content is most relevant to you and measure the effectiveness of our marketing campaigns.
                </p>
                <p className="mt-2 text-sm italic">Example: Advertising trackers, conversion pixels</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Similar Technologies</h2>
            <p>
              Besides cookies, we may use other similar tracking technologies including:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>Web beacons and pixel tags to track page visits</li>
              <li>Local storage (localStorage, sessionStorage)</li>
              <li>Device fingerprinting for security purposes</li>
              <li>Server logs to track IP addresses and user agents</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
            <p>
              We may allow third-party service providers to place cookies on your device for analytics, advertising, and other purposes. These third parties have their own privacy policies governing their use of cookies.
            </p>
            <p className="mt-4">
              Common third-party cookie providers we work with include:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
              <li>Google Analytics for website analytics</li>
              <li>Social media platforms for sharing and tracking</li>
              <li>Advertising networks for targeted ads</li>
              <li>Payment processors for transaction security</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Your Cookie Preferences</h2>
            <div className="space-y-4">
              <p>
                You have the right to control cookies on your device. Here&apos;s how:
              </p>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">5.1 Browser Settings</h3>
                <p>
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                  <li>Accept all cookies</li>
                  <li>Reject all cookies</li>
                  <li>Choose which cookies to accept or reject</li>
                  <li>Delete cookies after browsing</li>
                  <li>Manage cookie preferences per website</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">5.2 Do Not Track (DNT)</h3>
                <p>
                  Some browsers include a &quot;Do Not Track&quot; feature. We respect DNT signals and will limit tracking when DNT is enabled.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">5.3 Cookie Consent</h3>
                <p>
                  When you first visit our website, you will be presented with a cookie consent banner. You can accept all cookies or customize your preferences.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Impact of Rejecting Cookies</h2>
            <p>
              While you can reject cookies, please note that:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>Essential cookies cannot be rejected as they are necessary for website functionality</li>
              <li>Rejecting performance cookies may affect our ability to improve the website</li>
              <li>Rejecting functional cookies may limit personalization features</li>
              <li>Rejecting marketing cookies may result in less relevant advertisements</li>
              <li>You may not be able to access certain features or services</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
            <p>
              Cookies are retained for varying periods depending on their purpose:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>Session cookies: Deleted when you close your browser</li>
              <li>Persistent cookies: Retained for 1-2 years typically</li>
              <li>Analytics cookies: Retained for up to 2 years</li>
              <li>Marketing cookies: Retained per provider&apos;s policy</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Users</h2>
            <p>
              If you&apos;re in the European Union or other jurisdictions with cookie regulations, we comply with applicable laws including:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>GDPR (General Data Protection Regulation)</li>
              <li>ePrivacy Directive</li>
              <li>CCPA (California Consumer Privacy Act)</li>
              <li>Other regional privacy laws</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy periodically to reflect changes in our practices or applicable laws. We will notify you of significant changes by posting the updated policy on our website.
            </p>
          </section>

          {/* Contact Section */}
          <section className="bg-gold-50 p-6 rounded-lg border border-gold-200 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
            <p>
              If you have questions about our use of cookies or this Cookie Policy, please contact us at:
            </p>
            <div className="mt-4 space-y-2">
              <p><strong>Email:</strong> privacy@goldencare.in</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Address:</strong> New Delhi, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
