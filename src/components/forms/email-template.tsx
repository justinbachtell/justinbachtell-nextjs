import * as React from "react";

interface EmailTemplateProps {
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
}) => (
  <div
    style={{
      backgroundColor: "rgb(242, 242, 242)",
      fontFamily: "sans-serif",
      borderRadius: "5px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      width: "100%",
    }}
  >
    <div
      style={{
        padding: "2rem",
        alignItems: "center",
        width: "100%",
        maxWidth: "1200px",
      }}
    >
      <div
        style={{
          alignItems: "center",
          marginBottom: "1rem",
          gap: "2rem",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <img
            src="https://justinbachtell.com/images/logo-black.png"
            alt="Justin Bachtell Logo"
            width="70"
            height="70"
          />
        </div>
        <h1
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          Hey, thank you for connecting!
        </h1>
      </div>
      <div
        style={{
          alignItems: "center",
          gap: "1rem",
          width: "100%",
        }}
      >
        <p>
          Feel free to reply to this email if you have any questions, inquiries,
          or need help with anything. I'll respond as soon as I can to your
          email, {email}.
        </p>
        <p>I look forward to hearing from you!</p>
      </div>
      <div
        style={{
          alignItems: "center",
          marginTop: "1rem",
          width: "100%",
          gap: "1rem",
        }}
      >
        <p>Respectfully,</p>
        <p>Justin Bachtell</p>
      </div>
    </div>
  </div>
);
