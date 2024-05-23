"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { emailSchema } from "@/lib/validations/notification";
import { resend } from "@/lib/resend";
import { EmailTemplate } from "@/components/forms/email-template";

type Inputs = z.infer<typeof emailSchema>;

export function EmailConnectForm() {
  const [isPending, startTransition] = React.useTransition();

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: Inputs) {
    startTransition(async () => {
      try {
        const response = await fetch("/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: data.email }),
        });

        if (response.ok) {
          toast.success("Thank you for reaching out. I'll be in touch soon!");
          form.reset();
        } else {
          const errorData = await response.json();
          toast.error(`Error: ${errorData.error}`);
        }
      } catch (error) {
        if (error instanceof Error) {
          toast.error(`Error: ${error.message}`);
        }
      }
    });
  }

  return (
    <Form {...form}>
      <form
        id={"email-connect-form"}
        className="grid w-full"
        onSubmit={form.handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative space-y-0">
              <FormLabel className="sr-only">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  className="pr-12"
                  {...field}
                />
              </FormControl>
              <FormMessage />
              <Button
                className="absolute right-[3.5px] top-1/2 -translate-y-1/2 z-20 size-7"
                size="icon"
                disabled={isPending}
              >
                {isPending ? (
                  <Icons.spinner
                    className="size-3 animate-spin"
                    aria-hidden="true"
                  />
                ) : (
                  <PaperPlaneIcon className="size-3" aria-hidden="true" />
                )}
                <span className="sr-only">Connect with me</span>
              </Button>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
