import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-6 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3 text-center">Legal</p>
          <h1 className="font-serif text-3xl md:text-4xl gold-text text-center mb-2">Terms & Conditions</h1>
          <p className="font-sans text-xs text-muted-foreground text-center mb-10">Last updated: March 28, 2026</p>

          <div className="space-y-8 font-sans text-sm text-foreground/80 leading-relaxed">
            <section>
              <h2 className="font-serif text-lg text-gold mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using the Zikhra Interiors website ("Site") and our interior design services ("Services"), you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our Site or Services. These terms apply to all visitors, clients, and users of the Site.</p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">2. Company Information</h2>
              <p>Zikhra Interiors is an interior design firm based in Jubilee Hills, Hyderabad, Telangana 500033, India. For inquiries, contact us at <a href="mailto:zikhraofficial@gmail.com" className="text-gold hover:underline">zikhraofficial@gmail.com</a> or call <a href="tel:+919886285028" className="text-gold hover:underline">+91 98862 85028</a>.</p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">3. Services</h2>
              <p>Zikhra Interiors provides residential and commercial interior design services, including but not limited to full home interiors, modular kitchen design, wardrobe solutions, renovation services, and design consultation. All services are subject to availability and may be modified at our discretion.</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                <li>Design consultations and 3D visualizations</li>
                <li>Material selection and procurement</li>
                <li>Project management and execution</li>
                <li>Post-installation support and warranty services</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">4. Quotations & Pricing</h2>
              <p>All quotations provided are valid for 30 days from the date of issue unless otherwise specified. Prices are subject to change based on material costs, design modifications, and scope changes. A detailed cost breakdown will be provided before project commencement. Any changes requested after approval may incur additional charges.</p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">5. Payment Terms</h2>
              <p>Payment schedules are outlined in individual project agreements. Typically, a booking amount is required to initiate work, with milestone-based payments throughout the project. Final payment is due upon project completion and handover. Late payments may attract interest as specified in the project agreement.</p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">6. Project Timeline</h2>
              <p>Estimated project timelines are provided in good faith but may vary due to unforeseen circumstances including material availability, weather conditions, regulatory approvals, or client-requested changes. Zikhra Interiors will communicate any significant delays promptly.</p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">7. Intellectual Property</h2>
              <p>All design concepts, drawings, 3D renders, and creative materials produced by Zikhra Interiors remain our intellectual property until full payment is received. Unauthorized reproduction, distribution, or use of our designs is strictly prohibited. Upon full payment, design rights for the specific project transfer to the client.</p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">8. Warranty & Guarantee</h2>
              <p>Zikhra Interiors provides a warranty on workmanship as specified in individual project agreements. Material warranties are subject to manufacturer terms. The warranty does not cover damage caused by misuse, negligence, natural wear, or unauthorized modifications.</p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">9. Cancellation & Refund</h2>
              <p>Cancellation policies are outlined in individual project agreements. The booking amount is generally non-refundable. Refunds for work not yet commenced will be processed within 15 business days. Materials already procured or customized cannot be refunded.</p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">10. Client Responsibilities</h2>
              <p>Clients are responsible for providing accurate information, ensuring site access for our team, obtaining necessary permissions from building management or authorities, and making timely decisions to avoid project delays.</p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">11. Limitation of Liability</h2>
              <p>Zikhra Interiors shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the total project value. We are not responsible for delays caused by force majeure events.</p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">12. Website Usage</h2>
              <p>The content on this website is for general information purposes only. While we strive to keep information current, we make no warranties about completeness, accuracy, or reliability. Project images may differ from actual results due to lighting, photography, and display variations.</p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">13. Governing Law</h2>
              <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.</p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">14. Changes to Terms</h2>
              <p>Zikhra Interiors reserves the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our Site after changes constitutes acceptance of the new terms.</p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-gold mb-3">15. Contact</h2>
              <p>For questions about these Terms & Conditions, contact us at:</p>
              <div className="mt-2 p-4 rounded-xl bg-card border border-border/30 space-y-1">
                <p className="text-foreground font-medium">Zikhra Interiors</p>
                <p className="text-muted-foreground">Jubilee Hills, Hyderabad, Telangana 500033</p>
                <p className="text-muted-foreground">Email: <a href="mailto:zikhraofficial@gmail.com" className="text-gold hover:underline">zikhraofficial@gmail.com</a></p>
                <p className="text-muted-foreground">Phone: <a href="tel:+919886285028" className="text-gold hover:underline">+91 98862 85028</a></p>
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

export default Terms;
