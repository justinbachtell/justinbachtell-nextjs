import { EnvelopeClosedIcon, MobileIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { EmailConnectForm } from "@/components/forms/email-connect-form";
import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/layouts/theme-toggle";
import { Shell } from "@/components/shell";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <Shell as="div">
        <section
          id="footer-content"
          aria-labelledby="footer-content-heading"
          className="flex flex-col gap-10 md:flex-row justify-between mx-auto lg:mx-0 max-w-full w-full px-1 overflow-hidden"
        >
          <section
            id="footer-branding"
            aria-labelledby="footer-branding-heading"
            className="flex flex-col gap-3 items-center"
          >
            <Link href="/" className="flex w-fit items-center space-x-2 pb-3">
              <Icons.logo className="size-8" aria-hidden="true" />
              <span className="font-bold">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
            {/*<Link
              href="mailto:support@justinbachtell.com"
              className="inline-flex text-muted-foreground"
            >
              <EnvelopeClosedIcon className="mr-2" />{" "}
              <p className="text-xs">support@justinbachtell.com</p>
            </Link>*/}
          </section>
          <section
            id="footer-links"
            aria-labelledby="footer-links-heading"
            className="flex flex-row gap-10 lg:gap-40 xl:pl-20"
          >
            {siteConfig.footerNav.map((item) => (
              <div key={item.title} className="space-y-3 max-w-fit">
                <h4 className="text-base font-medium">{item.title}</h4>
                <ul className="space-y-3">
                  {item.items.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        target={link?.external ? "_blank" : undefined}
                        rel={link?.external ? "noreferrer" : undefined}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.title}
                        <span className="sr-only">{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <section
            id="connect"
            aria-labelledby="connect-heading"
            className="space-y-3 max-w-72 w-full"
          >
            <h4 className="text-base font-medium">Let's connect</h4>
            <EmailConnectForm />
            <p className="text-xs text-gray-500 font-light">
              Send me your email and I'll reach out!
            </p>
          </section>
        </section>
        <section
          id="footer-bottom"
          aria-labelledby="footer-bottom-heading"
          className="flex items-center space-x-4"
        >
          <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Built by Justin Bachtell. All Rights
              Reserved.
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                }),
              )}
            >
              <Icons.github className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </Link>
            <ThemeToggle />
          </div>
        </section>
      </Shell>
    </footer>
  );
}
