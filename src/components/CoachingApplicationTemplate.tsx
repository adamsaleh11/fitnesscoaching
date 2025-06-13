import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  age: string;
  experience: string;
  goals: string;
  timeline: string;
  program: string;
  challenges: string;
  motivation: string;
}

export const CoachingApplicationTemplate: React.FC<
  Readonly<EmailTemplateProps>
> = ({
  name,
  email,
  phone,
  age,
  experience,
  goals,
  timeline,
  program,
  challenges,
  motivation,
}) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h1
          style={{ color: "#2563eb", fontSize: "24px", marginBottom: "20px" }}
        >
          New Coaching Application
        </h1>

        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "6px",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{ color: "#374151", fontSize: "18px", marginBottom: "15px" }}
          >
            Application Details
          </h2>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
              <td
                style={{
                  padding: "10px 0",
                  fontWeight: "bold",
                  color: "#6b7280",
                }}
              >
                Name:
              </td>
              <td style={{ padding: "10px 0", color: "#374151" }}>{name}</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
              <td
                style={{
                  padding: "10px 0",
                  fontWeight: "bold",
                  color: "#6b7280",
                }}
              >
                Email:
              </td>
              <td style={{ padding: "10px 0", color: "#374151" }}>
                <a
                  href={`mailto:${email}`}
                  style={{ color: "#2563eb", textDecoration: "none" }}
                >
                  {email}
                </a>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
              <td
                style={{
                  padding: "10px 0",
                  fontWeight: "bold",
                  color: "#6b7280",
                }}
              >
                Phone:
              </td>
              <td style={{ padding: "10px 0", color: "#374151" }}>
                <a
                  href={`tel:${phone}`}
                  style={{ color: "#2563eb", textDecoration: "none" }}
                >
                  {phone}
                </a>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
              <td
                style={{
                  padding: "10px 0",
                  fontWeight: "bold",
                  color: "#6b7280",
                }}
              >
                Age:
              </td>
              <td style={{ padding: "10px 0", color: "#374151" }}>{age}</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
              <td
                style={{
                  padding: "10px 0",
                  fontWeight: "bold",
                  color: "#6b7280",
                }}
              >
                Experience Level:
              </td>
              <td style={{ padding: "10px 0", color: "#374151" }}>
                {experience}
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
              <td
                style={{
                  padding: "10px 0",
                  fontWeight: "bold",
                  color: "#6b7280",
                }}
              >
                Timeline:
              </td>
              <td style={{ padding: "10px 0", color: "#374151" }}>
                {timeline}
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
              <td
                style={{
                  padding: "10px 0",
                  fontWeight: "bold",
                  color: "#6b7280",
                }}
              >
                Program Interest:
              </td>
              <td style={{ padding: "10px 0", color: "#374151" }}>{program}</td>
            </tr>
          </table>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "6px",
            marginBottom: "20px",
          }}
        >
          <h3
            style={{ color: "#374151", fontSize: "16px", marginBottom: "15px" }}
          >
            Goals & Objectives
          </h3>
          <div
            style={{
              color: "#374151",
              lineHeight: "1.6",
              fontSize: "14px",
              marginBottom: "15px",
            }}
          >
            {goals}
          </div>

          {challenges && (
            <>
              <h4
                style={{
                  color: "#374151",
                  fontSize: "14px",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                Current Challenges:
              </h4>
              <div
                style={{
                  color: "#374151",
                  lineHeight: "1.6",
                  fontSize: "14px",
                  marginBottom: "15px",
                }}
              >
                {challenges}
              </div>
            </>
          )}

          {motivation && (
            <>
              <h4
                style={{
                  color: "#374151",
                  fontSize: "14px",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                Motivation:
              </h4>
              <div
                style={{
                  color: "#374151",
                  lineHeight: "1.6",
                  fontSize: "14px",
                }}
              >
                {motivation}
              </div>
            </>
          )}
        </div>

        <div
          style={{
            backgroundColor: "#dbeafe",
            padding: "15px",
            borderRadius: "6px",
            borderLeft: "4px solid #2563eb",
          }}
        >
          <h3
            style={{ color: "#1e40af", fontSize: "16px", margin: "0 0 10px 0" }}
          >
            Next Steps
          </h3>
          <p style={{ color: "#1e40af", margin: "0", fontSize: "14px" }}>
            {name} has applied for coaching. Review their goals and experience
            level, then reach out at{" "}
            <a
              href={`mailto:${email}`}
              style={{ color: "#1e40af", textDecoration: "underline" }}
            >
              {email}
            </a>{" "}
            {phone && (
              <>
                or{" "}
                <a
                  href={`tel:${phone}`}
                  style={{ color: "#1e40af", textDecoration: "underline" }}
                >
                  {phone}
                </a>
              </>
            )}{" "}
            to discuss their {program} program.
          </p>
        </div>

        <div
          style={{
            marginTop: "20px",
            fontSize: "12px",
            color: "#6b7280",
            textAlign: "center",
          }}
        >
          <p>This is an automated notification from your coaching platform.</p>
        </div>
      </div>
    </div>
  );
};
