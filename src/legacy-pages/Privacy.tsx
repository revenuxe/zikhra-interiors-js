import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-6 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3 text-center">Legal</p>
          <h1 className="font-serif text-3xl md:text-4xl gold-text text-center mb-2">Privacy Policy</h1>
          <p className="font-sans text-xs text-muted-foreground text-center mb-10">Last updated: March 28, 2026</p>

          <div className="space-y-8 font-sans text-sm text-foreground/80 leading-relaxed">
            <section>
              <h2 className="font-serif text-lg text-gold mb-3">1. Introduction</h2>
              <p>Zikhra Interiors ("we," "our," or "us") is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website, use our services, or interact with us. We comply with applicable Indian data protection laws, including the Information Technology Act, 2000, and the Digital Personal Data Protection Act, 2023.</p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">2. Information We Collect</h2>
              <p className="mb-2">We collect the following types of information:</p>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium text-foreground mb-1">Personal Information (provided by you):</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Full name</li>
                    <li>Phone number</li>
                    <li>Email address</li>
                    <li>Property address (for project purposes)</li>
                    <li>Project requirements and preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Automatically Collected Information:</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Device type and browser information</li>
                    <li>IP address and approximate location</li>
                    <li>Pages visited and interaction data</li>
                    <li>Referral source</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">3. How We Collect Information</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Contact forms and consultation booking forms on our website</li>
                <li>WhatsApp conversations initiated through our website</li>
                <li>Phone calls and email communications</li>
                <li>In-person meetings and site visits</li>
                <li>Cookies and similar tracking technologies on our website</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">4. How We Use Your Information</h2>
              <p className="mb-2">We use your personal information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>To respond to your inquiries and provide consultations</li>
                <li>To create and deliver interior design proposals</li>
                <li>To manage and execute your interior design project</li>
                <li>To communicate project updates and milestones</li>
                <li>To send relevant offers, updates, and newsletters (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">5. Data Storage & Security</h2>
              <p>Your data is stored securely using industry-standard encryption and security measures. We use Supabase, a secure cloud platform, for data storage with row-level security policies. Access to personal data is restricted to authorized personnel only. We implement the following security measures:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                <li>SSL/TLS encryption for data in transit</li>
                <li>Encrypted database storage</li>
                <li>Role-based access controls</li>
                <li>Regular security audits and monitoring</li>
                <li>Secure authentication for admin access</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">6. Data Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your data only in the following circumstances:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                <li>With trusted vendors and contractors involved in your project (e.g., material suppliers, craftsmen)</li>
                <li>With service providers who assist our operations (e.g., cloud hosting, analytics)</li>
                <li>When required by law, regulation, or legal process</li>
                <li>To protect our rights, property, or safety</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">7. Cookies & Tracking</h2>
              <p>Our website may use cookies and similar technologies to enhance your browsing experience. These help us understand how visitors interact with our site and improve our services. You can control cookie preferences through your browser settings. Disabling cookies may affect some website functionality.</p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">8. Your Rights</h2>
              <p className="mb-2">Under applicable data protection laws, you have the right to:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li><strong className="text-foreground">Access:</strong> Request a copy of your personal data</li>
                <li><strong className="text-foreground">Correction:</strong> Request correction of inaccurate data</li>
                <li><strong className="text-foreground">Deletion:</strong> Request deletion of your personal data</li>
                <li><strong className="text-foreground">Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
                <li><strong className="text-foreground">Portability:</strong> Request your data in a portable format</li>
                <li><strong className="text-foreground">Grievance:</strong> Lodge a complaint with the relevant data protection authority</li>
              </ul>
              <p className="mt-2">To exercise any of these rights, contact us at <a href="mailto:zikhraofficial@gmail.com" className="text-gold hover:underline">zikhraofficial@gmail.com</a>.</p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">9. Data Retention</h2>
              <p>We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Project-related data is retained for a minimum of 5 years after project completion for warranty and legal purposes. Marketing data is retained until you withdraw consent.</p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">10. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites (e.g., WhatsApp, social media platforms). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.</p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">11. Children's Privacy</h2>
              <p>Our services and website are not directed at individuals under 18 years of age. We do not knowingly collect personal information from minors. If we become aware of such collection, we will take steps to delete the information promptly.</p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">12. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated version will be posted on this page with a revised date. We encourage you to review this policy periodically.</p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">13. Grievance Officer</h2>
              <p>In accordance with the Information Technology Act, 2000, the name and contact details of the Grievance Officer are:</p>
              <div className="mt-2 p-4 rounded-xl bg-card border border-border/30 space-y-1">
                <p className="text-foreground font-medium">Zikhra Interiors — Grievance Officer</p>
                <p className="text-muted-foreground">Jubilee Hills, Hyderabad, Telangana 500033</p>
                <p className="text-muted-foreground">Email: <a href="mailto:zikhraofficial@gmail.com" className="text-gold hover:underline">zikhraofficial@gmail.com</a></p>
                <p className="text-muted-foreground">Phone: <a href="tel:+919886285028" className="text-gold hover:underline">+91 98862 85028</a></p>
                <p className="text-muted-foreground text-xs mt-1">Grievances will be addressed within 30 days of receipt.</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Privacy;
