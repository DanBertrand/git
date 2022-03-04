import { useState } from "react";

function Login() {
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
      className="Login"
    >
      <label>Email</label>
      <input
        name="Email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <label>Password</label>
      <input
        name="Password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <div>
        <button style={{ color: "red" }} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
