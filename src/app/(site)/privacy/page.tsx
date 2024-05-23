export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col gap-8 max-w-3xl mx-auto">
        <div className="flex flex-col gap-4">
          <p className="text-base text-center mb-0">Updated May 23, 2024</p>
          <p className="text-4xl font-semibold text-center">Privacy Policy</p>
          <p className="text-left text-base">
            At JustinBachtell.com, I value your privacy and am committed to
            protecting your personal information. This Privacy Policy outlines
            how I collect, use, store, and disclose your personal information
            when you use my web/native application.
          </p>
          <p className="text-left text-base">
            By using JustinBachtell.com, you consent to the collection and use
            of your personal information in accordance with this Privacy Policy.
          </p>
        </div>
        <ul className="mt-4">
          <li className="cursor-pointer py-6">
            <div className="flex items-center justify-between">
              <h4 className="mb-0 font-bold text-gray-800">
                Information I Collect
              </h4>
            </div>
            <div className="flex flex-col gap-4">
              {" "}
              <p className="pt-4">
                When you use my web/native application, I collect the following
                types of personal information:
              </p>
              <p className="px-6">
                a. Information provided by your authentication provider: When
                you log in using Clerk authentication, we collect your first and
                last name, email address, an avatar if you have one uploaded,
                the date of your last sign-in, and any additional information
                you choose to share, such as phone numbers and connected social
                media accounts.
              </p>
              <p className="px-6">
                b. Information collected by Stripe: When you make payments or
                subscribe to my services through Stripe, we collect information
                including your email address, tax location, tax status, payment
                method, and the last time you were active on my web/native
                application.
              </p>{" "}
            </div>
          </li>
          <li className="cursor-pointer py-6">
            <div className="flex items-center justify-between">
              <h4 className="mb-0 font-bold  text-gray-800">
                How I Use Your Information
              </h4>
            </div>
            <div className="flex flex-col gap-4">
              {" "}
              <p className="pt-4">
                I use personal information collected for the following purposes:
              </p>
              <p className="px-6">
                a. To provide and improve my services: We use your information
                to deliver the web/native application&apos;s features and
                functionality, enhance user experience, and improve the overall
                quality of my services.
              </p>
              <p className="px-6">
                b. To process payments and manage subscriptions: We use the
                information collected by Stripe to process your payments and
                manage your subscriptions on my web/native application.
              </p>
              <p className="px-6">
                c. To communicate with you: We may use your contact information
                to send you important updates, respond to your inquiries, or
                provide support.
              </p>{" "}
            </div>
          </li>
          <li className="cursor-pointer py-6">
            <div className="flex items-center justify-between">
              <h4 className="mb-0 font-bold text-gray-800">
                Data Storage and Security
              </h4>
            </div>
            <div className="flex flex-col gap-4">
              {" "}
              <p className="pt-4">
                I take the security of your personal information seriously and
                implement appropriate technical and organizational measures to
                protect it from unauthorized access, disclosure, alteration, or
                destruction. However, no method of transmission or storage is
                entirely secure, and I cannot guarantee absolute security.
              </p>
            </div>
          </li>
          <li className="cursor-pointer py-6">
            <div className="flex items-center justify-between">
              <h4 className="mb-0 font-bold  text-gray-800">
                Disclosure of Your Information
              </h4>
            </div>
            <div className="flex flex-col gap-4">
              {" "}
              <p className="pt-4">
                I do not sell, rent, or share your personal information with
                third parties, except when required by law, or when necessary to
                protect my rights or property, enforce my policies, or protect
                the safety of my users or the public.
              </p>
            </div>
          </li>
          <li className="cursor-pointer py-6">
            <div className="flex items-center justify-between">
              <h4 className="mb-0 font-bold  text-gray-800">
                Changes to This Privacy Policy
              </h4>
            </div>
            <div className="flex flex-col gap-4">
              {" "}
              <p className="pt-4">
                I may update this Privacy Policy from time to time to reflect
                changes in my practices or applicable laws. I will notify you of
                any material changes by posting the updated policy on my
                web/native application, and we encourage you to review it
                periodically to stay informed about my privacy practices.
              </p>
            </div>
          </li>
          <li className="cursor-pointer py-6">
            <div className="flex items-center justify-between">
              <h4 className="mb-0 font-bold  text-gray-800">
                Contact Information
              </h4>
            </div>
            <div className="flex flex-col gap-4">
              {" "}
              <p className="pt-4">
                If you have any questions or concerns about this Privacy Policy
                or my privacy practices, please contact Justin Bachtell, the
                publisher and devloper of JustinBachtell.com.
              </p>
            </div>
          </li>
        </ul>
        <p className="mt-8">
          By using the JustinBachtell.com, you acknowledge that you have read,
          understood, and agreed to be bound by this Privacy Policy.
        </p>
      </div>
    </div>
  );
}
