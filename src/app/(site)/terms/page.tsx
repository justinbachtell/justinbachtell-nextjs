export default function TermsPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col gap-8 max-w-3xl mx-auto">
        <div className="flex flex-col gap-4">
          <p className="text-base text-center mb-0">Updated May 23, 2024</p>
          <p className="text-4xl font-semibold text-center">
            Terms & Conditions
          </p>
          <p className="text-left text-base">
            Please read these Terms of Use carefully before using
            JustinBachtell.com. By accessing or using my web/native application,
            you agree to be bound by these Terms of Use. If you do not agree
            with these terms, please do not use the web/native application.
          </p>
        </div>
        <ul className="mt-4">
          <li className="cursor-pointer py-6">
            <div className="flex items-center justify-between">
              <h4 className="mb-0 font-bold text-gray-800">Copyright Notice</h4>
            </div>
            <div className="flex flex-col gap-4">
              {" "}
              <p className="pt-4">
                All content on JustinBachtell.com, including but not limited to
                text, graphics, logos, designs, images, and software, is the
                property of Justin Bachtell and is protected by international
                copyright laws. Unauthorized copying, reproduction,
                distribution, modification, or any other use of the content
                without express written permission from the copyright holder is
                strictly prohibited.
              </p>{" "}
            </div>
          </li>
          <li className="cursor-pointer py-6">
            <div className="flex items-center justify-between">
              <h4 className="mb-0 font-bold text-gray-800">
                Open Source Content
              </h4>
            </div>
            <div className="flex flex-col gap-4">
              {" "}
              <p className="pt-4">
                Any open source content available on my web/native application
                will be clearly labeled as such. You may use, modify, and
                distribute open source content in accordance with the respective
                open source licenses. However, please note that I do not provide
                any warranties or guarantees regarding the accuracy,
                reliability, or suitability of the open source content.
              </p>{" "}
            </div>
          </li>
          <li className="cursor-pointer py-6">
            <div className="flex items-center justify-between">
              <h4 className="mb-0 font-bold text-gray-800">User Conduct</h4>
            </div>
            <div className="flex flex-col gap-4">
              {" "}
              <p className="pt-4">
                By using my web/native application, you agree to:
              </p>
              <p className="px-6">
                a. Comply with all applicable laws and regulations.
              </p>
              <p className="px-6">
                b. Not engage in any conduct that is harmful, offensive, or
                inappropriate, or that interferes with the operation of the
                web/native application or the enjoyment of other users.
              </p>
              <p className="px-6">
                c. Not use the web/native application for any unlawful purposes
                or to engage in any fraudulent or deceptive practices.
              </p>
            </div>
          </li>
          <li className="cursor-pointer py-6">
            <div className="flex items-center justify-between">
              <h4 className="mb-0 font-bold text-gray-800">
                Limitation of Liability
              </h4>
            </div>
            <div className="flex flex-col gap-4">
              {" "}
              <p className="pt-4">
                In no event shall JustinBachtell.com, its affiliates, or their
                respective agents be liable for any direct, indirect,
                incidental, special, consequential, or punitive damages,
                including but not limited to, loss of profits, data, use, or
                goodwill, resulting from (i) your access to or use of the
                web/native application; (ii) your inability to access or use the
                web/native application; (iii) any conduct or content of any
                third party on the web/native application; or (iv) any content
                obtained from the web/native application, whether based on
                warranty, contract, tort (including negligence), or any other
                legal theory, whether or not we have been advised of the
                possibility of such damages.
              </p>
            </div>
          </li>
          <li className="cursor-pointer py-6">
            <div className="flex items-center justify-between">
              <h4 className="mb-0 font-bold text-gray-800">Idemnification</h4>
            </div>
            <div className="flex flex-col gap-4">
              {" "}
              <p className="pt-4">
                You agree to indemnify, defend, and hold harmless
                JustinBachtell.com and its agents from and against any and all
                claims, liabilities, damages, losses, or expenses, including
                reasonable attorneys&apos; fees and costs, arising out of or in
                any way connected with your access to or use of the web/native
                application, your violation of these Terms of Use, or your
                infringement of any intellectual property or other rights of any
                third party.
              </p>
            </div>
          </li>
          <li className="cursor-pointer py-6">
            <div className="flex items-center justify-between">
              <h4 className="mb-0 font-bold text-gray-800">
                Changes to These Terms of Use
              </h4>
            </div>
            <div className="flex flex-col gap-4">
              {" "}
              <p className="pt-4">
                I reserve the right, at my sole discretion, to modify or replace
                these Terms of Use at any time. I will notify you of any
                material changes by posting the updated terms on my web/native
                application, and I encourage you to review these terms
                periodically to stay informed about these terms of use.
              </p>
            </div>
          </li>
          <li className="cursor-pointer py-6">
            <div className="flex items-center justify-between">
              <h4 className="mb-0 font-bold text-gray-800">
                Governing Law and Jurisdiction
              </h4>
            </div>
            <div className="flex flex-col gap-4">
              {" "}
              <p className="pt-4">
                These Terms of Use shall be governed by and construed in
                accordance with the laws of the Waukesha County, in the State of
                Wisconsin, without regard to its conflict of law provisions. You
                agree to submit to the personal and exclusive jurisdiction of
                the courts located in Waukesha County, in the State of
                Wisconsin, for the resolution of any disputes arising out of or
                relating to these Terms of Use.
              </p>
            </div>
          </li>
          <li className="cursor-pointer py-6">
            <div className="flex items-center justify-between">
              <h4 className="mb-0 font-bold text-gray-800">
                Contact Information
              </h4>
            </div>
            <div className="flex flex-col gap-4">
              {" "}
              <p className="pt-4">
                If you have any questions or concerns about these Terms of Use,
                please contact Justin Bachtell,the publisher and devloper of
                JustinBachtell.com.
              </p>
            </div>
          </li>
        </ul>
        <p className="mt-8">
          By using the JustinBachtell.com, you acknowledge that you have read,
          understood, and agreed to be bound by the Terms & Conditions of Use.
        </p>
      </div>
    </div>
  );
}
