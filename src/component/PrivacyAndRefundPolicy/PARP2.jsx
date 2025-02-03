import React from "react";
import "./PARP.css";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

const PARP2 = () => {
  return (
    <div className="parp-container">
      {/* Hero Section */}
      <div className="hero-section-parp">
        <h1 className="hero-text text-2xl sm:text-4xl">Privacy Policy </h1>
      </div>

      <div className="max-w-4xl mx-auto p-6 text-left">
        <Tabs defaultValue="privacy" className="w-full">
          <TabsList className="border-b w-full justify-start rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger
              value="privacy"
              className="border-b-2 rounded-none px-6 py-2 text-center  data-[state=active]:border-orange-500 data-[state=active]:text-orange-500 data-[state=active]:shadow-none"
            >
              Privacy Policy
            </TabsTrigger>
            <TabsTrigger
              value="refund"
              className="border-b-2 border-transparent rounded-none px-6 py-2 text-base data-[state=active]:border-orange-500 data-[state=active]:text-orange-500 data-[state=active]:shadow-none"
            >
              Refund Policy
            </TabsTrigger>
          </TabsList>

          <TabsContent value="privacy" className="mt-8 text-left">
            <h1 className="text-3xl font-semibold text-orange-500 mb-8 text-left">
              Privacy Policy
            </h1>

            <div className="mb-8">
              <h2 className="text-lg font-medium mb-4 text-left">
                Table of Contents
              </h2>
              <nav className="space-y-2">
                {[
                  { id: "A", text: "Why we collect Personal Information" },
                  {
                    id: "B",
                    text: "What information do we collect and how do we use it",
                  },
                  { id: "C", text: "Information Sharing" },
                  { id: "D", text: "How long do we retain user data" },
                  { id: "E", text: "Grievances" },
                  { id: "F", text: "Disclaimer" },
                  { id: "G", text: "Data Deletion" },
                  { id: "H", text: "Grievance Redressal" },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#section-${item.id}`}
                    className="block text-orange-500 hover:text-orange-600"
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.getElementById(
                        `section-${item.id}`
                      );
                      if (target) {
                        const offset = 80; // Adjust according to navbar height
                        const targetPosition =
                          target.getBoundingClientRect().top +
                          window.scrollY -
                          offset;
                        window.scrollTo({
                          top: targetPosition,
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    {item.id}. {item.text}
                  </a>
                ))}
              </nav>
            </div>

            <div className="space-y-8">
              <section id="section-A">
                <h2 className="text-xl font-semibold mb-4 text-left">
                  A. Why Do We Collect Personal Information?
                </h2>
                <p className="text-gray-600 leading-relaxed text-left">
                  We collect personal information to identify you, provide the
                  necessary details to serve you better, and enhance your career
                  development experience.
                </p>
              </section>

              <section id="section-B">
                <h2 className="text-xl font-semibold mb-4 text-left">
                  B. What Information Do We Collect and How Do We Use It?
                </h2>
                <h3 className="font-bold mb-2 text-left">
                  Information You Provide
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-left">
                  We collect personal details to deliver better services. When
                  you register for certain features on our website, we may
                  request your name, email address, and other relevant
                  information. Additionally, we may ask for these details when
                  you participate in promotions, contests, or special offers
                  from us or our partners.
                  <br />
                  <br />
                  If you use a paid feature, we collect payment details such as
                  credit card information or payment account details to process
                  transactions securely. <br />
                  <br />
                  For our paid services, we track the web pages and content you
                  access, storing this data on our servers. This helps us
                  monitor your progress, ensuring a seamless and personalized
                  experience by identifying completed and pending items
                </p>
                <h3 className="font-bold mb-2 text-left">Cookies: </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-left">
                  We use cookies—small data files with unique identifiers—to
                  recognize your browser and enhance your browsing experience.
                  These cookies help track your preferences, streamline login
                  processes, and analyze user trends to improve our services. By
                  understanding user behavior, we can offer more relevant
                  content and enhance areas of high interest.
                  <br />
                  <br /> Most browsers accept cookies by default, but you can
                  modify your settings to block or notify you when cookies are
                  being used. However, disabling cookies may impact the
                  functionality of certain features on our website.
                </p>
                <h3 className="font-bold mb-2 text-left"> Log Information: </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-left">
                  When you visit our website, our servers automatically record
                  certain data, including your web request, IP address, browser
                  type and language, date and time of access, and cookies that
                  may identify your browser.
                </p>
                <h3 className="font-bold mb-2 text-left">
                  {" "}
                  User Communications:{" "}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-left">
                  If you contact us via email or other channels, we may retain
                  your messages to address inquiries, improve our services, and
                  respond to your requests.
                </p>
                <h3 className="font-bold mb-2 text-left">Links:</h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-left">
                  Our website may include links to external sites. While we
                  track link engagement to enhance content, we are not
                  responsible for the privacy practices of third-party websites.
                  We encourage users to review their privacy policies.
                </p>
                <h3 className="font-bold mb-2 text-left"> Alerts :</h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-left">
                  We may notify you via email, SMS, call, or WhatsApp about new
                  services or other relevant information.
                </p>
                <h3 className="font-bold mb-2 text-left"> Public Forums</h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-left">
                  Any personal information shared in discussion forums,
                  comments, or other public sections of our website is
                  accessible to all users and shared at your own risk.
                </p>
                <h3 className="font-bold mb-2 text-left"> Data Security </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-left">
                  For payment-related transactions, credit card details are
                  securely transmitted to our bank for processing. We do not
                  share credit card data or personal information with
                  third-party marketers. Our website implements security
                  measures to protect user data, and we expect third-party
                  partners to follow similar security practices. However, we are
                  not liable for unauthorized access, misuse, or harm resulting
                  from actions beyond our control. Users are responsible for
                  securing their own devices and information.
                </p>
              </section>

              <section id="section-C">
                <h2 className="text-xl font-semibold mb-4">
                  C. Information Sharing
                </h2>
                <p className="text-gray-600 leading-relaxed mb-2">
                  We do not share personal information with third parties except
                  as required by law or to provide essential services.
                </p>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>
                    {" "}
                    Compliance with legal obligations or government requests.
                  </li>
                  <li>
                    Enforcement of our Terms of Use, including investigating
                    potential violations.
                  </li>
                  <li>
                    Detecting and preventing fraud, security threats, or
                    technical issues.
                  </li>
                  <li>
                    Protecting the rights, property, or safety of our company,
                    users, or the public.
                  </li>
                  <li>
                    Sharing aggregated, non-personal data for analytics and
                    service improvements.
                  </li>
                  <li>
                    Providing customer support and service-related
                    communications, even if you have opted for DND/DNC/NCPR
                    services, for up to 365 days post-registration.
                  </li>
                </ul>
              </section>

              <section id="section-D">
                <h2 className="text-xl font-semibold mb-4">
                  D. Data Retention
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We retain user data as necessary to fulfill service
                  requirements. In some cases, third-party providers assist with
                  hosting and processing, and we implement strict contractual
                  protections to ensure data security and limited use.
                </p>
              </section>

              <section id="section-E">
                <h2 className="text-xl font-semibold mb-4">E. Grievances</h2>
                <p className="text-gray-600 leading-relaxed">
                  If You have any grievances as to the usage of any of Your
                  personal information or any other privacy concerns, you can
                  contact the Grievance Officer, Rohit Khonde whose details are
                  provided below: rohit@germanywale.com
                </p>
                <h3 className="font-bold mb-2 text-left"> Contact us </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-left">
                  If there are any questions regarding this privacy policy you
                  may contact us by writing to us at: rohit@germanywale.com
                </p>
              </section>

              <section id="section-F">
                <h2 className="text-xl font-semibold mb-4">F. Disclaimer</h2>
                <p className="text-gray-600 leading-relaxed">
                  The information contained in this website is for general
                  information purposes only. The information is provided by
                  Germanywale and while we endeavor to keep the information up
                  to date and correct, we make no representations or warranties
                  of any kind, express or implied, about the completeness,
                  accuracy, reliability, suitability or availability with
                  respect to the website or the information, products, services,
                  or related graphics contained on the website for any purpose.
                  Any reliance you place on such information is therefore
                  strictly at your own risk.
                  <br />
                  <br /> In no event will we be liable for any loss or damage
                  including without limitation, indirect or consequential loss
                  or damage, or any loss or damage whatsoever arising from loss
                  of data or profits arise out of, or in connection with, the
                  use of this website.
                  <br />
                  <br />
                  Through this website/ you are able to link to other websites
                  which are not under the control of Germanywale. We have no
                  control over the nature, content and availability of those
                  sites. The inclusion of any links does not necessarily imply a
                  recommendation or endorse the views expressed within them.
                  <br />
                  <br />
                  Every effort is made to keep the website up and running
                  smoothly. However, Germanywale takes no responsibility for,
                  and will not be liable for, the website being temporarily
                  unavailable due to technical issues beyond our control.
                </p>
              </section>

              <section id="section-G">
                <h2 className="text-xl font-semibold mb-4">G. Data Deletion</h2>
                <p className="text-gray-600 leading-relaxed">
                  You can send your data deletion request to us through email.
                  In order to get your data deleted from our servers, send an
                  email to rohit@germanywale.com with a subject "Data Deletion
                  "Your Email ID".
                </p>
              </section>

              <section id="section-H">
                <h2 className="text-xl font-semibold mb-4">
                  H. Grievance Redressal
                </h2>
                <ol className="list-decimal pl-6 text-gray-600">
                  <li>
                    In compliance with the provisions of the Information and
                    Technology Act, 2005 ("IT Act"), we have appointed a
                    Grievance Officer to address your concerns pertaining to the
                    usage of your user data. You can contact the officer,
                    <span className="pl-2 bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent font-medium">
                      rohit@germanywale.com
                    </span>
                    .
                  </li>
                  <li>
                    In the event you have any complaints or concerns regarding
                    the usage of your user data, you may write to us
                    electronically at
                    <span className="pl-2 bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent font-medium">
                      rohit@germanywale.com
                    </span>
                    , or send a letter to us at:
                    <br />
                    Germanywale,
                    <br />
                    Neckarstrasse 44, 64625-Bensheim, Hessen,
                    <br />
                    Germany
                  </li>
                  <li>
                    Within 24 (twenty-four) hours of the receipt of your email,
                    the Grievance Officer will acknowledge your email, and shall
                    dispose of the same within 15 (fifteen) days of the receipt
                    of your email, upon conducting hearings and discussions.
                  </li>
                </ol>

                <p className="mt-4 font-bold">
                  I. Company Details <br />
                  Headquarter: Germanywale <br />
                  Neckarstrasse 44, 64625-Bensheim, Hessen, Germany <br />
                  GSTIN: 27AALPD9631P1Z3
                </p>
              </section>
            </div>
          </TabsContent>

          <TabsContent value="refund" className="text-left">
            <div className="mt-8">
              <p className="mt-4 text-gray-600">
                At Germanywale we are committed to providing high-quality
                education consultancy services. Please note that all payments
                made for our services are non-refundable under any
                circumstances.
              </p>
              <h2 className="mt-6 text-xl font-semibold">
                1. No Refund Policy
              </h2>
              <p className="text-gray-600 mt-3">
                Once a payment is made, it is final and non-refundable.
              </p>
              <p className="text-gray-600">
                We do not offer refunds for cancellations, unused services, or
                change of mind.
              </p>
              <p className="text-gray-600">
                If you discontinue our services before completion, no partial or
                prorated refunds will be issued.
              </p>

              <h2 className="mt-6 text-xl font-semibold">
                2. Payment Responsibility
              </h2>
              <p className="text-gray-600 mt-3">
                Customers are responsible for reviewing service details before
                making a payment.
              </p>
              <p className="text-gray-600">
                Any disputes or concerns must be addressed before proceeding
                with payment.
              </p>

              <h2 className="mt-6 text-xl font-semibold">3. Exceptions</h2>
              <p className="text-gray-600 mt-3">
                We do not provide refunds except in cases of duplicate
                transactions or billing errors. In such cases, please contact us
                at dheerajdey@germanywale.com within 2 days for resolution.
              </p>

              <h2 className="mt-6 text-xl font-semibold">4. Contact Us</h2>
              <p className="text-gray-600 mt-3">
                For any questions regarding our payment policy, please reach out
                to us at:
              </p>
              <p className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-semibold">
                📧 saurabh@germanywale.com | 📞 [+91-8484977234] | 📍 Hessen,
                Germany
              </p>

              <p className="mt-6 font-semibold text-gray-600">
                By using our services and making a payment, you acknowledge and
                agree to this No Refund Policy.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PARP2;
