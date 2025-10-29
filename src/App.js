import React, { useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages([
      ...newMessages,
      { sender: "bot", text: `You said: "${input}" (demo reply)` },
    ]);
    setInput("");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>🤖 Chat with GMI LLM (Demo)</h2>

      <div style={styles.mainContent}>
        {/* Chat Section */}
        <div style={styles.chatSection}>
          <div style={styles.chatBox}>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  ...styles.message,
                  alignSelf:
                    msg.sender === "user" ? "flex-end" : "flex-start",
                  backgroundColor:
                    msg.sender === "user" ? "#DCF8C6" : "#EAEAEA",
                }}
              >
                {msg.text}
              </div>
            ))}
            {loading && <p>Thinking...</p>}
          </div>

          <div style={styles.inputArea}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              style={styles.input}
            />
            <button onClick={handleSend} style={styles.button}>
              Send
            </button>
          </div>
        </div>

        {/* Visualization Section */}
        <div style={styles.visualizationSection}>
          <h3>📊 Visualization Area</h3>
          <p>
            This is where your data visualization will appear. You can later
            integrate libraries like <strong>Recharts</strong>,{" "}
            <strong>Plotly</strong>, or <strong>D3.js</strong>.
          </p>
          <div style={styles.placeholderChart}>
            <p>Chart Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "90%",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
  },
  header: { textAlign: "center" },
  mainContent: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "20px",
    marginTop: "20px",
  },
  chatSection: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
  },
  chatBox: {
    flex: 1,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "10px",
  },
  message: {
    padding: "10px 15px",
    borderRadius: "15px",
    maxWidth: "80%",
  },
  inputArea: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "8px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  visualizationSection: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
    backgroundColor: "#f9f9f9",
  },
  placeholderChart: {
    height: "250px",
    border: "2px dashed #bbb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
    color: "#666",
  },
};

export default App;
