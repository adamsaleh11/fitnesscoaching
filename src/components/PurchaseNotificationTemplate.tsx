interface PurchaseNotificationTemplateProps {
  customerName: string;
  customerEmail: string;
  programName: string;
  purchaseDate: string;
}

export const PurchaseNotificationTemplate = ({
  customerName,
  customerEmail,
  programName,
  purchaseDate,
}: PurchaseNotificationTemplateProps) => {
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
          New Program Purchase!
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
            Purchase Details
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
                Program:
              </td>
              <td style={{ padding: "10px 0", color: "#374151" }}>
                {programName}
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
                Customer Name:
              </td>
              <td style={{ padding: "10px 0", color: "#374151" }}>
                {customerName}
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
                Customer Email:
              </td>
              <td style={{ padding: "10px 0", color: "#374151" }}>
                <a
                  href={`mailto:${customerEmail}`}
                  style={{ color: "#2563eb", textDecoration: "none" }}
                >
                  {customerEmail}
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
                Purchase Date:
              </td>
              <td style={{ padding: "10px 0", color: "#374151" }}>
                {purchaseDate}
              </td>
            </tr>
          </table>
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
            A new customer has purchased the {programName}. You can reach them
            at{" "}
            <a
              href={`mailto:${customerEmail}`}
              style={{ color: "#1e40af", textDecoration: "underline" }}
            >
              {customerEmail}
            </a>{" "}
            to provide program details and next steps.
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
