import React, { useState } from "react";
import "./App.css";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div>
      <EmailInput setEmail={setEmail} />
      <PasswordInput setPassword={setPassword} />
      <SubmitButton handleClick={handleClick} />
    </div>
  );
};

export default App;
