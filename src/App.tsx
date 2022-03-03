import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => alert(`Connected as ${email} `);

  return (
    <div
      style={{
        paddingTop: "6em",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        width: "20%",
      }}
      className="App"
    >
      <label>Email</label>
      <input
        name="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        name="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <button style={{ color: "red" }} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
