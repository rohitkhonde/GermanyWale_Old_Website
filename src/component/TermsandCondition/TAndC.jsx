import React from "react";
import "./TandC.css";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

const TAndC = () => {
  return (
    <div className="parp-container" style={{ fontFamily: "Gilroy" }}>
      {/* Hero Section */}
      <div className="hero-section-parptc">
        <h1
          className="hero-text  text-2xl sm:text-4xl"
          style={{ fontFamily: "Gilroy", color: "white" }}
        >
          Terms and Conditions
        </h1>
      </div>

      <div className="max-w-4xl mx-auto p-6 text-left">
        <Tabs defaultValue="terms" className="w-full">
          <TabsList className="border-b text-center align-center w-full justify-start rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger
              value="terms"
              className="border-b-2 rounded-none px-6 py-2 text-center data-[state=active]:border-orange-500 data-[state=active]:text-orange-500 data-[state=active]:shadow-none"
            >
              Terms and Conditions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="terms" className="mt-8 text-left">
            {/* <h1 className="text-3xl font-semibold text-orange-500 mb-8 text-center">
              Terms and Conditions
            </h1> */}

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4 text-left">
                  TERMS OF USE
                </h2>
                <p className="text-gray-600 leading-relaxed text-left">
                  This document is an electronic record in terms of the
                  Information Technology Act, 2000, and applicable rules, as
                  amended from time to time. This electronic record is generated
                  by a computer system and does not require physical or digital
                  signatures. This document is published in accordance with Rule
                  3(1) of the Information Technology (Intermediaries Guidelines)
                  Rules, 2011, which mandates the publication of rules,
                  regulations, privacy policy, and Terms of Use for access or
                  usage of the domain name GermanyWale.com (the "Website"),
                  including related mobile sites and mobile applications
                  (collectively, the "Platform"). The Platform is owned and
                  operated by GermanyWale, a company incorporated under the
                  Companies Act, 1956, with its registered office at (Enter
                  Address) (hereinafter referred to as "Platform Owner", "we",
                  "us", or "our"). By accessing or using the Platform and its
                  services, tools, or products (collectively, the "Services"),
                  you agree to be bound by the following terms and conditions
                  ("Terms of Use"), along with applicable policies incorporated
                  herein by reference. If you transact on the Platform, you will
                  be subject to the policies applicable to such transactions.
                  Your continued use of the Platform constitutes your binding
                  obligations with the Platform Owner.
                </p>
              </section>

              {/* <section>
                <h2 className="text-xl font-semibold mb-4 text-left">
                  Use of Services
                </h2>
                <p className="text-gray-600 leading-relaxed text-left"></p>
              </section> */}

              <section>
                <h2 className="text-xl font-semibold mb-4 text-left">
                  1. User Agreement{" "}
                </h2>
                <p className="text-gray-600 leading-relaxed text-left">
                  By accessing, browsing, or otherwise using the Platform, you
                  acknowledge and agree to abide by these Terms of Use. If you
                  do not agree with these Terms, please refrain from using the
                  Platform.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-left">
                  2. Registration and Account{" "}
                </h2>
                <p className="text-gray-600 leading-relaxed text-left">
                  Responsibility To access certain features of the Platform, you
                  may need to register and provide accurate, complete, and
                  up-to-date information. You are solely responsible for all
                  activities conducted through your registered account.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-left">
                  3. Accuracy of Information{" "}
                </h2>
                <p className="text-gray-600 leading-relaxed text-left">
                  We do not warrant the accuracy, completeness, or timeliness of
                  the information provided on the Platform. The information may
                  contain errors, and we expressly disclaim liability for any
                  inaccuracies to the fullest extent permitted by law.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-left">
                  4. Use of the Platform{" "}
                </h2>
                <p className="text-gray-600 leading-relaxed text-left">
                  Your use of the Platform and Services is entirely at your own
                  risk. You are responsible for ensuring that the Services meet
                  your specific requirements. Unauthorized use of the Platform
                  may result in legal action against you.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-left">
                  5. Intellectual Property Rights{" "}
                </h2>
                <p className="text-gray-600 leading-relaxed text-left">
                  All content on the Platform, including design, layout, text,
                  graphics, and images, is proprietary and protected by
                  intellectual property laws. You shall not claim any rights,
                  title, or interest in such content.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-left">
                  6. Charges and Payments
                </h2>
                <p className="text-gray-600 leading-relaxed text-left">
                  You agree to pay all applicable charges for availing of the
                  Services. We reserve the right to modify pricing without prior
                  notice.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-left">
                  7. Prohibited Activities
                </h2>
                <p className="text-gray-600 leading-relaxed text-left">
                  You agree not to use the Platform for any unlawful, illegal,
                  or prohibited activities under Indian or applicable local
                  laws.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-4 text-left">
                  8. Third-Party Links{" "}
                </h2>
                <p className="text-gray-600 leading-relaxed text-left">
                  The Platform may contain links to third-party websites for
                  additional information. Your access to these websites is
                  subject to their terms and policies, and we bear no
                  responsibility for any consequences arising from such access.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-4 text-left">
                  9. Indemnification
                </h2>
                <p className="text-gray-600 leading-relaxed text-left">
                  You shall indemnify and hold harmless GermanyWale, its
                  affiliates, and employees from any claims, damages, or
                  penalties arising from your breach of these Terms or violation
                  of any law.{" "}
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-4 text-left">
                  10. Limitation of Liability
                </h2>
                <p className="text-gray-600 leading-relaxed text-left">
                  Under no circumstances shall GermanyWale be liable for
                  indirect, incidental, or consequential damages arising from
                  the use of the Platform. Our total liability shall not exceed
                  the amount paid by you for the Services or Rs. 100, whichever
                  is lower.{" "}
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-4 text-left">
                  11. Force Majeure
                </h2>
                <p className="text-gray-600 leading-relaxed text-left">
                  Neither party shall be liable for failure to perform any
                  obligation due to unforeseen events beyond reasonable control,
                  such as natural disasters, war, or government restrictions.{" "}
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-4 text-left">
                  12. Governing Law & Jurisdiction
                </h2>
                <p className="text-gray-600 leading-relaxed text-left">
                  These Terms of Use shall be governed by the laws of India. Any
                  disputes shall be subject to the exclusive jurisdiction of the
                  courts in India.{" "}
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-4 text-left">
                  13. Contact Information
                </h2>
                <p className="text-gray-600 leading-relaxed text-left">
                  For any concerns or queries regarding these Terms of Use,
                  please contact us through the details provided on our website.
                  By using GermanyWale.com, you acknowledge that you have read,
                  understood, and agree to these Terms of Use.{" "}
                </p>
              </section>
              <section>
                {/* <h2 className="text-xl font-semibold mb-4 text-left">
                  13. Contact Information
                </h2> */}
                <p
                  className="text-lg font-semibold mb-2 sm:mb-4 bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] bg-clip-text text-transparent"
                  style={{ fontFamily: "Gilroy" }}
                >
                  By using GermanyWale.com, you acknowledge that you have read,
                  understood, and agree to these Terms of Use.
                </p>
              </section>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TAndC;
