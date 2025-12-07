import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { EmailTemplate } from "@/components/forms/email-template";
import React from "react";

export async function POST(req: Request) {
  let { email } = await req.json();
  email = email.toLowerCase();

  try {
    const data = await resend.emails.send({
      from: "Justin Bachtell <support@justinbachtell.com>",
      to: [email],
      subject: "Hello from Justin Bachtell!",
      react: EmailTemplate({ email }) as React.ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json(
      { error: "An unknown error occurred" },
      { status: 500 },
    );
  }
}
