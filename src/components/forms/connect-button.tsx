"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import * as React from "react";
import * as console from "node:console";

interface ConnectButtonProps extends ButtonProps {}

export function ConnectButton({ className, ...props }: ConnectButtonProps) {
  return (
    <Button
      variant="secondary"
      size="sm"
      className={
        "inline-flex items-center border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full px-3.5 py-1.5"
      }
      onClick={() => {
        const form = document.getElementById("email-connect-form");
        const formInput = form?.querySelector("input");
        formInput?.scrollIntoView({ behavior: "smooth" });
        formInput?.focus();
      }}
    >
      <EnvelopeClosedIcon className="mr-3 size-5" aria-hidden="true" />
      Connect with me
      <span className="sr-only">Send me a message</span>
    </Button>
  );
}
