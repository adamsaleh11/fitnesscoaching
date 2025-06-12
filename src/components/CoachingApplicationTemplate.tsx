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
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
    <h1>New Coaching Application from {name}</h1>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Phone:</strong> {phone}
    </p>
    <p>
      <strong>Age:</strong> {age}
    </p>
    <p>
      <strong>Experience:</strong> {experience}
    </p>
    <p>
      <strong>Goals:</strong> {goals}
    </p>
    <p>
      <strong>Timeline:</strong> {timeline}
    </p>
    <p>
      <strong>Program:</strong> {program}
    </p>
    {challenges && (
      <p>
        <strong>Challenges:</strong> {challenges}
      </p>
    )}
    {motivation && (
      <p>
        <strong>Motivation:</strong> {motivation}
      </p>
    )}
  </div>
);
